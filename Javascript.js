

let suallar = ["Azerbaycan", "Turkiye", "Macaristan", "Kolumbiya", "Amerika"];
let variantlar = ["Baki", "Ankara", "Berlin", "Paris", "Ankara", "Baki", "Berlin", "Paris", "Ankara", "Budapest", "Vasinqton", "San xose", "Baqota", "Kinsasa", "Thimphu", "Paris", "Vasinqton", "Mbabanze", "Oman", "London"];
let duzguncavablar = ["sad", 0, 0, 0, 1, 0, 0];
let variantlarherflerle = [];

	let netice = 0;
	let vara = document.getElementById("vara");
	let varb = document.getElementById("varb");
	let varc = document.getElementById("varc");
	let vard = document.getElementById("vard");
	let variantArray;
	let i = 0;
	let v = 0;
	var nextbtn = document.getElementById("next");

	nextbtn.addEventListener("click", function () {
	
		if (i < suallar.length) {
			document.getElementById("sual").innerHTML = suallar[i]
			i++;

			document.getElementById("variantA").innerHTML = variantlar[v]
			document.getElementById("variantB").innerHTML = variantlar[v + 1]
			document.getElementById("variantC").innerHTML = variantlar[v + 2]
			document.getElementById("variantD").innerHTML = variantlar[v + 3]

			variantArray = [vara, varb, varc, vard];
			if (variantArray[duzguncavablar[i]].checked === true) {
				netice = netice + 1;
				console.log(netice);
			}
			v += 4;
		}
		else {
			alert(netice);
		}
		vara.checked = false;
		varb.checked = false;
		varc.checked = false;
		vard.checked = false;
	})


