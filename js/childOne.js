class Smartphone extends Cellphone {
	constructor(model, year, size, screen, cam, ram, storage, extraCam) {
		super(model, year, size, screen, cam, ram, storage);
		this.extraCam = extraCam;
	}
}