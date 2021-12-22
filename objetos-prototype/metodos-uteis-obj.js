//Object.values
//Object.entries
//Object.assign(des, any)
//Object.getOwnPropertyDescriptor(o, 'prop')
//...(spread)

//Object.keys (retorna as chaves)
//Object.freeze (congela o objeto)
//Object.defineProperties (define varias propriedades)
//Object.defineProperty (define uma propriedade)

const produto = {nome: 'Produto', preco: 10.00, material: 'porcelana'};

for(let valor of Object.entries(produto)) {
   console.log(valor[0], valor[1]);
}

Object.defineProperty(produto, 'nome', {
    writable: false,
    configurable: false,
});

produto.nome = "outra coisa";
delete produto.nome;
console.log(produto);


//const outraCoisa = produtos;
const caneca = {nome: produto.nome, preco: produto.preco}

console.log(Object.keys(produto));
console.log(Object.freeze(produto));
console.log(Object.entries(produto));

const fruta = {nome: 'Produto', preco: 1.8}
console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));


