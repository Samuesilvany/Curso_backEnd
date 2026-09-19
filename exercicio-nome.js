const prompt = require ('prompt-sync')();

let nome = prompt("Digite seu nome completo: ");


let nomeFormatado = nome.trim().toUpperCase();

console.log("\n" + nomeFormatado)