// Le juste prix

// 1 initialiser un nombre aléatoire entre 1 et 100

// 2
// Demander à l'utilisateur de saisir un nombre

// 3
// Vérifier si le nombre est le juste prix et lui afficher un message adéquat (trop petit, trop grand...)

// Bonus

// vérifier l'input de l'utilisateur

// compter le nombre d'essais

// Choisir la difficulté

// Rendu

// Envoyer le lien du repo GitHub

function guessNumber() {
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  
  const input = prompt("Saisissez un nombre entre 1 et 100");
  const myGuessNumber = randomNumber(input);

    console.log("Tu as gagné !");
  } else if { (myGuessNumber > randomNumber) 
    console.log(`${myGuessNumber}C'est plus Réessaie!`);
  } else if { (myGuessNumber < randomNumber) }
    console.log(`${myGuessNumber}C'est moins Réessaie!`);

guessNumber();

// function guessNumber() {
//   const randomNumber = Math.floor(Math.random() * 100) + 1;
//   console.log

//   let number = parseInt(prompt("Guess a number from 1 to 100: "));

//   while (number !== random) {
//     number = parseInt(prompt("C'est moins "));
//   } while {
//     number = parseInt(prompt("C'est plus"));
//   }

//   if (number == random) {
//     console.log("You guessed the correct number.");
//   }
// }

// guessNumber();
