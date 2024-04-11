function main() {
    let quantidadeBois = parseInt(prompt("Digite o número de bois (N):"));
    let numerosBois = [];
    let pesosBois = [];
    for (let i = 0; i < quantidadeBois; i++) {
        let numero = i + 1;
        let numeroBoi = parseInt(prompt('Digite o número do ${numero}º boi:'));
        let pesoBoi = parseFloat(prompt('Digite o peso do ${numero}º boi:'));
        numerosBois.push(numeroBoi);
        pesosBois.push(pesoBoi);
    }
    let somaPesos = pesosBois.reduce((total, peso) => total + peso, 0);
    let mediaPeso = somaPesos / quantidadeBois;

    let indiceBoiMaisPesado = pesosBois.indexOf(Math.max(...pesosBois));
    let boiMaisPesado = numerosBois[indiceBoiMaisPesado];

    let indiceBoiMaisLeve = pesosBois.indexOf(Math.min(...pesosBois));
    let boiMaisLeve = numerosBois[indiceBoiMaisLeve];

    console.log('Média de peso dos bois: ${mediaPeso.toFixed(2)}');
    console.log('Número do boi mais pesado: ${boiMaisPesado}');
    console.log('Número do boi mais leve: ${boiMaisLeve}');
}
main();