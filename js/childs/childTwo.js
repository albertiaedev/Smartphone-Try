class SmartphoneTwo extends Cellphone {
	constructor(model, year, size, screen, cam, ram, storage, extraRAM) {
		super(model, year, size, screen, cam, ram, storage);
		this.extraRAM = extraRAM;
	}

	// extend ram memory
	extraRam() {
		let extend = document.write(`Your ${this.model} can extend its RAM by ${this.extraRAM}`);
		return extend;
	}
}