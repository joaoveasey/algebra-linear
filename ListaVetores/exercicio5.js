function inicializarVetorMatricula(matricula) {
    let vetor = [];
    let matriculaStr = matricula.toString();
    for (let i = 0; i < matriculaStr.length; i++) {
        vetor.push(parseInt(matriculaStr[i]));
    }
    return vetor;
}
function encontrarPosicoesDoNumero(vetor, N) {
    let posicoes = [];
    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] === N) {
            posicoes.push(i);
        }
    }
    return posicoes;
}
function main() {
    let matricula = 1234567;
    let vetorMatricula = inicializarVetorMatricula(matricula);
    let N = parseInt(prompt("Digite um número natural N entre 0 e 9:"));
    if (N >= 0 && N <= 9) {
        let posicoes = encontrarPosicoesDoNumero(vetorMatricula, N);
        if (posicoes.length > 0) {
            console.log('O número ${N} ocorre nas posições: ${posicoes.join(', ')}');
        } else {
            console.log('O número ${N} não ocorre em nenhuma posição do vetor.');
        }
    } else {
        console.log("O número digitado está fora do intervalo especificado.");
    }
}
main();