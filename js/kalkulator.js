
const form = document.getElementById("formNilai");
const hasil = document.getElementById("hasil");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const tugas = Number(document.getElementById("tugas").value);
    const uts = Number(document.getElementById("uts").value);
    const uas = Number(document.getElementById("uas").value);

    // Menghitung rata-rata
    const rataRata = (tugas + uts + uas) / 3;

    // Menentukan predikat
    let predikat;
    let keterangan;

    if (rataRata >= 90) {
        predikat = "A";
        keterangan = "Sangat Baik";
    } else if (rataRata >= 80) {
        predikat = "B";
        keterangan = "Baik";
    } else if (rataRata >= 70) {
        predikat = "C";
        keterangan = "Cukup";
    } else if (rataRata >= 60) {
        predikat = "D";
        keterangan = "Perlu Belajar Lagi";
    } else {
        predikat = "E";
        keterangan = "Belum Lulus";
    }

    // Menampilkan hasil
    hasil.innerHTML = `
        <h3>Hasil Perhitungan</h3>
        <p>Rata-rata: ${rataRata.toFixed(1)}</p>
        <p>Predikat: ${predikat}</p>
        <p>Keterangan: ${keterangan}</p>
    `;
});