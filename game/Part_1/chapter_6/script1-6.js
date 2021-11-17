refreshUserLife(0);

whoIsTalking("Chevrette");
letterByLetter("Jo !");
userOptions(">");
displayChevrette();

document.getElementById(">").addEventListener("click", () => {
	dialogActualisation("Chevrette", `Il est à nous !`, ">");
});
