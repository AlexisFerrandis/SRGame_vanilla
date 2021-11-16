/*** DIALOG FONCTION ***/

// Display the name and speech of the talking caracter, and users options
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

// Call to print the name
function whoIsTalking(name) {
	document.getElementById("caracterName").innerHTML = name;
}

// Call to print the message letter by letter
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

// Display options with Id to get story's branch
function userOptions(opt1 = "", opt2 = "", opt3 = "", opt4 = "") {
	let userOptions = document.getElementById("userOptions");
	// 1st id's always '>'
	userOptions.innerHTML += `<div id=">" class="nes-btn options">${opt1}</div>`;
	// Then the id is the fourth first letters of the string
	if (opt2 != "") {
		userOptions.innerHTML += `<div id="${get4LetttersForId(opt2)}" class="nes-btn options">${opt2}</div>`;
	}
	if (opt3 != "") {
		userOptions.innerHTML += `<div id="${get4LetttersForId(opt3)}" class="nes-btn options">${opt3}</div>`;
	}
	if (opt4 != "") {
		userOptions.innerHTML += `<div id="${get4LetttersForId(opt4)}" class="nes-btn options">${opt4}</div>`;
	}
}

// Call to create an Id from the speech string
function get4LetttersForId(string) {
	let noSpaceString = string.split(" ").join("");
	let fourthLetters = noSpaceString.substring(0, 4).toLowerCase();
	return fourthLetters;
}

/*** CARACTER DISPLAY AND INTERACTION ***/

// Display the goat
function displayChevrette() {
	let chevrette = document.getElementById("caracterOne");
	chevrette.innerHTML = `<img src="../../../public/assets/img/chevrette.gif" alt="" />`;
	chevrette.style.opacity = "1";
}

// Display the other caracter
function displayInterlocutor(imgName) {
	let Interlocutor = document.getElementById("caracterTwo");
	Interlocutor.innerHTML = `<img id=${get4LetttersForId(imgName)} src="../../../public/assets/img/${imgName}" alt="" />`;
	Interlocutor.style.opacity = "1";
}

function caracterNameColor() {
	//TODO
}
