const valec = {
	polomer: 0,
	vyska: 0,

	nastav(r, v) {
		this.polomer = r;
		this.vyska = v;
	},

	vypocetObjemu() {
		return Math.PI * Math.pow(this.polomer, 2) * this.vyska;
	},

	vypocetObsahu() {
		return Math.PI * Math.pow(this.polomer, 2) * 2 + 2 * Math.PI * this.polomer * this.vyska;
	},

	vypocetObvodu() {
		return 2 * Math.PI * this.polomer;
	}
};

document.getElementById("spocitat").addEventListener("click", function () {
	let r = document.getElementById("polomer").value;
	let v = document.getElementById("vyska").value;
	let volba = document.getElementById("volba").value;

	// prevod na cislo s desetinou carkou
	r = parseFloat(r);
	v = parseFloat(v);

	// kontrola vstupniho cisla
	if (isNaN(r) || isNaN(v) || r <= 0 || v <= 0) {
		document.getElementById("vysledek").textContent = "Zadej kladné čísla pro poloměr a výšku!";
		return;
	}

	//nastaveni hodnot objektu valec
	valec.nastav(r, v);

	//vytvoreni promenne pro vysledek
	let vysledek = 0;

	// vyvolani funkci pro vypocet objemu valce
	switch (volba) {
		case "objem": vysledek = valec.vypocetObjemu();
			break;
		case "obsah": vysledek = valec.vypocetObsahu();
			break;
		case "obvod": vysledek = valec.vypocetObvodu();
			break;
	}

	// zobrazeni vysledku
	switch (volba) {
		case "objem": document.getElementById("vysledek").textContent =
			"Objem válce je " + vysledek.toFixed(2) + " cm³";
			break;
		case "obsah": document.getElementById("vysledek").textContent =
			"Obsah válce je " + vysledek.toFixed(2) + " cm²";
			break;
		case "obvod": document.getElementById("vysledek").textContent =
			"Obvod válce je " + vysledek.toFixed(2) + " cm";
			break;
	}

});