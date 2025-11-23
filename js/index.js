// Задание 1
let objects = [
  { name: "Василий", surname: "Васильев" },
  { name: "Иван", surname: "Иванов" },
  { name: "Пётр", surname: "Петров" },
];

let values = Object.values(objects);
let keys = Object.keys(objects);

function searchName(objects, name) {
  for (let i = 0; i < keys.length; i++) {
    if (name === values[i].name) {
      console.log(values[i]);
      break;
    }
  }
}

let result = searchName(objects, "Иван");

// Задание 2
let myArray = [
  { label: "Костян" },
  { label: "Дёмкин" },
  { label: "КРУТ?" },
  { label: "ИЛИ ЛАШПЕД?" },
  { label: "пока не знаю..." },
  { label: "НАДЕЮСЬ КРУТ!!!" },
  { label: 1 },
];
myArray.forEach((array, index) => {
  array.value = index;
});

function createSelect(myArray, value) {
  let select = document.createElement("select");
  let optionArray = [];
  document.body.append(select);
  for (let i = 0; i < myArray.length; i++) {
    const optionCreate = document.createElement("option");
    optionArray.push(optionCreate);
  }
  select.append(...optionArray);
  for (i = 0; i < myArray.length; i++) {
    optionArray[i].textContent = myArray[i].label;
    optionArray[i].value = myArray[i].value;
    if (myArray[i].value === value) {
      optionArray[i].selected = true;
    }
  }
  return select;
}
createSelect(myArray, 6);
