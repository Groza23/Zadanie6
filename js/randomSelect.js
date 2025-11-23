function generateRandomWord(length) {
  const letters = "abcdefghijklmnopqrstuvwxyz";
  let word = "";
  for (let i = 0; i < length; i++) {
    word += letters[Math.floor(Math.random() * letters.length)];
  }
  return word;
}
let arrayWord = [];
for (let i = 0; i < 5; i++) {
  word = generateRandomWord(5);
  arrayWord.push(word);
}

let select = document.createElement("select");
let optionArray = [];
document.body.append(select);
for (let i = 0; i < arrayWord.length; i++) {
  const optionCreate = document.createElement("option");
  optionArray.push(optionCreate);
}
select.append(...optionArray);
for (i = 0; i < arrayWord.length; i++) {
  optionArray[i].textContent = arrayWord[i];
}
