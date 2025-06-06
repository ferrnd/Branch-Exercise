function verificarParOuImpar(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            console.log("O numero " + array[i] + " é par.");
        } else {
            console.log("O numero " + array[i] + " é impar.");
        } }
    }
 
array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
verificarParOuImpar(array);