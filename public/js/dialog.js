function letterByLetter(message) {
	let i = 0;
	let interval = setInterval(function () {
		document.getElementById("caracterDialog").innerHTML += message.charAt(i);
		i++;
		if (i > message.length) {
			clearInterval(interval);
		}
	}, 50);
}

function whoIsTalking(name) {
	document.getElementById("caracterName").innerHTML = name;
}

function userOptions(opt1, opt2 = "", opt3 = "", opt4 = "") {
	let userOptions = document.getElementById("userOptions");
	userOptions.innerHTML += `<div class="nes-btn options">${opt1}</div>`;
	if (opt2 != "") {
		userOptions.innerHTML += `<div class="nes-btn options">${opt2}</div>`;
	}
	if (opt3 != "") {
		userOptions.innerHTML += `<div class="nes-btn options">${opt3}</div>`;
	}
	if (opt4 != "") {
		userOptions.innerHTML += `<div class="nes-btn options">${opt4}</div>`;
	}
}

function dialogActualisation(message, name, a, b, c, d)