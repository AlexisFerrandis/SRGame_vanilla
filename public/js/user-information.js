const userName = localStorage.getItem("userName");
const userLife = localStorage.getItem("userLife");
const userDecision = localStorage.getItem("userDecision");

const isEdelistAlive = localStorage.getItem("isEdelistAlive");

function refreshUserDecision(val) {
	let userDecision = localStorage.getItem("userDecision");
	let decisionUpdate = parseInt(userDecision) + val;
	localStorage.setItem("userDecision", decisionUpdate);
}

function refreshUserLife(val) {
	const lifeContainer = document.getElementById("lifeContainer");
	let userLife = localStorage.getItem("userLife");
	let userUpdate = parseInt(userLife) + val;
	if (userUpdate > 5) {
		userUpdate = 5;
	}
	if (userUpdate < 0) {
		userUpdate = 0;
	}
	localStorage.setItem("userLife", userUpdate);
	switch (userUpdate) {
		case 5:
			lifeContainer.innerHTML = `
        <i class="nes-icon is-medium heart"></i>
        <i class="nes-icon is-medium heart"></i>
        <i class="nes-icon is-medium heart"></i>
        <i class="nes-icon is-medium heart"></i>
        <i class="nes-icon is-medium heart"></i>`;
			break;
		case 4:
			lifeContainer.innerHTML = `
            <i class="nes-icon is-medium heart"></i>
            <i class="nes-icon is-medium heart"></i>
            <i class="nes-icon is-medium heart"></i>
            <i class="nes-icon is-medium heart"></i>
            <i class="nes-icon is-medium is-transparent heart"></i>`;
			break;
		case 3:
			lifeContainer.innerHTML = `
            <i class="nes-icon is-medium heart"></i>
            <i class="nes-icon is-medium heart"></i>
            <i class="nes-icon is-medium heart"></i>
            <i class="nes-icon is-medium is-transparent heart"></i>
            <i class="nes-icon is-medium is-transparent heart"></i>`;
			break;
		case 2:
			lifeContainer.innerHTML = `
            <i class="nes-icon is-medium heart"></i>
            <i class="nes-icon is-medium heart"></i>
            <i class="nes-icon is-medium is-transparent heart"></i>
            <i class="nes-icon is-medium is-transparent heart"></i>
            <i class="nes-icon is-medium is-transparent heart"></i>`;
			break;
		case 1:
			lifeContainer.innerHTML = `
            <i class="nes-icon is-medium heart"></i>
            <i class="nes-icon is-medium is-transparent heart"></i>
            <i class="nes-icon is-medium is-transparent heart"></i>
            <i class="nes-icon is-medium is-transparent heart"></i>
            <i class="nes-icon is-medium is-transparent heart"></i>`;
			break;
		case 0:
			gameOver();
			break;
		default:
			console.log("Error : unvalid lifebar");
	}
}

// If user is die, button to retry or go home...
function gameOver() {
	document.body.innerHTML += `
	<div id=gameOver>
		<p><span>GAME</span> OVER</p>
		<p class="u-dead">u dead :(</p>
		<button id="dieAndRetry" type="button" class="nes-btn ">Retry</button>
		<button id="toHome" type="button" class="nes-btn ">Retour au menu</button>
	<div>
	`;
	document.getElementById("dieAndRetry").addEventListener("click", () => {
		refreshUserLife(3);
		window.location.reload();
	});
	document.getElementById("toHome").addEventListener("click", () => {
		refreshUserLife(3);
		window.location.href = "../../../index.html";
	});
}

// Put a sword in inventory
function thisIsMySword(swordImgName) {
	document.getElementById("inventaireContainer").innerHTML = `
	<img id="actualSword" src="../../../public/assets/img/${swordImgName}"/>
	`;
}
