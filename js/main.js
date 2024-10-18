// Získání modálního okna a tlačítek
let modal = document.getElementById("myModal");
let btn = document.getElementById("openModal");
let span = document.getElementById("closeModal");

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
