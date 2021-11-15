localStorage.setItem("userLife", 5);

whoIsTalking("???");
letterByLetter("Qui va là ?!");
userOptions(">");

// name, message, opt1, opt2, opt3, opt4
document.getElementById(">").addEventListener("click", () => {
	dialogActualisation("Chevrette", `Bonjour Mr, je suis Chevrette, et voici ${userName}.`, ">");
	displayChevrette();
	document.getElementById(">").addEventListener("click", () => {
		dialogActualisation("???", `Que me voulez vous ?!`, ">");
		document.getElementById(">").addEventListener("click", () => {
			dialogActualisation("Chevrette", `Nous cherchons à obtenir des informations sur la malédiction qui s’abat sur la ville.`, ">");
			document.getElementById(">").addEventListener("click", () => {
				dialogActualisation("???", `Hoooooo...`, ">");
				document.getElementById(">").addEventListener("click", () => {
					dialogActualisation("???", `Haha.. je ne vous conseille pas de vous aventurer sur ce terrain là !`, ">");
					document.getElementById(">").addEventListener("click", () => {
						dialogActualisation("Chevrette", `Mais nous voulons protéger notre village et ses habitants !`, ">");
						document.getElementById(">").addEventListener("click", () => {
							dialogActualisation("Mr Edeliste", `Comme vous le voudrez.. Vous allez au devant des dangers ! Je suis Mr Edeliste.`, ">");
							displayInterlocutor("edeliste.png");
						});
					});
				});
			});
		});
	});
});
