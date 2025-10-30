let words = ["apple", "banana", "cheese", "chess", "react", "crate"];
let playerGuess = "";
let displayWordArray = [];
let chosenWord = "";
let wordArray = [];

document.addEventListener("keydown", handleKeyDown);

document.addEventListener("DOMContentLoaded", function () {
  startGame();
});

function pickRandomWord() {
  let randomNumber = Math.floor(Math.random() * words.length);
  return words[randomNumber];
}

function wordToArray(word, arrayToChange) {
  if (word.length > 0) {
    for (i = 0; i < word.length; i++) {
      arrayToChange.push(word.substring(i, i + 1));
    }
    console.log(arrayToChange);
  }
}

function DisplayWordToScreen() {
  let wordGuessingId = document.getElementById("guessingWord");
  wordGuessingId.innerHTML = displayWordArray.join(" ");
}

function checkLetter(letter) {
  let letterToCheck = letter.toLowerCase();
  if (wordArray.includes(letterToCheck)) {
    replaceLetterInDisplay(letterToCheck, wordArray.indexOf(letterToCheck));

    console.log(displayWordArray);
  }
}

function replaceLetterInDisplay(letter, i) {
  if (i < 0 || i >= displayWordArray.length) {
    return displayWordArray;
  }

  const newWordArray = wordArray.map((character) => {
    if (character === letter) {
      let indexOfLetter = wordArray.indexOf(letter);
      wordArray[indexOfLetter] = "_";
      displayWordArray[indexOfLetter] = letter;
      return "_";
    } else {
      return character;
    }
  });
  console.log("wordArray: " + wordArray);
  DisplayWordToScreen();
}

function handleKeyDown(event) {
  checkLetter(event.key.toLowerCase());
}

function startGame() {
  chosenWord = pickRandomWord();
  wordToArray(chosenWord, wordArray);

  let wordLength = chosenWord.length;
  let newWord = "";
  for (i = wordLength; i >= 0; i--) {
    newWord = chosenWord.replaceAll(/[a-z]/g, "_");
  }

  wordToArray(newWord, displayWordArray);
  DisplayWordToScreen();
}
