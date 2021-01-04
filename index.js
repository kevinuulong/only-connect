import { loadWall, loadWallListeners } from "/scripts/wall.js";
import { loadVowels, loadVowelListeners } from "/scripts/vowels.js";

// loadGame("vowels"); 

document.querySelectorAll('.game-btn').forEach(el => {
    var id = el.id;
    el.addEventListener('click', () => {
        loadGame(id);
    })
})

function changeHeading(heading) {
    document.getElementById("heading").innerHTML = heading;
}

function wall() {
    changeHeading("Wall");
    loadWall();
    loadWallListeners();
}

function vowels() {
    changeHeading("Vowels");
    loadVowels();
    loadVowelListeners();
}

function loadGame(gameName) {
    document.getElementById("game-btns").style.display = 'none';
    switch (gameName) {
        case "wall":
            wall();
            break;
        case "connections":
            connections();
            break;
        case "vowels":
            vowels();
            break;

        default:
            break;
    }
}