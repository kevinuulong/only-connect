const puzzle = ['ANIMALS', 'TREES', 'LAWN MOWER', 'SEMI TRUCK', 'GUARD RAIL', 'PLYMOUTH ROCK', 'BARBARIANS', 'GREAT BARRIER REEF']
var puzzleIndex = 0;


export function loadVowels() {
    document.body.innerHTML += `<div id="vowels-game-area"><p id="clue"></p><div id="input-panel"><input id="guess" type="text"/><div id="vowel-submit">Guess</div></div></div>`;
    getClue();
}

export function loadVowelListeners() {
    document.getElementById('vowel-submit').addEventListener('click', guess)
    document.getElementById('guess').addEventListener('keydown', e => {
        if (e.keyCode == 13) guess();
    })
}

function guess() {
    var guess = document.getElementById("guess").value;
    if (validate(guess)) {
        nextClue();
    }
    document.getElementById("guess").value = '';
}

function validate(guess) {
    return guess.toUpperCase() == puzzle[puzzleIndex];
}

function getClue() {
    var clue = removeVowels(puzzle[puzzleIndex]);
    document.getElementById("clue").innerHTML = clue;
}

function nextClue() {
    puzzleIndex++;
    puzzleIndex == puzzle.length ? console.log("End of puzzle") : getClue();
}

function removeVowels(word) {
    return word.replace(/[aeiou]/gi, '');
}
