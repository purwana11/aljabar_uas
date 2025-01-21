document.getElementById("solveButton").addEventListener("click", solveMatrices);

function solveMatrices() {
    const A = [
        [2, -3],
        [4, 2]
    ];
    const B = [
        [-2, 4],
        [1, 7]
    ];
    const C = [
        [4, 7],
        [5, -2],
        [-1, 1]
    ];

    const solutionDiv = document.getElementById("solution");

    // Fungsi perkalian matriks
    function multiplyMatrices(mat1, mat2) {
        let result = Array(mat1.length).fill(0).map(() => Array(mat2[0].length).fill(0));
        for (let i = 0; i < mat1.length; i++) {
            for (let j = 0; j < mat2[0].length; j++) {
                for (let k = 0; k < mat2.length; k++) {
                    result[i][j] += mat1[i][k] * mat2[k][j];
                }
            }
        }
        return result;
    }

    // Fungsi transpose matriks
    function transposeMatrix(matrix) {
        return matrix[0].map((_, colIndex) => matrix.map(row => row[colIndex]));
    }

    // Fungsi penjumlahan matriks
    function addMatrices(mat1, mat2) {
        return mat1.map((row, i) => row.map((val, j) => val + mat2[i][j]));
    }

    // Soal a: CA
    let CA = multiplyMatrices(C, A);

    // Soal b: At(A + B)
    let At = transposeMatrix(A);
    let AplusB = addMatrices(A, B);
    let AtAplusB = multiplyMatrices(At, AplusB);

    // Soal c: (CB)^t
    let CB = multiplyMatrices(C, B);
    let CBt = transposeMatrix(CB);

    // Soal d: (B x At) - (At x B)
    let BAt = multiplyMatrices(B, At);
    let AtB = multiplyMatrices(At, B);
    let resultD = BAt.map((row, i) => row.map((val, j) => val - AtB[i][j]));

    // Menampilkan hasil dalam bentuk tabel
    solutionDiv.innerHTML = `
        <table>
            <tr><th>Soal</th><th>Hasil</th></tr>
            <tr><td>a. CA</td><td>${matrixToTable(CA)}</td></tr>
            <tr><td>b. At(A + B)</td><td>${matrixToTable(AtAplusB)}</td></tr>
            <tr><td>c. (CB)^t</td><td>${matrixToTable(CBt)}</td></tr>
            <tr><td>d. (B x At) - (At x B)</td><td>${matrixToTable(resultD)}</td></tr>
        </table>
    `;
}

// Fungsi untuk mengonversi matriks ke tabel HTML
function matrixToTable(matrix) {
    return `<table>` + matrix.map(row => `<tr>` + row.map(val => `<td>${val}</td>`).join('') + `</tr>`).join('') + `</table>`;
}
