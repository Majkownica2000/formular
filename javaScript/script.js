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
	let objem, obsah, obvod;
	// vypocet objemu valce
	switch (volba) {
		case "objem": objem = Math.PI * Math.pow(r, 2) * v;
			break;
		case "obsah": obsah = Math.PI * Math.pow(r, 2) * 2 + 2 * Math.PI * r * v;
			break;
		case "obvod": obvod = 2 * Math.PI * r;
			break;
	}



	// zobrazeni vysledku
	switch (volba) {
		case "objem": document.getElementById("vysledek").textContent =
			"Objem válce je " + objem.toFixed(2) + " cm³";
			break;
		case "obsah": document.getElementById("vysledek").textContent =
			"Obsah válce je " + obsah.toFixed(2) + " cm²";
			break;
		case "obvod": document.getElementById("vysledek").textContent =
			"Obvod válce je " + obvod.toFixed(2) + " cm";
			break;
	}

});