const ville = document.querySelector(".ville");
const temperature = document.querySelector(".temperature");
const popupContainer = document.querySelector(".popup-container");
const bouton = document.querySelector(".changeBtn");
const popupBtn = document.querySelector("#ouvrir-popup");
const villeInput = document.querySelector("#ville");
const icon = document.querySelector(".icon");
let villeDefaut = "Strasbourg";

popupBtn.addEventListener("click", function () {
	if (popupContainer.classList.contains("open")) {
		popupContainer.classList.remove("open");
		console.log("fermé");
	} else {
		popupContainer.classList.add("open");
		console.log("ouvert");
	}
});

async function recupererMeteo(ville) {
	const cleAPI = "2f27f2cd64d07102da6e9be9feb575f7";
	const url = `https://api.openweathermap.org/data/2.5/weather?q=${ville}&appid=${cleAPI}&units=metric`;
	const reponse = await axios.get(url);
	const donnees = reponse.data;
	return donnees;
}

bouton.addEventListener("click", function (e) {
	e.preventDefault();
	const villeSaisie = document.querySelector("#ville").value;
	afficherMeteo(villeSaisie);
	console.log("Fonctionnel");
});

villeInput.addEventListener("keydown", function (event) {
	if (event.key === "Enter") {
		event.preventDefault();
		const villeSaisie = villeInput.value;
		afficherMeteo(villeSaisie);
		console.log("Fonctionnel");
	}
});

function afficherMeteo(villeSaisie) {
	if (!villeSaisie) {
		villeSaisie = villeDefaut;
	}
	recupererMeteo(villeSaisie)
		.then((donnees) => {
			ville.textContent = donnees.name;
			temperature.textContent = donnees.main.temp + "°C";
			icon.innerHTML = `<img src="https://openweathermap.org/img/w/${donnees.weather[0].icon}.png"><img src="https://openweathermap.org/img/w/${donnees.weather[0].icon}.png ">`;
			console.log("appelé");
		})
		.catch((erreur) => {
			console.log(erreur);
		});
}

afficherMeteo('Strasbourg');
