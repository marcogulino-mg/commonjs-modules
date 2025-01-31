//Importo i moduli
const nominative = require("./names");
const hobbiesList = require("./hobbies");

function createPerson() {
  const newPerson = {
    fullName: nominative("Marco", "Gulino"),
    hobbies: hobbiesList("pescare", "cucinare", "disegnare"),
  };

  return newPerson;
}

const person = createPerson();
console.log(person);