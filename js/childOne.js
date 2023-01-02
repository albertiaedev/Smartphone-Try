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

/*
 *   Create an instance of this smartphone
 */

const smartphoneOne = new Smartphone("Xiaomi Redmi 10", "2022", "6'", "HD", "8px", "5GB", "64GB", "15px");

smartphoneOne.smartphoneInfo();
smartphoneOne.slowMotion();
smartphoneOne.facialRecognition();