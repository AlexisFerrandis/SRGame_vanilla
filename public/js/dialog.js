function whoIsTalking(name) {
	document.getElementById("caracterName").innerHTML = name;
}

function letterByLetter(message) {
	let i = 0;
	let interval = setInterval(function () {
		document.getElementById("caracterDialog").innerHTML += message.charAt(i);
		i++;
		if (i > message.length) {
			clearInterval(interval);
		}
	}, 10);
}

function userOptions(opt1 = "", opt2 = "", opt3 = "", opt4 = "") {
	let userOptions = document.getElementById("userOptions");
	userOptions.innerHTML += `<div id="${opt1}" class="nes-btn options">${opt1}</div>`;
	if (opt2 != "") {
		userOptions.innerHTML += `<div id="${opt2}" class="nes-btn options">${opt2}</div>`;
	}
	if (opt3 != "") {
		userOptions.innerHTML += `<div id="${opt3}" class="nes-btn options">${opt3}</div>`;
	}
	if (opt4 != "") {
		userOptions.innerHTML += `<div id="${opt4}" class="nes-btn options">${opt4}</div>`;
	}
}

function dialogActualisation(name, message, a, b, c, d) {
	let cacarcterName = document.getElementById("caracterName");
	let caracterSpeech = document.getElementById("caracterDialog");
	let BtnContainer = document.getElementById("userOptions");

	cacarcterName.innerHTML = "";
	caracterSpeech.innerHTML = "";
	BtnContainer.innerHTML = "";

	cacarcterName = whoIsTalking(name);
	BtnContainer = userOptions(a, b, c, d);
	caracterSpeech = letterByLetter(message);
}

function displayChevrette() {
	let chevrette = document.getElementById("caracterOne");
	chevrette.innerHTML = `<img src="../../../public/assets/img/chevrette.gif" alt="" />`;
	chevrette.style.opacity = "1";
}
