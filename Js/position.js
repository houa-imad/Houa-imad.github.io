const button = document.querySelector("#ouvrir-popup");
const footer = document.querySelector("footer");
const footerHeight = footer.offsetHeight;

window.addEventListener("scroll", function () {
	const buttonTop = button.offsetTop + button.offsetHeight;
	const footerTop = footer.offsetTop;

	if (buttonTop < footerTop - footerHeight) {
		button.style.position = "fixed";
		button.style.bottom = "0";
		console.log("ok");
	} else {
		button.style.position = "absolute";
		button.style.bottom = `${footerHeight}px`;
		console.log("okkk");
	}
});
