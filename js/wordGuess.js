let words = ["apple", "banana", "cheese", "chess", "react", "crate"];
let playerGuess = "";

let chosenWord = "";

function pickRandomWord() {
  let randomNumber = Math.floor(Math.random() * words.length);
  return words[randomNumber];
}

function checkLetter(letter) {
  let letterToCheck = letter.toLowerCase();
  if (chosenWord.includes(letterToCheck)) {
    console.log(`${letterToCheck} found in word`);
  }
}
