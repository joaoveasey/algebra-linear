function main() {
    let termos = [0, 1]; 

    for (let i = 2; i < 30; i++) {
        let proximoTermo = termos[i - 1] + termos[i - 2];
        termos.push(proximoTermo);
    }
    console.log("Os 30 primeiros termos da sequência de Fibonacci:");
    termos.forEach(termo => console.log(termo));
}
main();