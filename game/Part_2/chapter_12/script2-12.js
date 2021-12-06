displayThePet();
refreshUserLife(0);
thisIsMySword("teolame.gif");
displayChevrette();

playChapterMusic(`stage2-12.mp3`);

whoIsTalking("Chevrette");
letterByLetter("C'est vraiment dégoutant içi...");
userOptions(">");

document.getElementById(">").addEventListener("click", () => {
	dialogActualisation("Chevrette", `C'est crasseux...`, ">");
	document.getElementById(">").addEventListener("click", () => {
		dialogActualisation("Chevrette", `Berk !`, ">");
	});
});
