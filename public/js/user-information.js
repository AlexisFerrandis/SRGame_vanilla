userName = localStorage.getItem("userName");
userLife = localStorage.getItem("userLife");

isEdelistAlive = localStorage.getItem("isEdelistAlive");

function refreshUserDecision(val) {
	let userDecision = localStorage.getItem("userDecision");
	let decisionUpdate = parseInt(userDecision) + val;
	localStorage.setItem("userDecision", decisionUpdate);
}

function refreshUserLife(val) {
	const lifeContainer = document.getElementById("lifeContainer");
	let userLife = localStorage.getItem("userLife");
	let userUpdate = parseInt(userLife) + val;
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
			console.log("TODO");
			break;
		default:
			console.log("TODO");
	}
}
