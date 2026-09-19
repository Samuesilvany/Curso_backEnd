const prompt = require ('prompt-sync') ();

console.log("==== GERADOR DE MENSAGEM ===");


let usuario = prompt ("Digite seu nome: ");

let curso = prompt ("Digite o nome do seu curso: ");



let boasVindas = 'Olá, ${usuario} ! Seja bem-vindo (a) ao curso de $ {curso}.';

console.log ("\n" + boasVindas)