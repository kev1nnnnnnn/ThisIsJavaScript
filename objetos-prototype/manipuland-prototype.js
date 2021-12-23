//função construtora
function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function(percentual) {
    this.preco = this.preco - (this.preco*(percentual / 100));
};

Produto.prototype.aumento = function(percentual) {
    this.preco = this.preco - (this.preco*(percentual / 100));
};

const p1 = new Produto('Nirvana', 50);

//literal
const p2 = {
    nome: 'megadeth',
    preco: 15
}

Object.setPrototypeOf(p2, Produto.prototype);

p2.aumento(10);
console.log(p2);

console.log(p1);

//cria o objeto e seta o prototype
const p3 = Object.create(Produto.prototype, {
    tamanho: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: true
    },
    tamanho: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: true,
    },
});
p3.preco = 113;
p3.aumento(10);
console.log(p3);



