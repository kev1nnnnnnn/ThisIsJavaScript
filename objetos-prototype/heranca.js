//Produto -> aumento, desconto
//camiseta => cor, caneca => material

function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
};

Produto.prototype.aumento = function(quantia) {
    this.preco += quantia;
};

Produto.prototype.desconto = function(quantia) {
    this.preco -+ quantia;
};

//O método call() invoca uma função com um dado valor this  e argumentos passados individualmente.
function Camiseta(nome, preco, cor, tamanho) {
    Produto.call(this, nome, preco);
    this.cor = cor;
    this.tamanho = tamanho
};

function Caneca(nome, preco, material, estoque) {
    Produto.call(this, nome, preco);
    this.material = material;
    
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: false,
        get: function() {
            return estoque;
        },
        set: function(valor) {
            if(typeof valor !== 'number') return;
            estoque = valor
        }
    })
};
//CANECA
Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;
Caneca.prototype.aumento = function(percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100));
}
//CAMISETA
Camiseta.prototype =  Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;
Camiseta.prototype.aumento = function(percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100));
};


const produto = new Produto('Gen', 111);
const camiseta = new Camiseta('regata', 7.5, 'Preta', 'G');
const caneca = new Caneca('batman', 20, 'plástico', 10);

caneca.aumento(30);
camiseta.aumento(30);
console.log(caneca);
console.log(caneca.estoque);

console.log(camiseta);
console.log(produto);