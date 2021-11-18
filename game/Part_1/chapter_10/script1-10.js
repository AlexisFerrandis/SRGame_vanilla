displayThePet();
refreshUserLife(0);
thisIsMySword("divinilame.gif");
displayChevrette();

playChapterMusic(`stage1-10.mp3`);

whoIsTalking("Chevrette");
letterByLetter("Pas très accueillant comme endroit !");
userOptions(">");

document.getElementById(">").addEventListener("click", () => {
	dialogActualisation("???", `Zdrazvouitié mon bichon.`, ">");
	document.getElementById(">").addEventListener("click", () => {
		dialogActualisation("Chevrette", `D’où vient cette voix de chaudasse endormie ?`, ">");
		document.getElementById(">").addEventListener("click", () => {
			dialogActualisation("Souillimoff", `C’est moi, Soulisouli.`, ">");
			displayInterlocutor("souillimoff.gif");
			document.getElementById(">").addEventListener("click", () => {
				dialogActualisation("Chevrette", `Mon dieu, quelle abomination.`, ">");
				document.getElementById(">").addEventListener("click", () => {
					dialogActualisation("Souillimoff", `Vous auriez pas un..`, ">");
					document.getElementById(">").addEventListener("click", () => {
						dialogActualisation("Souillimoff", `Un p’tit radiateur à dépanne ?`, ">");
						document.getElementById(">").addEventListener("click", () => {
							dialogActualisation("Chevrette", `On est en pleine été ?`, ">");
							document.getElementById(">").addEventListener("click", () => {
								dialogActualisation("Souillimoff", `Da da, mais j’ai besoin de me frotter vous comprenez ?`, ">");
								document.getElementById(">").addEventListener("click", () => {
									dialogActualisation("Souillimoff", `J'aime la chaleur...`, "Reculez sorcière !", "Quelle indignité !");

									let options = document.querySelectorAll(".options");
									for (let i = 0; i < options.length; i++) {
										options[i].addEventListener("click", () => {
											dialogActualisation("Chevrette", `Il va falloir être d'attaque aujourd'hui.`, ">");
										});
									}
								});
							});
						});
					});
				});
			});
		});
	});
});
