const readline = require("readline-sync");

console.log("Bem vindo ao Banco Hsbc, as notas disponiveis sao: 20, 50, 100.");

let valor = readline.question("Quanto gostaria de sacar ?");

let resto = valor % 20;

if (resto === 0) {
    let notas20 = valor / 20;
    console.log(`Notas de 20: ${notas20} `);
} else
    console.log("O valor inserido e invalido, por favor, insira numeros multiplos de 20.");