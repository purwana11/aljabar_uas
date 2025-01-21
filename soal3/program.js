document.getElementById("solveButton").addEventListener("click", solveCramer);

// Fungsi untuk menyelesaikan SPL dengan Aturan Cramer
function solveCramer() {
    // Matriks koefisien
    const A = [
        [1, 1, 1],   // x + y + z
        [1, -2, 1],  // x - 2y + z
        [-2, 1, 1]   // -2x + y + z
    ];

    // Vektor konstanta
    const B = [-6, 3, 9];

    // Fungsi untuk menghitung determinan matriks 3x3
    function determinant3x3(matrix) {
        return (
            matrix[0][0] * (matrix[1][1] * matrix[2][2] - matrix[2][1] * matrix[1][2]) -
            matrix[0][1] * (matrix[1][0] * matrix[2][2] - matrix[2][0] * matrix[1][2]) +
            matrix[0][2] * (matrix[1][0] * matrix[2][1] - matrix[2][0] * matrix[1][1])
        );
    }

    // Fungsi untuk mengganti kolom matriks dengan vektor konstanta
    function replaceColumn(matrix, columnIndex, vector) {
        return matrix.map((row, i) => row.map((val, j) => (j === columnIndex ? vector[i] : val)));
    }

    // Hitung determinan utama (detA)
    const detA = determinant3x3(A);
    if (detA === 0) {
        document.getElementById("solution").innerHTML = "SPL tidak memiliki solusi karena determinan matriks utama bernilai 0.";
        return;
    }

    // Hitung determinan untuk masing-masing variabel
    const detX = determinant3x3(replaceColumn(A, 0, B));
    const detY = determinant3x3(replaceColumn(A, 1, B));
    const detZ = determinant3x3(replaceColumn(A, 2, B));

    // Hitung nilai x, y, z
    const x = detX / detA;
    const y = detY / detA;
    const z = detZ / detA;

    // Tampilkan hasil
    document.getElementById("solution").innerHTML = `
        <p><b>Hasil Penyelesaian:</b></p>
        <p>x = ${x.toFixed(2)}</p>
        <p>y = ${y.toFixed(2)}</p>
        <p>z = ${z.toFixed(2)}</p>
    `;
}
