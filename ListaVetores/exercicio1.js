// 1. Implemente um programa que:
// a) Declare um vetor de inteiros com 12 posições.
// b) A primeira, terceira e décima posições do vetor devem receber o valor 108.
// c) A segunda posição deve receber o valor da primeira posição menos 8. E a quarta posição
// deve receber o valor da terceira posição mais 6.
// d) A posições de índice par a partir da quinta posição devem receber, na ordem: 11, 32, 33 e 87.
// e) A posição 5 deve guardar 5 mais 3 vezes o valor da sétima posição. A posição 7 deve
// guardar este valor mais 10.
// f) O valor 72 deve ser inserido na posição dada pelo valor da quinta posição.
// g) A posição 4 recebe o valor da oitava posição.
// h) Troque os valores da sexta e décima primeira posições.
// i) Troque os valores das posições 0 e 8.
// j) Escreva todas as posições do vetor de trás para frente usando o casting para caractere e
// observe o resultado. 

var arr = new Array(12)
arr[0] = 108
arr[2] = 108
arr[9] = 108
arr[1] = arr[0] - 8
arr[3] = arr[2] + 6
const vetor = [11,32,33,87]
for(let i = 0; i < vetor.length; i++){
    arr[4 + 2 * i] = vetor[i];
}
arr[5] = 5 + 3 * arr[6]
arr[7] = arr[5] +10
arr[arr[4]] = 72
arr[4] = arr[7]
arr.splice(5,0,arr[10]) && arr.splice(10+1,1,arr[5])
arr.splice(0,0,arr[8]) && arr.splice(8+1,1,arr[0+1])
for (let j = 0; j < arr.length; j++) {
    const trazfrente = (arr.length-1-j)
    const castingString = String(trazfrente)
    console.log(castingString)
}