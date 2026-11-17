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

// 5. Repositori GiHub terbaru (halaman Proyek)
const username = "lalaarpl1-stack"; 
const alamatRepo = `https://api.github.com/users/lalaarpl1-stack/repos`;
const pilihan ="?sort=updated&per_page=6";
const daftarRepo = document.querySelector("#daftar-repo");
const statusRepo = document.querySelector("#status-repo");

async function ambilRepositori() {
	const ressponse = await fetch(alamatRepo + pilihan);
	const repos = await ressponse.json();
}
if (daftarRepo) {
	ambilRepositori();
}
async function ambilRepositori() {
	try {
		const response = await fetch(alamatRepo + pilihan);
		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}
		const repos = await response.json();
		const enamRepoTerbaru = repos
			.sort((a, b) => b.updated_at.localeCompare(a.updated_at))
			.slice(0, 6);

		daftarRepo.replaceChildren();
		enamRepoTerbaru.forEach((repo) => {
			const item = document.createElement("li");
			const tautan = document.createElement("a");
			tautan.href = repo.html_url;
			tautan.target = "_blank";
			tautan.rel = "noopener noreferrer"; 
			tautan.textContent = repo.name;
			item.appendChild(tautan);
			item.append(
				` (${repo.language || "tanpa bahasa"}, ${repo.stargazers_count} bintang)`
			);
			daftarRepo.appendChild(item);
		});
		statusRepo.textContent = `${enamRepoTerbaru.length} repository terbaru:`;
	} catch (error) {
		statusRepo.textContent = "Maaf, daftar repository gagal dimuat. Periksa username atau coba lagi.";
		console.error("Error:", error);
	}
}

if (statusRepo) {
	statusRepo.textContent = "Memuat repositori...";
	ambilRepositori();
}
async function ambilRepo() {
    statusRepo.textContent = "Memuat...";

    try {
		const response = await fetch(alamatRepo + pilihan);
		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}
		const repos = await response.json();

		repos.forEach((repo) => {
			const item = document.createElement("li");
			const tautan = document.createElement("a");
			tautan.href = repo.html_url;
            tautan.target = "_blank";
			tautan.textContent = repo.name;
			item.appendChild(tautan);
			daftarRepo.appendChild(item);
		});
		statusRepo.textContent = `${repos.length} repository yang terakhir diperbarui:` ;
	}
	catch (error) {
		statusRepo.textContent = "Maaf, daftar repository gagal memuat.Periksa username atau coba lagi.";
		console.error(error);
	}
}

// 1. Daftar keahlian (halaman Beranda), data dari data/keahlian.json
const daftarskill = document.querySelector("#daftar-skill");
const jumlahskill = document.querySelector("#jumlah-skill");

async function ambilKeahlian() {
	try {
		const response = await fetch("data/keahlian.json");
		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}
		const keahlian = await response.json();

		keahlian.forEach((skill) => {
			const item = document.createElement("li");
			item.textContent = `${skill.nama} (${skill.level})`;
			daftarskill.appendChild(item);
		});

		jumlahskill.textContent = `Ada ${keahlian.length} keahlian yang sedang saya kembangkan.`;
	} catch (error) {
		jumlahskill.textContent = "Gagal memuat daftar keahlian.";
		console.error(error);
	}
}
if (jumlahskill) {
	ambilKeahlian();
}