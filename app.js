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
