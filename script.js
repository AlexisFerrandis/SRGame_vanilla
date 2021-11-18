// Display options and chapters container
window.onload = document.body.innerHTML +=
	`
<div id="parameterContainer">
    <div class="nes-container is-rounded is-dark">
        <h3>OPTIONS</h3>
        <div id="closeOptBtn">X</div>
        <div class="parameter-display>
            <div style="background-color:#212529; padding: 1rem 1.2rem 1rem 1rem;width:calc(100% + 8px)">
                <label for="dark_select" style="color:#fff">Volume</label>
                <div class="nes-select is-dark">
                    <select required id="dark_select">
                        <option value="" disabled selected hidden>Select...</option>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                </div>
            </div>

            <div style="background-color:#212529; padding: 1rem 1.2rem 1rem 1rem;width:calc(100% + 8px)">
                <label for="dark_select" style="color:#fff">Vitesse du texte</label>
                <div class="nes-select is-dark">
                    <select required id="dark_select">
                        <option value="" disabled selected hidden>Select...</option>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                </div>
            </div>

            <div class="checkbox-container">
                <label>
                    <input type="checkbox" class="nes-checkbox is-dark" checked />
                    <span> Mode difficile</span>
                </label>
                <label>
                    <input type="checkbox" class="nes-checkbox is-dark" checked />
                    <span> Checkbox</span>
                </label>
                <label>
                    <input type="checkbox" class="nes-checkbox is-dark" checked />
                    <span> Checkbox</span>
                </label>
            </div>
            
            <div id="userRename">
                Renommer votre personnage 
            </div>

        </div>
    </div>
</div>
` +
	// Chapter section
	`
<div id="chaptersContainer">
    <div class="nes-container is-rounded is-dark">
        <h3>Chapitres</h3>
        <div id="closeChapterBtn">X</div>
        <div class="chapitreDisplay">
            <h4>Part I</h4>
            <a href="#">1. Hey you<a></br>
            <a href="#">2. Le génie incompris<a></br>
            <a href="#">3. Appel de la nature<a></br>
            <a href="#">4. Le retour du Roi<a></br>
            <a href="#">5. Le riz est cuit<a></br>
            <a href="#">6. Divinilame<a></br>
            <a href="#">7. Noblesse authentique</br>
            <a href="#">0. Raconte moi une histoire</br>
        </div>
    </div>
</div>
`;

// Open and close options
document.getElementById("homeOptionsBtn").addEventListener("click", () => {
	document.getElementById("parameterContainer").style.display = "block";
});
document.getElementById("closeOptBtn").addEventListener("click", () => {
	document.getElementById("parameterContainer").style.display = "none";
});

/*** CHAPTERS SELECTION ***/

document.getElementById("chapterChoiceBtn").addEventListener("click", () => {
	document.getElementById("chaptersContainer").style.display = "block";
});
document.getElementById("closeChapterBtn").addEventListener("click", () => {
	document.getElementById("chaptersContainer").style.display = "none";
});
