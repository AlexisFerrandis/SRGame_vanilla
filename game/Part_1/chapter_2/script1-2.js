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
							document.getElementById(">").addEventListener("click", () => {
								dialogActualisation("Chevrette", `Mr Edeliste, savez vous ce qui c’est passé ?`, ">");
								document.getElementById(">").addEventListener("click", () => {
									dialogActualisation("Mr Edeliste", `Ho oui...`, ">");
									document.getElementById(">").addEventListener("click", () => {
										dialogActualisation("Mr Edeliste", `J’étais là quand tout à commencé…`, ">");
										document.getElementById(">").addEventListener("click", () => {
											dialogActualisation("Mr Edeliste", `C’était il y’a une petite dizaine d’année.`, ">");
											document.getElementById(">").addEventListener("click", () => {
												dialogActualisation("Mr Edeliste", `Un élève avait un chewing-gum au CDI, mais c’était l’élève de trop malheureusement...`, ">");
												document.getElementById(">").addEventListener("click", () => {
													dialogActualisation("Mr Edeliste", `Mme Defranco avait accumulée tellement de colère contre ces chewing-gums, qu’un petit Chetan avait commencé à grandir en elle.`, ">");
													document.getElementById(">").addEventListener("click", () => {
														dialogActualisation("Mr Edeliste", `Et cet élève...  a libéré le démon!!!`, ">");
														document.getElementById(">").addEventListener("click", () => {
															dialogActualisation("Mr Edeliste", `Une Explosion de NOIRCEUUUUUUUUUUUUR,`, ">");
															document.getElementById(">").addEventListener("click", () => {
																dialogActualisation("Mr Edeliste", `De DOULEUUUUUUUUUUUUUR,`, ">");
																document.getElementById(">").addEventListener("click", () => {
																	dialogActualisation("Mr Edeliste", `Et de MALHEUUUUUUUUUUUUUUUUUR !`, ">");
																	document.getElementById(">").addEventListener("click", () => {
																		dialogActualisation("Chevrette", `Vous êtes en train de dire que c’est cette vieille dame qui est responsable de l’état de la ville ?`, ">");
																		document.getElementById(">").addEventListener("click", () => {
																			dialogActualisation("Mr Edeliste", `Je ne suis pas sur, mais c’est à partir de ce moment là que tous ces événements sont apparus.`, ">");
																			document.getElementById(">").addEventListener("click", () => {
																				dialogActualisation("Chevrette", `Qu'en penses tu ${userName}`, "Je pense qu’il est fou!", "Il est spécial, mais peut être a-t-il raison?");
																				document.getElementById("impact-container").innerHTML = `<div class="userImpactChoice"></div>`;
																			});
																		});
																	});
																});
															});
														});
													});
												});
											});
										});
									});
								});
							});
						});
					});
				});
			});
		});
	});
});
