class Pessoa {
    constructor(nome, sobrenome) {

        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar() {
        console.log(`${this.nome} está falando`);
    }
    comer() {
        console.log(`${this.nome} está comendo`);
    }
    beber() {
        console.log(`${this.nome} está bebendo`);
    }
}

function Pessoa2(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}
Pessoa2.prototype.falar = function() {
    console.log(`${this.nome} está falando no prototype`);
}

p1 = new Pessoa("john", "kevin");
p2 = new Pessoa2("Hugo", "Jorge");
console.log(p2);
