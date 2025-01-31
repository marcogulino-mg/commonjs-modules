//Creazione della funzione
function nominative(name, lastnm) {
  newNominative = {
    firstName: name,
    lastName: lastnm,
  };

  return newNominative;
}

//Esporto la funzionalità
module.exports = nominative;