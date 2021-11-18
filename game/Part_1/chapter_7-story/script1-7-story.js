storyTextDisplay("Cela faisait longtemps que les trois réceptacles avaient été infectés.");

document.getElementById(">").addEventListener("click", () => {
	storyTextDisplay("Le premier par la rancœur.");
	portalDisplay();
	document.getElementById(">").addEventListener("click", () => {
		storyTextDisplay("Le second par la bêtise.");
		portalDisplay();
		document.getElementById(">").addEventListener("click", () => {
			storyTextDisplay("Et le troisième par l’oisiveté.");
			portalDisplay();
			document.getElementById(">").addEventListener("click", () => {
				storyTextDisplay("Ce qui les transforma doucement en entité maléfique.");
				document.getElementById(">").addEventListener("click", () => {
					storyTextDisplay("Defrancorrible.");
					entitiDisplay("defranco.gif");
					document.getElementById(">").addEventListener("click", () => {
						storyTextDisplay("Demouniraque.");
						entitiDisplay("mounir.gif");
						document.getElementById(">").addEventListener("click", () => {
							storyTextDisplay("Marcelediction.");
							entitiDisplay("marcel.gif");
							document.getElementById(">").addEventListener("click", () => {
								storyTextDisplay("Leur perversité implosa, réunissant tout le mal qui pouvait se trouver dans la ville.");
								lightDisplay();
								document.getElementById(">").addEventListener("click", () => {
									storyTextDisplay("Et de cette fusion naquis…");
								});
							});
						});
					});
				});
			});
		});
	});
});

function portalDisplay() {
	document.getElementById("portalsContainer").innerHTML += `
    <div class="entitiPortal">
        <img src="../../../public/assets/img/entite.gif" />
    </div>
    `;
}
function entitiDisplay(imgName) {
	document.getElementById("entitiesContainer").innerHTML += `
    <div class="entitiesImg">
        <img src="../../../public/assets/img/${imgName}" />
    </div>
    `;
}
function lightDisplay() {
	document.getElementById("lightContainer").innerHTML += `
    <div class="lightImg">
        <img src="../../../public/assets/img/thelight.gif" />
    </div>
    `;
}
