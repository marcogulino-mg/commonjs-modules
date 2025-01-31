//Creazione della funzione
function createPerson(name, lastnm) {
  newPerson = {
    firstName: name,
    lastName: lastnm,
  };

  return newPerson;
}

// const person = createPerson("Marco", "Gulino");
// console.log(person);

//Esporto la funzionalità
module.exports = createPerson;