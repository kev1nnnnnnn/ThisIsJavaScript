//funcao construtora -> objetos
function Pessoa(nome, sobrenome) {

    const ID = 123;
    
    const metodoInterno = function() {

    };

    //atributos ou metodos privados
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function() {
        console.log(this.nome + ": Gosta de morango");
    }
}

const p1 = new Pessoa('John', 'Kevin');
const p2 = new Pessoa('Hugo', 'Jorge');

console.log(p1);
console.log(p2);
p2.metodo();

//pessoa.nome = nome
