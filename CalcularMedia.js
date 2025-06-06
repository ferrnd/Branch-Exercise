function mediaArray (array)   {
    soma = 0
    for(let i = 0;i<array.length;i++){
        soma+= array[i]
    }
    return soma /3
}

console.log ( mediaArray ([8, 9, 10]))