// JavaScript untuk portofolio Nabila aiennur hidayah.
const skills = [
	{ nama: "HTML", level: "Menengah" },
	{ nama: "CSS", level: "Menengah" },
	{ nama: "Git dan GitHub", level: "Dasar" },
	{ nama: "Desain poster dengan Canva", level: "Mahir" },
	{ nama: "JavaScript", level: "Dasar" },
];

console.log(`Jumlah keahlian: ${skills.length}`);
console.log(`Keahlian pertama: ${skills[0].nama}`);
console.table(skills);

const sedangDipelajari = skills.filter((skill) => skill.level === "Dasar");
console.log(sedangDipelajari.map((skill) => skill.nama));

const daftarSkill = document.querySelector("#daftar-skill");
const jumlahSkill = document.querySelector("#jumlah-skill");

if (daftarSkill && jumlahSkill) {
	skills.forEach((skill) => {
		const item = document.createElement("li");
		item.textContent = `${skill.nama} (${skill.level})`;
		daftarSkill.appendChild(item);
	});

	jumlahSkill.textContent = `Ada ${skills.length} keahlian yang sedang saya kembangkan.`;
}

// Daftar proyek dan filter (halaman Proyek)
const proyek = [
	{
		judul: "Halaman Profil Pertama",
		kategori: "HTML",
		gambar: "img/foto halaman profil.jpeg",
		alt: "Tangkapan layar halaman profil Nabila aiennur hidayah",
		deskripsi: "Halaman web pertama saya, berisi profil, hobi, cita-cita, keahlian, dan kontak.",
	},
	{
		judul: "Form Kontak",
		kategori: "HTML",
		gambar: "img/foto.kontak.png.png",
		alt: "Tangkapan layar form kontak",
		deskripsi: "Form kontak dengan label dan validasi bawaan browser.",
	},
	{
		judul: "Tabel Jadwal Belajar",
		kategori: "HTML",
		gambar: "img/jadwal-pelajaran.png.png",
		alt: "Tangkapan layar tabel jadwal belajar mandiri",
		deskripsi: "Jadwal belajar mingguan yang disusun menggunakan tabel HTML.",
	},
	{
		judul: "Kode JavaScript",
		kategori: "JavaScript",
		gambar: "img/code javascript.jpeg",
		alt: "Tangkapan layar kode JavaScript",
		deskripsi: "Contoh kode JavaScript yang digunakan dalam latihan.",
	},
	{
		judul: "Hasil Console JavaScript",
		kategori: "JavaScript",
		gambar: "img/lima-soal-logika.jpg.jpeg",
		alt: "Tangkapan layar hasil JavaScript di console",
		deskripsi: "Hasil dari latihan JavaScript yang ditampilkan di console.",
	},
	{
		judul: "Portofolio Responsif",
		kategori: "CSS",
		gambar: "img/portofolio.jpeg",
		alt: "Tangkapan layar halaman profil",
		deskripsi: "Halaman profil yang menampilkan informasi pribadi dan kontak.",
	}
];

const daftarProyek = document.querySelector("#daftar-proyek");
const jumlahProyek = document.querySelector("#jumlah-proyek");
const tombolFilter = document.querySelectorAll("[data-filter-proyek]");

if (daftarProyek && jumlahProyek) {
	function tampilkanProyek(daftar) {
		daftarProyek.replaceChildren();

		daftar.forEach((item) => {
			const kartu = document.createElement("article");
			kartu.className = "kartu";

			const label = document.createElement("span");
			label.className = "label";
			label.textContent = item.kategori;

			const judul = document.createElement("h3");
			judul.textContent = item.judul;

			const gambar = document.createElement("img");
			gambar.src = item.gambar;
			gambar.alt = item.alt;
			gambar.width = 280;

			const deskripsi = document.createElement("p");
			deskripsi.textContent = item.deskripsi;

			kartu.append(label, judul, gambar, deskripsi);
			daftarProyek.append(kartu);
		});

		jumlahProyek.textContent = `Menampilkan ${daftar.length} dari ${proyek.length} proyek`;
	}

	tombolFilter.forEach((tombol) => {
		tombol.addEventListener("click", () => {
			const kategori = tombol.dataset.filterProyek;
			const hasilFilter = kategori === "semua"
				? proyek
				: proyek.filter((item) => item.kategori === kategori);

			tombolFilter.forEach((item) => {
				const aktif = item === tombol;
				item.classList.toggle("aktif", aktif);
				item.setAttribute("aria-pressed", String(aktif));
			});

			tampilkanProyek(hasilFilter);
		});
	});

	tampilkanProyek(proyek);
}

// 3. Penghitung karakter pesan (halaman kontak)
const kontakPesan = document.querySelector("#pesan");
const kontakHitung = document.querySelector("#hitung-karakter");

if (kontakPesan && kontakHitung) {
	kontakHitung.textContent = `${kontakPesan.value.length}/300 karakter`;

	kontakPesan.addEventListener("input", () => {
		kontakHitung.textContent = `${kontakPesan.value.length}/300 karakter`;
	});
}