let randomnum = parseInt(Math.random() * 100 + 1); // Store the random number

const submit = document.querySelector('#smbt');
const userInput = document.querySelector('#Guessfield');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastresult');
const lowORhi = document.querySelector('.lowORhi');
const startover = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevguess = [];
let numGuess = 1;

let playgame = true;

if (playgame) {
    submit.addEventListener('click', function(e) {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess);
    });
}

function validateGuess(guess) {
    guess = parseInt(Number(guess)); // Ensure the guess is a number

    if (isNaN(guess)) {
        alert('Enter a valid number');
    } else if (guess < 1) {
        alert('Enter a number greater than 1');
    } else if (guess > 100) {
        alert('Enter a number less than 100');
    } else {
        prevguess.push(guess);

        if (numGuess === 11) {
            displayguess(guess);
            displayMessage(`Game Over! The Random Number was ${randomnum}`);
            endGame();
        } else {
            displayguess(guess);
            checkGuess(guess);
        }
        numGuess++;
    }
    
}

function displayguess(guess) {
    userInput.value = '';
    guessSlot.innerHTML += `${guess}, `;
    remaining.innerHTML = `${11 - numGuess} `;
}

function checkGuess(guess) {
    if (guess === randomnum) {
        displayMessage('You guessed right!');
        endGame();
    } else if (guess < randomnum) {
        displayMessage('Number is too low');
    } else if (guess > randomnum) {
        displayMessage('Number is too high');
    }
}

function displayMessage(message) {
    lowORhi.innerHTML = `<h2>${message}</h2>`;
}

function newGame() {
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<button style="
    background-color: #4B5320; /* Dark olive green */
    color: #FFD700; /* Gold */
    border: 2px solid #8B4513; /* Saddle brown */
    border-radius: 5px;
    padding: 10px 20px;
    font-family: 'Times New Roman', Times, serif;
    font-size: 30px;
    cursor: pointer;
  ">
    Start New Game
  </button>`;

    startover.appendChild(p);
    playgame = false;

    const newgame = document.querySelector('#newGame');
    newgame.addEventListener('click', function(e) {
        randomnum = parseInt(Math.random() * 100 + 1);
        prevguess = [];
        numGuess = 1;
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${11 - numGuess} `;
        userInput.removeAttribute('disabled');
        startover.removeChild(p);

        playgame = true;
    });
}

function endGame() {
    userInput.setAttribute('disabled', '');
    newGame();
}
