document.addEventListener("DOMContentLoaded", function() {
let buttons = document.getElementsByTagName("button");

for (button of buttons) {
button.addEventListener("click", function() {
    if(this.getAttribute("data-type") === "submit" ) {
        alert("You've clicked submit!");
    } else {
        let.gameType = this.getAttribute("data-type");
        alert(`You clicked ${gameType}`);
    }
})
}
})


function runGame() {

}

function checkAnswer() {

}

function calculateCorectAnswer() {

}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayAdditionQuestion() {

}

function displaySubtractQuestion() {

}

function displayMultiplyQuestion() {

}