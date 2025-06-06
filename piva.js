function Soma(array){
    soma = 0
    for(let i = 0;i<array.length;i++){
        soma+= array[i]
    }
    return soma
}
console.log(Soma([20,1,3,4,5]))