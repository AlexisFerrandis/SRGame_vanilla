/*** DIALOG FONCTION ***/

// Display the name and speech of the talking character, and users options
function dialogActualisation(name, message, a, b, c, d) {
	playSoundEffect("click.wav");
	let cacarcterName = document.getElementById("characterName");
	let characterSpeech = document.getElementById("characterDialog");
	let BtnContainer = document.getElementById("userOptions");

	cacarcterName.innerHTML = "";
	characterSpeech.innerHTML = "";
	BtnContainer.innerHTML = "";

	cacarcterName = whoIsTalking(name);
	BtnContainer = userOptions(a, b, c, d);
	characterSpeech = letterByLetter(message);
}

// Call to print the name
function whoIsTalking(name) {
	document.getElementById("characterName").innerHTML = name;
	document.getElementById("characterName").style.color = characterNameColor(name);
}

// Call to print the message letter by letter
function letterByLetter(message) {
	let i = 0;
	let interval = setInterval(function () {
		document.getElementById("characterDialog").innerHTML += message.charAt(i);
		i++;
		if (i > message.length) {
			clearInterval(interval);
		}
	}, setUserTextSpeed());
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

// Return text speed chosen
function setUserTextSpeed() {
	let userChoice = localStorage.getItem("textSpeedChosen");
	switch (userChoice) {
		case "0":
			return 80;
			break;
		case "1":
			return 60;
			break;
		case "2":
			return 40;
			break;
		case "3":
			return 10;
			break;
		default:
			return 40;
			break;
	}
}

// Call to create an Id from the speech string
function get4LetttersForId(string) {
	let noSpaceString = string.split(" ").join("");
	let fourthLetters = noSpaceString.substring(0, 4).toLowerCase();
	return fourthLetters;
}

// Story stage render
function storyTextDisplay(message) {
	document.getElementById("characterDialog").innerHTML = "";
	document.getElementById("characterDialog").style.textAlign = "center";
	letterByLetter(message);

	let storyOption = document.getElementById("storyOption");
	storyOption.innerHTML = `<div id=">" class="nes-btn options">></div>`;
}

/*** CHARACTER DISPLAY AND INTERACTION ***/

// Display the goat
function displayChevrette() {
	let chevrette = document.getElementById("characterOne");
	chevrette.innerHTML = `<img src="../../../public/assets/img/chevrette.gif" alt="" />`;
	chevrette.style.opacity = "1";
}

// Display the other character
function displayInterlocutor(imgName) {
	let interlocutor = document.getElementById("characterTwo");
	interlocutor.innerHTML = `<img id=${get4LetttersForId(imgName)} src="../../../public/assets/img/${imgName}" alt="" />`;
	interlocutor.style.opacity = "1";
}

// If 3rd character to display
function displayTheThird(imgName) {
	let theThird = document.getElementById("characterThree");
	theThird.innerHTML = `<img id=${get4LetttersForId(imgName)} src="../../../public/assets/img/${imgName}" alt="" />`;
	theThird.style.opacity = "1";
}

// Color name fct of the character
function characterNameColor(name) {
	switch (name) {
		case "???":
			return "white";
			break;
		case "Chevrette":
			return "purple";
			break;
		case "Mr Edeliste":
			return "green";
			break;
		case "Andréa-Fiona":
			return "brown";
			break;
		case "Jo":
			return "grey";
			break;
		case "Shinoix":
			return "yellow";
			break;
		case "XinJinPin FinLin":
			return "gold";
			break;
		case "Lettre de V":
			return "darkslateblue";
			break;
		case "Violight":
			return "darkslateblue";
			break;

		default:
			return "white";
			break;
	}
}

// Show when decision have impact (recall to stop)
function refreshImpactChoice() {
	let impactChoice = document.getElementById("choiceImpact");
	impactChoice.style.transition = "200ms";
	if (impactChoice.classList.contains("inactif")) {
		impactChoice.classList.add("actif");
		impactChoice.classList.remove("inactif");
		impactChoice.style.opacity = 1;
	} else if (impactChoice.classList.contains("actif")) {
		impactChoice.style.opacity = 0;
		impactChoice.classList.remove("actif");
		impactChoice.classList.add("inactif");
	}
}

// Character falling
function characterFalling(imgId) {
	document.getElementById(imgId).style.transition = "1000ms";
	document.getElementById(imgId).style.opacity = "0";
	document.getElementById(imgId).style.transform = "translateY(150px)";
}

// White screen
function whiteScreen() {
	document.body.innerHTML += `<div id ="whiteScreen"></div>`;
	let whiteScreen = document.getElementById("whiteScreen");
	setTimeout(() => {
		whiteScreen.style.opacity = 1;
	}, this.animationDelay + 20);
	setTimeout(() => {
		whiteScreen.style.display = "none";
	}, 3000);
}

/*** AUDIO MANIPULATION ***/

// Music level
function playChapterMusic(musicName) {
	musicLevel = new Audio(`../../../public/assets/audio/music/${musicName}`);
	let gameVolume = localStorage.getItem("volumeChosen");
	switch (gameVolume) {
		case "0":
			musicLevel.volume = 0;
			break;
		case "1":
			musicLevel.volume = 0.2;
			break;
		case "2":
			musicLevel.volume = 0.4;
			break;
		case "3":
			musicLevel.volume = 0.7;
			break;
		case "4":
			musicLevel.volume = 1;
			break;
		default:
			musicLevel.volume = 0.1;
			break;
	}
	musicLevel.play();
	musicLevel.loop = true;
}

// Music level
function playSoundEffect(soundName) {
	theSound = new Audio(`../../../public/assets/audio/sound/${soundName}`);
	let gameVolume = localStorage.getItem("volumeChosen");
	let isSoundEffectActif = localStorage.getItem("isSoundEffectActif");

	if (isSoundEffectActif == "true") {
		switch (gameVolume) {
			case "0":
				theSound.volume = 0;
				break;
			case "1":
				theSound.volume = 0.05;
				break;
			case "2":
				theSound.volume = 0.12;
				break;
			case "3":
				theSound.volume = 0.2;
				break;
			case "4":
				theSound.volume = 0.23;
				break;
			default:
				theSound.volume = 0.12;
				break;
		}
		theSound.play();
	}
}

/*** SET DEFAULT OPTIONS ***/
function setDefaultOptions() {
	localStorage.setItem("volumeChosen", 1);
	localStorage.setItem("textSpeedChosen", 2);
	localStorage.setItem("isSoundEffectActif", true);
	localStorage.setItem("userLife", 0);
}
