let maxScore = 1;
const inputScore = document.querySelector("#rounds");
inputScore.addEventListener('change', (e) => {
    maxScore = parseInt(e.target.value);
});

let score1 = 0;
const displayScore1 = document.querySelector("#displayScore1");
const score1Element = document.querySelector("#score1");
score1Element.addEventListener('click', () => {
    score1++;
    displayScore1.innerText = score1;
    if (score1 == maxScore) {
        displayScore1.style.color = "green";
        displayScore2.style.color = "red";
        score1Element.disabled = true;
        score2Element.disabled = true;
    }
});

let score2 = 0;
const displayScore2 = document.querySelector("#displayScore2");
const score2Element = document.querySelector("#score2");
score2Element.addEventListener('click', () => {
    score2++;
    displayScore2.innerText = score2;
    if (score2 == maxScore) {
        displayScore2.style.color = "green";
        displayScore1.style.color = "red";
        score2Element.disabled = true;
        score1Element.disabled = true;
    }
});

const resetButton = document.querySelector("#reset");
resetButton.addEventListener('click', () => {
    score1 = 0;
    score2 = 0;
    displayScore1.innerText = score1;
    displayScore2.innerText = score2;
    displayScore1.style.color = "";
    displayScore2.style.color = "";
    score1Element.disabled = false;
    score2Element.disabled = false;
});