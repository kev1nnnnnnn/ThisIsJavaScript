//Filter -> sempre retornar um array, com a mesma quantidade de elementos ou menos.

const numeros = [5, 50, 80, 1,2,3,5,8,7,11,15,22,27];
const numeros2 = [5, 50, 80, 1,2,3,5,8,7,11,15,22,27];
const numeros3 = [5, 50, 80, 1,2,3,5,8,7,11,15,22,27];

function callbackFilter(valor) {

    if(valor >=10) {

        return true;
    } else {
        return false;
    }

}
const numerosFiltrados = numeros.filter(callbackFilter);
console.log(numerosFiltrados); //end

//REDUZIDOS ******************************
const numerosFiltradosReduzidos = numeros2.filter ((valor, indice, array) => {
    return valor > 10;
});

console.log(numerosFiltradosReduzidos); //end

//REDUZIDO MAIS AINDA, OMG

const numerosFiltradosReduzidos2 = numeros2.filter(valor => valor < 10) ;

console.log(numerosFiltradosReduzidos2); //end






const pessoas = [
    {nome: 'John', idade: 25},
    {nome: 'Maria', idade: 60},
    {nome: 'Leticia', idade: 14},
    {nome: 'Eunice', idade: 70},
    {nome: 'Vivicka', idade: 38},
    {nome: 'Hugo', idade: 7},
]
//retornar as pessoas que tem o nome com 5 letras ou mais
const pessoasNomeGrande = pessoas.filter(obj => obj.nome.length >= 6);

//retornar as pessoas com mais de 50 anos
const pessoas50anos = pessoas.filter(obj => obj.idade > 50);

//retornar as pessoas cujo o nome termina com a;
const nomeTerminaA = pessoas.filter(function (obj) {
    return obj.nome.toLowerCase().endsWith('a');
});

console.log(pessoasNomeGrande);
console.log(pessoas50anos);
console.log(nomeTerminaA);

