'use strict';

const email = ['pippo@email.com', 'gino@email.com', 'guido@email.com', 'gigi@email.com', 'franco@email.com'];

const userMail = prompt('Inserisci la tua Email');
let inList = false;

for (let i = 0; i < email.length; i++) {
    if (email[i] === userMail) {
        inList = true;
    };
};

if (inList === true) {
    console.log('sei in lista');
} else {
    console.log('non sei in lista');
};