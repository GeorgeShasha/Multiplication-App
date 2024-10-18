const firstDigit = Math.ceil(Math.random() * 10);
const secondDigit = Math.ceil(Math.random() * 10);

const questionEl = document.getElementById("question");
const inputField = document.getElementById("input");
const formEl = document.getElementById("form");
const scoreEl = document.getElementById("score");



let score = JSON.parse(localStorage.getItem("score"));

if(!score){
    score = 0;
}

scoreEl.innerText = `Score: ${score}`

questionEl.innerText = `What is ${firstDigit} multiply by ${secondDigit}?`;

const correctAnswer = firstDigit * secondDigit;

formEl.addEventListener("submit", () => {
    const userAnswer = +inputField.value;
    
    if (userAnswer === correctAnswer) {
        score++;
        updateLocalStorage();
    } else {
        score--;
        updateLocalStorage();
    }
    
});

const updateLocalStorage = () => {
    localStorage.setItem("score", JSON.stringify(score));
}