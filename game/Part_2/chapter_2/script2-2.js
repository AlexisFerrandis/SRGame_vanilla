displayThePet();
refreshUserLife(0);
thisIsMySword("divinilame.gif");
displayChevrette();
displayInterlocutor("chevre-noir.gif");

playChapterMusic(`stage1-12.mp3`);

whoIsTalking("Chevrette");
letterByLetter("Chèvre noir?..");
userOptions(">");

document.getElementById(">").addEventListener("click", () => {
	dialogActualisation("Chevrette", `Ca fait tellement longtemps !`, ">");
	document.getElementById(">").addEventListener("click", () => {
		dialogActualisation("Chèvre noir", `Salut Chevrette.`, ">");
		document.getElementById(">").addEventListener("click", () => {
			dialogActualisation("Chèvre noir", `Qu'est ce que tu fait là?`, ">");
		});
	});
});
