displayThePet();
refreshUserLife(0);
thisIsMySword("teolame.gif");
displayChevrette();

playChapterMusic(`stage2-9.mp3`);

whoIsTalking("Chevrette");
letterByLetter("Nous sommes parés !");
userOptions(">");

document.getElementById(">").addEventListener("click", () => {
	dialogActualisation("Boyer", `Salut les potes !`, ">");
	displayInterlocutor("boyer.gif");
});
