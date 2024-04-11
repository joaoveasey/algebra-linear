function receberValores() {
    let v1 = [];
    let v2 = [];
    console.log("Digite os valores para o vetor v1:");
    for (let i = 0; i < 4; i++) {
        let valor = parseFloat(prompt('Digite o {i+1}º valor para v1:'));
        v1.push(valor);
    }
    console.log("\nDigite os valores para o vetor v2:");
    for (let i = 0; i < 4; i++) {
        let valor = parseFloat(prompt('Digite o ${i+1}º valor para v2:'));
        v2.push(valor);
    }

    return { v1, v2 };
}
function calcularSoma(v1, v2) {
    let v3 = [];
    for (let i = 0; i < 4; i++) {
        v3.push(v1[i] + v2[i]);
    }
    return v3;
}
function escreverVetor(v3) {
    console.log("\nVetor v3 (soma dos elementos correspondentes de v1 e v2):");
    console.log(v3);
}
function main() {
    let { v1, v2 } = receberValores();
    let v3 = calcularSoma(v1, v2);
    escreverVetor(v3);
}
main();
