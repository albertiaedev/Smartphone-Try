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

	// mobile info
	smartphoneTwoInfo() {
		return document.write(
		`
			Model: ${this.model}.<br>
			Year: ${this.year}.<br>
			Size: ${this.size}.<br>
			Screen: ${this.screen}.<br>
			Cam: ${this.cam}.<br>
			RAM: ${this.ram}.<br>
			Storage: ${this.storage}.<br>
			Extra RAM: ${this.extraRAM}.<br>
		`
		)
	}
}

/*
 *   Create an instance of this smartphone
 */

const smartphoneTwo = new SmartphoneTwo("Xiaomi Redmi 10", "2022", "6'", "HD", "8px", "5GB", "64GB", "32GB");

smartphoneTwo.smartphoneTwoInfo();
smartphoneTwo.extraRam();
