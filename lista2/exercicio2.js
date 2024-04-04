// 2. Implemente um programa que declara um vetor de números reais com capacidade para 10
// elementos. Em seguida o programa deve receber um número real R, tal que -7 <= R <= 7, e
// armazenar em cada posição do vetor o valor iR
// , em que i é o índice da posição do vetor e R é
// o número dado pelo usuário. Ao final, o programa deve escrever o vetor.

var arr = new Array (10)
let n = parseFloat(prompt("Insira um número: "))
if(n <= -7 || n >= 7 || isNaN(n)) {
    console.log("Número fora do intervalo permitido")
} 
else {
    for (let i = 0; i < 10; i++){
        vetor[i] = i * n;
    }
}

console.log(vetor)