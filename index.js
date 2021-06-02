// API location constants
const FETCH_URL = `https://age-of-empires-2-api.herokuapp.com/api/v1/`;

/* 

// Base Requirements

As a user, I should be able to [select a civilization]

As a user, I should be able to do [select a small number of units]

As a user, I should be able to do [select a number of structures]

As a user, I should be able to do [select technologies]

As a user, I should be able to do [view the selections together]


*/

// Event Listeners
function selectCivz() {
  let selected = document.querySelector("#selected");
  let p = document.createElement("p");
  p.innerText = this.innerText;
  selected.append(p);
}

// Other Functions
function addCivToChoices(item, wrapper) {
  let p = document.createElement("p");
  let button = document.createElement("button");
  p.innerText = item.name;
  button.addEventListener("click", selectCivz);
  button.append(p);
  wrapper.append(button);
}

// Rendering Functions

function renderCivz(data) {
  console.log(data.civilizations);
  let arr = data.civilizations;
  let wrapper = document.querySelector(".wrapper");
  arr.forEach((item) => addCivToChoices(item, wrapper));
}

function getCivilizations() {
  fetch(`${FETCH_URL}civilizations`)
    .then((res) => res.json())
    .then((data) => renderCivz(data))
    .catch((err) => console.log(err));
}

getCivilizations();
