whoIsTalking("???");
letterByLetter("Ho.. Tu es finalement réveillé ? ");
userOptions(">");

// name, message, opt1, opt2, opt3, opt4
document.getElementById(">").addEventListener("click", () => {
	dialogActualisation("???", "Comment tu te sens?", ">");
	document.getElementById(">").addEventListener("click", () => {
		dialogActualisation("???", "Tu nous as fait peur...", ">");
		document.getElementById(">").addEventListener("click", () => {
			dialogActualisation("chevrette", "Je suis Chevrette, la fée de Saint-Rémy, comment t’appelles tu ?");
			displayChevrette();

			document.getElementById("userOptions").innerHTML = userNameInput;
			document.getElementById("userNameSubmit").addEventListener("click", () => {
				nameValidator();
				document.getElementById(">").addEventListener("click", () => {
					dialogActualisation("chevrette", "yolo", ">");
				});
			});
		});
	});
});

userNameInput = `
<div id ="userInput" class="nes-field is-inline userInput">
    <label for="dark_field" style="color:#fff;">Nom d'aventurier</label>
    <input id="userInputValue" type="text" id="dark_field" class="nes-input is-dark" placeholder="Denis">
    <button id="userNameSubmit" class="nes-btn" href="#">
        ok
    </button>
</div>`;

function nameValidator() {
	let userInput = document.getElementById("userInputValue");
	if (userInput.value == "") {
		alert("Il faut choisir un nom :o");
	} else {
		userName = userInput.value;
		localStorage.setItem("userName", userName);
		dialogActualisation("Chevrette", `Très bien ${userName}, je pense que tu es arrivé ici pour nous apporter ton aide.`, ">");
	}
}
