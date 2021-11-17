refreshUserLife(0);

whoIsTalking("Chevrette");
letterByLetter("Pas facile le réveil aujourd'hui.");
userOptions(">");
displayChevrette();

document.getElementById(">").addEventListener("click", () => {
	dialogActualisation("Chevrette", `Comment vas tu ${userName}`, "Ca va.", "Un peu fatigué.", "Belle gueule de bois.");
	let options = document.querySelectorAll(".options");
	for (let i = 0; i < options.length; i++) {
		options[i].addEventListener("click", () => {
			dialogActualisation("Chevrette", `Il va falloir être d'attaque aujourd'hui.`, ">");
			document.getElementById(">").addEventListener("click", () => {
				dialogActualisation("Shinoix", `Halte là !`, ">");
				document.getElementById(">").addEventListener("click", () => {
					displayInterlocutor("shinoix.gif");
					dialogActualisation("Chevrette", `Bonjour, nous souhaiterions nous entretenir avec votre chef.`, ">");
					document.getElementById(">").addEventListener("click", () => {
						dialogActualisation("Shinoix", `Vous pourrez continuer sur nos terre si vous répondez à mon énigme.`, ">");
						document.getElementById(">").addEventListener("click", () => {
							dialogActualisation("Chevrette", `Continuez Jackson, vous m'intéressez.`, ">");
							document.getElementById(">").addEventListener("click", () => {
								refreshImpactChoice();
								dialogActualisation("Shinoix", `Quel est votre nom?`, "Etienne Houzey", "Sheshounet", userName, "Kimono Kaki");

								document.getElementById(">").addEventListener("click", () => {
									dialogActualisation("Shinoix", "Dommage !", ">");
									refreshUserLife(-1);
									refreshImpactChoice();
									document.getElementById(">").addEventListener("click", () => {
										dialogActualisation("Shnoix", "Retour à la case départ !", ">");
										document.getElementById(">").addEventListener("click", () => {
											window.location.reload();
										});
									});
								});
								document.getElementById("shes").addEventListener("click", () => {
									dialogActualisation("Shinoix", "Dommage !", ">");
									refreshUserLife(-1);
									refreshImpactChoice();
									document.getElementById(">").addEventListener("click", () => {
										dialogActualisation("Shnoix", "Retour à la case départ !", ">");
										document.getElementById(">").addEventListener("click", () => {
											window.location.reload();
										});
									});
								});
								document.getElementById("kimo").addEventListener("click", () => {
									dialogActualisation("Shinoix", "Dommage !", ">");
									refreshUserLife(-1);
									refreshImpactChoice();
									document.getElementById(">").addEventListener("click", () => {
										dialogActualisation("Shnoix", "Retour à la case départ !", ">");
										document.getElementById(">").addEventListener("click", () => {
											window.location.reload();
										});
									});
								});
								document.getElementById(get4LetttersForId(userName)).addEventListener("click", () => {
									dialogActualisation("Shinoix", "BRAVO", ">");
									refreshImpactChoice();
									document.getElementById(">").addEventListener("click", () => {
										dialogActualisation("Shnoix", "Retour à la case départ !", ">");
										document.getElementById(">").addEventListener("click", () => {
											window.location.reload();
										});
									});
								});
							});
						});
					});
				});
			});
		});
	}
});
