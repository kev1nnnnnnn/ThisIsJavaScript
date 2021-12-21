//O método map() invoca a função callback passada por argumento para cada elemento do Array e devolve um novo Array como resultado.
const numeros = [1,2,3, 20, 30, 4, 5, 80, 90];

const dobro = numeros.map(valor => valor * 2);
    //return `John -> ${valor}`
//console.log(dobro);

const pessoas = [
    {nome: 'John', idade: 25},
    {nome: 'Hugo', idade: 30},
    {nome: 'Viviane', idade: 40},
    {nome: 'Jorge', idade: 50},
]

const nomes = pessoas.map(obj => obj.nome);

/*const idade = pessoas.map(function(obj) {
    delete obj.nome;
    return {idade: obj.idade};
});*/

const idade = pessoas.map(obj => ({idade: obj.idade}));

const comIds = pessoas.map(function(obj, indice) {
    //obj.id = indice;
    const newObj = {...obj};
    newObj.id = indice;
    return newObj;
});

//console.log(nomes);
//console.log(idade);
//console.log(pessoas);
console.log(comIds);


