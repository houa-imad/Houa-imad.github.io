class Slideshow {
	constructor(img, txt, time, href) {
		this.img = img;
		this.txt = txt;
		this.href = href;
		this.time = time;
		this.flexBtn = document.querySelector(".btn3");
		this.slider = document.querySelector("#Imgsld");
		this.btnNext = document.querySelector("#btn2");
		this.btnPrec = document.querySelector("#btn");
		this.pause = document.querySelector("#btn3");

		this.i = 0;

		document.addEventListener("keydown", this.keyboard.bind(this));
		this.btnPrec.addEventListener("click", this.imgprc.bind(this));
		this.btnNext.addEventListener("click", () => {
			this.imgpls();
		});
		this.pause.addEventListener("click", this.playPause.bind(this));

		this.playPause();
		document.querySelector("#Imgsld").src = this.img[this.i];
		let a = document.querySelector(".lienImage");
		a.href = this.href[this.i];
		document.querySelector("#description").textContent = this.txt[this.i];
	}

	playPause() {
		if (this.autotime) {
			clearInterval(this.autotime);
			this.autotime = null;
			console.log("Pause");
		} else {
			this.autotime = setInterval(() => {
				this.imgpls();
			}, this.time);
			console.log("Play");
		}
		this.changeBtn();
	}

	changeBtn() {
		if (this.autotime != null) {
			this.flexBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
		} else {
			this.flexBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
		}
	}

	imgpls() {
		if (this.i < this.img.length - 1) {
			this.i++;
		} else {
			this.i = 0;
		}
		this.playPause();
		this.playPause();
		console.log(this.img[this.i], this.i);
		document.querySelector("#Imgsld").src = this.img[this.i];
		let a = document.querySelector(".lienImage");
		a.href = this.href[this.i];
		document.querySelector("#description").textContent = this.txt[this.i];
	}

	imgprc() {
		if (this.i > 0) {
			this.i--;
		} else {
			this.i = this.img.length - 1;
		}
		this.playPause();
		this.playPause();
		document.querySelector("#Imgsld").src = this.img[this.i];
		let a = document.querySelector(".lienImage");
		a.href = this.href[this.i];
		document.querySelector("#description").textContent = this.txt[this.i];
	}

	keyboard(e) {
		switch (e.keyCode) {
			case 37:
				this.imgprc();
				break;
			case 39:
				this.imgpls();
				break;
			case 32:
				this.playPause();
				break;
		}
	}
}

let carousel = new Slideshow(
	[
		"/images/thumbnail1.jpg",
		"/images/thumbnail2.jpg",
		"/images/thumbnail3.jpg",
	],
	[
		"Projet d'intégration d'un site d'une ville pour favoriser le tourisme. Entièrement en HTML et CSS",
		"Projet d'intégration d'un restaurant Géorgien. HTML, CSS, SCSS",
		"test test test test",
	],
	2000,
	["/Kyoto/index.html", "/scssGeorgia/index.html", "https://example.com/page3"]
);
