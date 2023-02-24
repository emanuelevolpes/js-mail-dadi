'use strict';

let randNumPlayer = Math.floor(Math.random() * 6) + 1;
let Player = randNumPlayer;

let randNumMachine = Math.floor(Math.random() * 6) + 1;
let Machine = randNumMachine;

console.log('Il giocatore ha lanciato il dado, il numero uscito è:', Player);
console.log('Il computer ha lanciato il dado, il numero uscito è:', Machine);


if (Player > Machine) {
    console.log('Il giocatore vince!');
} else if (Machine > Player) {
    console.log('Il computer vince!')
} else if (Player === Machine) {
    console.log('Pareggio!')
}
