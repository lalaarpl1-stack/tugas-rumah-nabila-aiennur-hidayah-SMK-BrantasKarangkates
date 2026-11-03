// Latihan JavaScript Dasar - Minggu 06
// Kalkulator nilai rapor di Console
// 1. Pesan pertama ke Console
console.log("Halo, saya nabila aiennnur hidayah!");
console.log("Ini latihan JavaScript pertamaku.");
// 2. Data siswa
const nama = "Nabila aiennur hidayah";
const kelas = "X PPLG 1";
const kkm = 75;
let nilaiTugas = 85;
let nilaiUts = 78;
let nilaiUas = 89;
let kehadiran = 90;
console.log(`Nama: ${nama}, kelas ${kelas}`);
console.log(`Nilai tugas ${nilaiTugas}, UTS ${nilaiUts}, UAS $
{nilaiUas}`);
// 3. Fungsi
const hitungRataRata = (tugas, uts, uas) => (tugas + uts + uas) / 3;
function predikat(nilai) {
    if (nilai >= 90) {
        return "A";
    } else if (nilai >= 80) {
        return "B";
    } else if (nilai >= 70) {
        return "C";
    } else {
        return "D";
    }
}
function rapor(namaSiswa, tugas, uts, uas) {
    const rata = hitungRataRata(tugas, uts, uas);
    return `${namaSiswa}: rata-rata ${rata}, predikat $
{predikat(rata)}`;
}
// 4. Hasil nilai nabila aiennur hidayah
const rataRata = hitungRataRata(nilaiTugas, nilaiUts, nilaiUas);
const lulus = rataRata >= kkm;
const dapatSertifikat = lulus && kehadiran >= 80;
console.log(`Rata-rata nilai: ${rataRata}`);
console.log(`Predikat: ${predikat(rataRata)}`);
console.log(`Lulus KKM: ${lulus}`);
console.log(`Dapat sertifikat: ${dapatSertifikat}`);
// Pesan kelulusan
if (lulus) {
    console.log("Selamat, kamu lulus KKM!");
} else {
    console.log("Tetap semangat, ikuti remedial ya.");
}
// 5. Menguji fungsi predikat dengan beberapa nilai
console.log(`predikat(95) = ${predikat(95)}`); // A
console.log(`predikat(90) = ${predikat(90)}`); // A, tepat di batas
console.log(`predikat(84) = ${predikat(84)}`); // B
console.log(`predikat(70) = ${predikat(70)}`); // C
console.log(`predikat(69) = ${predikat(69)}`); // D
// 6. Rapor beberapa siswa
console.log(rapor("nabila aiennur hidayah", 85, 78, 89));
console.log(rapor("Sinta", 92, 88, 96));
console.log(rapor("Budi", 70, 65, 72));

const form = document.getElementById("formNilai");
const hasil = document.getElementById("hasil");

// ===================================
// SOAL 1: GANJIL ATAU GENAP
// ===================================

function ganjilGenap(angka) {
    if (angka % 2 === 0) {
        return "genap";
    } else {
        return "ganjil";
    }
}

console.log("Soal 1: ganjil atau genap");
console.log(`ganjilGenap(7) = ${ganjilGenap(7)}`);
console.log(`ganjilGenap(12) = ${ganjilGenap(12)}`);
console.log(`ganjilGenap(0) = ${ganjilGenap(0)}`);


// ===================================
// SOAL 2: KONVERSI SUHU
// ===================================

const celsiusKeFahrenheit = (celsius) => {
    return (celsius * 9 / 5) + 32;
};

console.log("Soal 2: konversi suhu");
console.log(`celsiusKeFahrenheit(0) = ${celsiusKeFahrenheit(0)}`);
console.log(`celsiusKeFahrenheit(100) = ${celsiusKeFahrenheit(100)}`);
console.log(`celsiusKeFahrenheit(-40) = ${celsiusKeFahrenheit(-40)}`);


// ===================================
// SOAL 3: NILAI TERBESAR
// ===================================

function nilaiTerbesar(a, b, c) {
    if (a >= b && a >= c) {
        return a;
    } else if (b >= a && b >= c) {
        return b;
    } else {
        return c;
    }
}

console.log("Soal 3: nilai terbesar");
console.log(`nilaiTerbesar(5, 9, 2) = ${nilaiTerbesar(5, 9, 2)}`);
console.log(`nilaiTerbesar(80, 75, 80) = ${nilaiTerbesar(80, 75, 80)}`);
console.log(`nilaiTerbesar(-3, -7, -1) = ${nilaiTerbesar(-3, -7, -1)}`);


// ===================================
// SOAL 4: TAHUN KABISAT
// ===================================

function tahunKabisat(tahun) {
    if (tahun % 400 === 0) {
        return true;
    } else if (tahun % 100 === 0) {
        return false;
    } else if (tahun % 4 === 0) {
        return true;
    } else {
        return false;
    }
}

console.log("Soal 4: tahun kabisat");
console.log(`tahunKabisat(2024) = ${tahunKabisat(2024)}`);
console.log(`tahunKabisat(2026) = ${tahunKabisat(2026)}`);
console.log(`tahunKabisat(1900) = ${tahunKabisat(1900)}`);
console.log(`tahunKabisat(2000) = ${tahunKabisat(2000)}`);


// ===================================
// SOAL 5: DISKON BELANJA
// ===================================

function hargaSetelahDiskon(total) {
    if (total >= 200000) {
        return total - (total * 20 / 100);
    } else if (total >= 100000) {
        return total - (total * 10 / 100);
    } else {
        return total;
    }
}

console.log("Soal 5: diskon belanja");
console.log(`hargaSetelahDiskon(250000) = ${hargaSetelahDiskon(250000)}`);
console.log(`hargaSetelahDiskon(100000) = ${hargaSetelahDiskon(100000)}`);
console.log(`hargaSetelahDiskon(75000) = ${hargaSetelahDiskon(75000)}`);