blackScreenToDisplay("Quelques jours plus tard...");

setTimeout(() => {
	displayThePet();
	refreshUserLife(0);
	thisIsMySword("divinilame.gif");
	displayChevrette();

	playChapterMusic(`stage2-5.mp3`);

	whoIsTalking("Chevrette");
	letterByLetter("Fait pas chaud aujourd'hui !");
	userOptions(">");

	document.getElementById(">").addEventListener("click", () => {
		dialogActualisation("Chevrette", `Et on est pas sur d'avoir un train.`, ">");
	});
}, 4000);

document.getElementById("pauseBtn").addEventListener("click", () => {
	playSoundEffect("menu-click.wav");
	document.getElementById("pauseMenu").style.display = "block";
});
document.getElementById("closePauseMenuBtn").addEventListener("click", () => {
	playSoundEffect("menu-click.wav");
	document.getElementById("pauseMenu").style.display = "none";
});
document.getElementById("saveAndQuitBtn").addEventListener("click", () => {
	localStorage.setItem("userSave", window.location.href);
	location.href = "../../../index.html";
});
