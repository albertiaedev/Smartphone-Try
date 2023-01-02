class Smartphone extends Cellphone {
	constructor(model, year, size, screen, cam, ram, storage, extraCam) {
		super(model, year, size, screen, cam, ram, storage);
		this.extraCam = extraCam;
	}

	// record on slow motion
	slowMotion() {
		let slowMo = document.write(`Your ${this.model} is recording a video on slow motion.`);
		return slowMo;
	}

	// facial recognition
	facialRecognition() {
		let facial = document.write(`Facial Recognition in your ${this.model} has been activated.`);
		return facial;
	}

	// mobile info
	smartphoneInfo() {
		return document.write(
		`
			Model: ${this.model}.<br>
			Year: ${this.year}.<br>
			Size: ${this.size}.<br>
			Screen: ${this.screen}.<br>
			Cam: ${this.cam}.<br>
			RAM: ${this.ram}.<br>
			Storage: ${this.storage}.<br>
			Extra Cam: ${this.extraCam}.<br>
		`
		)
	}
}