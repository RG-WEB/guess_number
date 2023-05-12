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
  const LifeMAX = 6;
  let lifePoint = LifeMAX;

  while (lifePoint > 0) {
    const input = prompt("Saisissez un nombre entre 1 et 100");

    myGuessNumber = Number(input);

    if (myGuessNumber < randomNumber) {
      console.log(`${input} : C'est plus`);
      lifePoint--;
    } else if (myGuessNumber > randomNumber) {
      console.log(`${input} : C'est moins`);
      lifePoint--;
    } else {
      console.log("Félicitations, vous avez trouvé !");
      return;
    }

    if (lifePoint > 0) {
      console.log(
        `Essai${lifePoint > 1 ? "s" : ""} restant${
          lifePoint > 1 ? "s" : ""
        } : ${lifePoint}`
      );
    }
  }

  console.log(`Perdu :( Le résultat était : ${randomNumber}`);
}

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
