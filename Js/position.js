function getFooterHeight() {
	return document.querySelector("footer").offsetHeight;
}

function getFooterPosition() {
	return document.querySelector("footer").getBoundingClientRect();
}

function isFooterVisible() {
	const footerPosition = getFooterPosition();
	return footerPosition.top < window.innerHeight && footerPosition.bottom >= 0;
}

function updatePopupButtonPosition() {
	const popupButton = document.querySelector("#ouvrir-popup");
	if (isFooterVisible()) {
		popupButton.style.bottom = `${getFooterHeight()}px`;
		console.log("replacement du bouton météo");
	} else {
		popupButton.style.bottom = "0";
	}
}

window.addEventListener("scroll", updatePopupButtonPosition);
