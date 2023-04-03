// Ajout des boutons pour naviguer entre les différents éléments du typedJS
const pauseBtn = document
	.querySelector(".pauseBtn")
	.addEventListener("click", pauseString);
const nextBtn = document
	.querySelector(".resetBtn")
	.addEventListener("click", resetString);
let typedAnim;
let pauseStart = true;
function animationTypedJS() {
	typedAnim = new Typed(".a-proposTxt", {
		strings: [
			`<p >Je suis actuellement en formation de développeur web/web mobile dispensé par l'<a class="linksTyped" href="https://www.afpa.fr/" target="_blank">AFPA </a>. Durant cette formation, j'ai acquis des compétences en front-end avec des technologies telles que HTML, CSS, JS et VUE.js, et en back-end avec des technologies comme PHP et SYMFONY.</p>`,
			`<p>Mon objectif est de devenir un développeur web compétent et polyvalent, capable de concevoir des applications web de haute qualité pour répondre aux besoins des utilisateurs et des clients. Si vous êtes à la recherche d'un développeur passionné et motivé pour votre prochain projet, n'hésitez pas à me <a class="linksTyped" href="#contact">contacter</a>.</p>`,
		],
		startDelay: 2500,
		cursorChar: "",
		typeSpeed: 25,
		backSpeed: 80,
		loop: false,
		backDelay: 3000,
		fadeOut: true,
	});
	console.log(typedAnim);
}

animationTypedJS();

function pauseString() {
	let pauseBtn = document.querySelector(".pauseBtn");
	if (typedAnim && pauseStart) {
		typedAnim.stop();
		pauseBtn.innerHTML = '<i class="fas fa-play"></i>';
		pauseStart = false;
	} else {
		typedAnim.start();
		pauseBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
		pauseStart = true;
	}
}

function resetString() {
	let pauseBtn = document.querySelector(".pauseBtn");
	if (typedAnim && pauseStart) {
		typedAnim.reset();
	} else {
		pauseBtn.innerHTML = `<i class="fa-solid fa-pause"></i>`;
		typedAnim.reset();
		pauseStart = false;
	}
}
