class DispositoEletronico {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }

    ligar() {
        if(this.ligado) {
            console.log(this.nome + "aparelho ligado");
            return;
        }

        this.ligado = true;
    };
    desligar() {
        if(!this.ligado) {
            console.log(this.nome + 'aparelho desligado');
        }

        this.ligado = false;
    };
}

//new class
class Smartphone extends DispositoEletronico {
    constructor(nome, cor, modelo) {
        super(nome); // chama o parametro da classe Pai
        this.cor = cor;
        this.modelo = modelo;
    }
}

class Tablet extends DispositoEletronico {
    constructor(nome, tamanho) {
        super(nome);
        this.tamanho = tamanho;
    }
    ligar() {
        console.log("Voce alterou o metodo ligar");
    }
}

const s1 = new Smartphone('iphone', 'amarelo', 'modelo');
console.log(s1);
console.log(' ');

const tablet = new Tablet('samsung', true);
tablet.ligar();