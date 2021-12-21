//O método reduce() executa uma função reducer (fornecida por você) para cada elemento do array, resultando num único valor de retorno.

const pessoas = [
    {nome: 'John', idade: 25},
    {nome: 'Hugo', idade: 7},
    {nome: 'Viviane', idade: 40},
    {nome: 'Jorge', idade: 50},
]

const maisVelha = pessoas.reduce(function(acumulador, valor) {

    if(acumulador.idade > valor.idade) return acumulador;

    return valor;

});

console.log(maisVelha);