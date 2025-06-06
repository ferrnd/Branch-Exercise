function maiorNumero(a, b, c) {
let valores = [a, b, c];
let i = 0;
let maior = valores[0];

while(i < valores.length) {
    if(valores[i] > maior){
        maior = valores[i];
    }
    i++
}console.log(maior)
}


maiorNumero(5443, 912, 1, 2616281721);
