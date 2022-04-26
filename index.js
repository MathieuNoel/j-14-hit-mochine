// Ajouter ici le ou les require() pour importer les modules dont vous aurez besoin.
const readline = require('readline');
// Hit parade, classé du premier au dernier.
const hitParade = [
    `Jain - Come`,
    `Matt Simons - Catch & Realease`,
    `Twenty One Pilots - Stressed Out`,
    `Justin Bieber - Love Yourself`,
    `Kids United - On écrit sur les murs`,
    `Rihanna - Work`,
    `Julian Perretta - Miracle`,
    `Yall - Hundred Miles`,
    `Kendji Girac - No Me Mirès Màs`,
    `Feder - Blind (feat. Emmi)`,
];


// Votre code va ici.

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  // Je récupère la value de mon array.
const table= function(value) {
    for(value of hitParade) {
        console.log(value)
    }
}
// Je crée une fonction game() que je vais rappeler après chaque if et else if sauf celui qui rl.close(). 
const game = function() {  
  rl.question(`Que souhaitez vous ?`, (answer) => {
      // ## Bonus j'utilise un .split pour récuperer mon indice.
      let position = answer.split(" ");
        // Première question
      if(answer === `chante`) {
        console.log(`Je m'appelle Charlu, je m'appelle Lili, vous êtes chez O'clock`);
        game();
        // Deuxième question
      } else if(answer === `classement`) {          
        table();
        game(); 
        // La sortie de fonction fléchée            
      } else if(answer === `quitter`) {
        rl.close();
        // ## Bonus pour extraire l'indice demandé du array.
      } else if(answer === "position " + position[1]) {       
        console.log(hitParade[position[1]-1]);        
        game();
        // On repose la question si les réponces sont differantes
      } else {
        game();
      }      
    }
    )
}
// J'execute une fois la fonction pour lancer la machine.
game()