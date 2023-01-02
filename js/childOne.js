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
}