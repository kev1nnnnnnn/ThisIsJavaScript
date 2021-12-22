//defineProperty - defineProperties

function Produto(nome, preco, estoque) {

    Object.defineProperty(this,'estoque', {
        enumerable:true,    //mostr a chave
        value:estoque,      //valor
        writable: false,    //valor nao pode ser alterado
        configurable: true  //configuravel
    });

    Object.defineProperties(this, {
        nome: {
            enumerable:true,    //mostr a chave
            value:nome,      //valor
            writable: true,    //valor nao pode ser alterado
            configurable: true  //configuravel
        },
        preco: {
            enumerable:true,    //mostr a chave
            value:preco,      //valor
            writable: true,    //valor nao pode ser alterado
            configurable: true  //configuravel
        }
    });

}

const p1 = new Produto('Camiseta', 20, 3);
console.log(p1);

for(let chave in p1) {
    console.log(chave);
}

