function animationTypedJS() {
	let typedAnim = new Typed(".a-proposTxt", {
		strings: [
			`<p >Je suis actuellement en formation de développeur web/web mobile dispensé par l'<a class="linksTyped" href="https://www.afpa.fr/" target="_blank">AFPA </a>. Durant cette formation, j'ai acquis des compétences en front-end avec des technologies telles que HTML, CSS, JS et VUE.js, et en back-end avec des technologies comme PHP et SYMFONY.</p>`,
			`<p>Mon objectif est de devenir un développeur web compétent et polyvalent, capable de concevoir des applications web de haute qualité pour répondre aux besoins des utilisateurs et des clients. Si vous êtes à la recherche d'un développeur passionné et motivé pour votre prochain projet, n'hésitez pas à me <a class="linksTyped" href="#contact">contacter</a>.</p>`,
		],
		startDelay: 2500,
		cursorChar: "",
		typeSpeed: 25,
		backSpeed: 80,
		loop: true,
		backDelay: 10000,
		fadeOut: true,
	});

	console.log(typedAnim);
}

animationTypedJS();
