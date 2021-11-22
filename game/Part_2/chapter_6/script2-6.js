displayThePet();
refreshUserLife(0);
thisIsMySword("divinilame.gif");
displayChevrette();
displayInterlocutor("batiatus.gif");

playChapterMusic(`stage2-6.mp3`);

whoIsTalking("Batiatus");
letterByLetter("Je vous laisse ici, j'ai à faire.");
userOptions(">");

document.getElementById(">").addEventListener("click", () => {
	dialogActualisation("Chevrette", `Merci pour tout Batiatus, au plaisir de se retrouver.`, ">");
	document.getElementById(">").addEventListener("click", () => {
		dialogActualisation("Batiatus", `A la prochaine les coupains.`, ">");
		document.getElementById(">").addEventListener("click", () => {
			dialogActualisation("Chevrette", `Bon ${userName}, quelles questions devons-nous poser en priorité ?`, "Où se trouvent les parents ?", "Où se trouve le SainRembrion ?");
			characterLeaving("bati");
			refreshImpactChoice();
		});
	});
});
