function Soma(numero1,numero2,numero3,numero4,numero5){
    const opcoes =[numero1,numero2,numero3,numero4,numero5];
    soma = 0
    for(let i = 0;i<opcoes.length;i++){
        soma+= opcoes[i]
    }
    return soma
}
console.log(Soma(20,1,3,4,5))