// Získání modálního okna a tlačítek
var modal = document.getElementById("myModal");
var btn = document.getElementById("openModal");
var span = document.getElementById("closeModal");

// Otevření modálního okna při kliknutí na tlačítko
btn.onclick = function () {
	modal.style.display = "block";
};

// Zavření modálního okna při kliknutí na "x"
span.onclick = function () {
	modal.style.display = "none";
};

// Zavření modálního okna při kliknutí mimo okno
window.onclick = function (event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
};

// Zpracování odeslání formuláře
document.getElementById("myForm").onsubmit = function (event) {
	event.preventDefault(); // Zabránit výchozímu chování formuláře

	// Získání hodnot z formuláře
	var title = document.getElementById("formTitle").value;
	var text = document.getElementById("formText").value;

	// Vytvoření nového výstupu
	var outputContainer = document.getElementById("outputContainer");
	var newEntry = document.createElement("div");

	newEntry.innerHTML = `<h3>${title}</h3><p>${text}</p>`;
	outputContainer.appendChild(newEntry);

	// Zavření modálního okna
	modal.style.display = "none";

	// Vyčištění formuláře
	document.getElementById("myForm").reset();
};
