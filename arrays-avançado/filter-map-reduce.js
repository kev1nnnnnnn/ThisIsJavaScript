//retorne a soma do dobro de todos os pares
// -> Filtrar pares
// -> Dobrar os valores
// -> Reduzir(somar tudo)
const numeros = [1,2,3, 20, 30, 4, 5, 80, 90];
const numerosPares = numeros.filter(function(valor) {

    return valor % 2 === 0;

}).map(function(valor) {
    
    return valor * 2;

}).reduce(function(ac, valor) {
    return ac + valor;
});

//pares
console.log(numerosPares);
//************************************** */
const numeros = [1,2,3, 20, 30, 4, 5, 80, 90];
const numerosPares = numeros.filter(valor => valor % 2 === 0) 
    .map(valor => valor * 2) 
    .reduce((ac, valor) => ac + valor);

//pares
console.log(numerosPares);