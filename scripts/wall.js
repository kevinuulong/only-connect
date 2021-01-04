const puzzle = {
    "Types of lights": [
        "Head",
        "Tail",
        "Northern",
        "Emergency"
    ],
    "Types of soup": [
        "Alphabet",
        "Broccoli",
        "Tomato",
        "Potato"
    ],
    "Words with four vowels": [
        "Brouhaha",
        "Sausage",
        "Tangerine",
        "Numerical"
    ],
    "Synonyms for story": [
        "Retelling",
        "Tale",
        "Adventure",
        "Chronicle"
    ]
}

let root = document.documentElement;

const colors = ['lightgreen', 'lightblue', 'lightpink', 'palegoldenrod'];
var colorIndex = 0;

// load();

export function loadWall() {
    if (!document.getElementById("grid")) document.body.innerHTML += "<div id='grid'></div>"
    var grid = document.getElementById("grid");
    var arr = [];
    Object.keys(puzzle).forEach(connection => {
        puzzle[connection].forEach(answer => {
            arr.push(`<p class='grid-item' data-connection='${connection}'>${answer}</p>`);
        })
    })
    shuffle(arr);
    arr.forEach(el => {
        grid.innerHTML += el;
    })
}

export function loadWallListeners() {
    document.querySelectorAll(".grid-item").forEach(el => {
        el.addEventListener('click', () => {
            select(el);
            limit();
        });
    });
}

function shuffle(arr) {
    var currentIndex = arr.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = arr[currentIndex];
        arr[currentIndex] = arr[randomIndex];
        arr[randomIndex] = temporaryValue;
    }
    return arr;
}

function select(el) {
    if (!el.classList.contains('verified')) el.classList.toggle('selected');
};

function limit() {
    var selected = document.querySelectorAll('.selected');
    if (selected.length >= 4) {
        if (validate(selected)) {
            correct(selected);
        }
        selected.forEach(el => {
            select(el);
        })
    }
}

function correct(list) {
    list.forEach(el => {
        el.classList.toggle('verified')
        el.classList.toggle('selected');
        el.style.backgroundColor = colors[colorIndex];
        grid.appendChild(el);
    })
    nextColor();
    document.querySelectorAll('.grid-item:not(.verified)').forEach(el => {
        grid.appendChild(el);
    })
}

function nextColor() {
    if (colorIndex < colors.length) {
        colorIndex++;
        root.style.setProperty('--current-selection-color', colors[colorIndex])
    }

}

function validate(list) {
    var connection = list[0].dataset.connection;
    var correct = true;
    list.forEach(item => {
        if (connection != item.dataset.connection) correct = false;
    })
    return correct;
}
