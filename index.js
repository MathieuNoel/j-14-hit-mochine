// Ajouter ici le ou les require() pour importer les modules dont vous aurez besoin.
const readline = require('readline');
// Hit parade, classé du premier au dernier.
const hitParade = [
    `Jain - Come`,
    `Matt Simons - Catch & Realease`,
    `Twety One Pilots - Stressed Out`,
    `Justin Bieber - Love Yourself`,
    `Kids United - On écrit sur les murs`,
    `Rihanna - Work`,
    `Julian Perretta - Miracle`,
    `Yall - Hundred Miles`,
    `Kendji Girac - No Me Mirès Màs`,
    `Feder - Blind (feat. Emmi)`,
];


// Votre code va ici

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
const table= function(value) {
    for(value of hitParade) {
        console.log(value)
    }
}
const game = function() {
  rl.question(`Que souhaitez vous ?`, (answer) => {
      if(answer === `chante`) {
          console.log(`Je m'appelle Charlu, je m'appelle Lili, vous êtes chez O'clock`);
          game()
      } else if(answer === `classement`) {          
          table();
          game()             
      } else if(answer === `quitter`) {
        rl.close();
      } else {
        game()
      }      
    })
}
game()