const tombolTema = document.querySelector(".tombol-tema");
const bodyHalaman = document.body;

if (localStorage.getItem("tema") === "gelap") {
	bodyHalaman.classList.add("gelap");
}

if (tombolTema) {
	const perbaruiLabel = () => {
		tombolTema.textContent = bodyHalaman.classList.contains("gelap")
			? "☀️ Mode Terang"
			: "🌙 Mode Gelap";
	};

	perbaruiLabel();

	tombolTema.addEventListener("click", () => { 
		bodyHalaman.classList.toggle("gelap");
		localStorage.setItem(
			"tema",
			bodyHalaman.classList.contains("gelap") ? "gelap" : "terang"
		);
		perbaruiLabel();
	});
}