class SmartphoneTwo extends Cellphone {
	constructor(model, year, size, screen, cam, ram, storage, extraRAM) {
		super(model, year, size, screen, cam, ram, storage);
		this.extraRAM = extraRAM;
	}
}