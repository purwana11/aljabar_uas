document.getElementById("solveButton").addEventListener("click", solveInverse);

function solveInverse() {
    const solutionDiv = document.getElementById("solution");

    // Matriks A
    let A = [
        [0, 0, 0],
        [2, 4, -1],
        [5, 4, -2]
    ];

    solutionDiv.innerHTML = `<p>Matriks A:</p> ${matrixToHTML(A)}`;

    if (isSingular(A)) {
        solutionDiv.innerHTML += `<p style="color:red;"><b>Invers tidak ada karena matriks ini singular (determinan = 0).</b></p>`;
    } else {
        solutionDiv.innerHTML += `<p>Langkah-langkah invers menggunakan OBE:</p>`;
        solutionDiv.innerHTML += `<p>Metode ini akan menggunakan matriks identitas dan operasi baris elementer (OBE).</p>`;
        solutionDiv.innerHTML += `<p><b>Catatan:</b> Metode perhitungan invers matriks non-singular bisa dilanjutkan di sistem yang mendukung OBE numerik.</p>`;
    }
}

// Fungsi menampilkan matriks dalam HTML
function matrixToHTML(matrix) {
    return `
    <table>
        ${matrix.map(row => `<tr>${row.map(val => `<td>${val}</td>`).join('')}</tr>`).join('')}
    </table>
    `;
}

// Cek apakah matriks singular (det = 0)
function isSingular(matrix) {
    let det = determinant3x3(matrix);
    return det === 0;
}

// Hitung determinan matriks 3x3
function determinant3x3(matrix) {
    const [a, b, c] = matrix[0];
    const [d, e, f] = matrix[1];
    const [g, h, i] = matrix[2];

    return a * (e * i - f * h) - b * (d * i - f * g) + c * (d * h - e * g);
}
