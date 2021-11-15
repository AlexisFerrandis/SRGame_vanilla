userName = localStorage.getItem("userName");
userLife = localStorage.getItem("userLife");

isEdelistAlive = localStorage.getItem("isEdelistAlive");

const lifeContainer = document.getElementById("lifeContainer");
switch (userLife) {
	case "5":
		lifeContainer.innerHTML = `
        <i class="nes-icon is-medium heart"></i>
        <i class="nes-icon is-medium heart"></i>
        <i class="nes-icon is-medium heart"></i>
        <i class="nes-icon is-medium heart"></i>
        <i class="nes-icon is-medium heart"></i>`;
		break;
	case "4":
		lifeContainer.innerHTML = `
            <i class="nes-icon is-medium heart"></i>
            <i class="nes-icon is-medium heart"></i>
            <i class="nes-icon is-medium heart"></i>
            <i class="nes-icon is-medium heart"></i>
            <i class="nes-icon is-medium is-transparent heart"></i>`;
		break;
	case "3":
		lifeContainer.innerHTML = `
            <i class="nes-icon is-medium heart"></i>
            <i class="nes-icon is-medium heart"></i>
            <i class="nes-icon is-medium heart"></i>
            <i class="nes-icon is-medium is-transparent heart"></i>
            <i class="nes-icon is-medium is-transparent heart"></i>`;
		break;
	case "2":
		lifeContainer.innerHTML = `
            <i class="nes-icon is-medium heart"></i>
            <i class="nes-icon is-medium heart"></i>
            <i class="nes-icon is-medium is-transparent heart"></i>
            <i class="nes-icon is-medium is-transparent heart"></i>
            <i class="nes-icon is-medium is-transparent heart"></i>`;
		break;
	case "1":
		lifeContainer.innerHTML = `
            <i class="nes-icon is-medium heart"></i>
            <i class="nes-icon is-medium is-transparent heart"></i>
            <i class="nes-icon is-medium is-transparent heart"></i>
            <i class="nes-icon is-medium is-transparent heart"></i>
            <i class="nes-icon is-medium is-transparent heart"></i>`;
		break;
	case "1":
		console.log("TODO");
		break;
	default:
		console.log("TODO");
}
