// Implemente um programa que recebe N números reais não-negativos e calcula a raiz
// quadrada de cada um deles. Organize o seu programa em entrada, processamento e saída.

let quantidadeNumeros = parseInt(prompt("Digite a quantidade de números:"));
    let numeros = [];
    for (let i = 0; i < quantidadeNumeros; i++) {
        let numero = parseFloat(prompt(`Digite o número ${i + 1}:`));
        if (numero < 0 || isNaN(numero)) {
            console.log(`O número ${numero} não é não-negativo.`);
            return;
        }
        numeros.push(numero)
    }