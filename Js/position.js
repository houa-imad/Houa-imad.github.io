function getFooterHeight() {
	return document.querySelector("footer").offsetHeight;
}

function getFooterPosition() {
	return document.querySelector("footer").getBoundingClientRect();
}

function getPopupButtonHeight() {
	return document.querySelector("#ouvrir-popup").offsetHeight;
}

function isFooterVisible() {
	const footerPosition = getFooterPosition();
	return footerPosition.top < window.innerHeight && footerPosition.bottom >= 0;
}

function updatePopupButtonPosition() {
	const popupButton = document.querySelector("#ouvrir-popup");
	const popupContainer = document.querySelector(".popup-container");
	if (isFooterVisible()) {
		popupContainer.style.bottom = `${
			getFooterHeight() + getPopupButtonHeight()
		}px`;
		popupButton.style.bottom = `${getFooterHeight()}px`;
		console.log("replacement du bouton météo");
		console.log(getPopupButtonHeight());
	} else {
		popupButton.style.bottom = "0";
		popupContainer.style.bottom = `70px`;
	}
}

window.addEventListener("scroll", updatePopupButtonPosition);
