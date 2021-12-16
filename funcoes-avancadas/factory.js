//Funções que retornam objeto
//Funções que fabricam objeto

function criaPessoa(nome, sobrenome, a, p) {
    return {
        nome,
        sobrenome,
        //Getter
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        },
        //Setter
        set nomeCompleto(valor) {
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
            console.log(valor);
        },

        fala: function(assunto) {
            return `${this.nome} está ${assunto}.`;
        },
       altura: a,
       peso: p,
       get imc() {
           const indice = this.peso / (this.altura ** 2);
           return indice.toFixed(2);
       }
    };
}


const p1 = criaPessoa('John', 'Kevin', 1.8, 85);
const p2 = criaPessoa('Leticia', 'Kevin', 1.4, 50);
const p3 = criaPessoa('Viviane', 'Kevin', 1.3, 70);
console.log(p1.nome);
console.log(p1.sobrenome);
console.log(p1.imc);
console.log(p1.nomeCompleto);
p1.nomeCompleto = 'Hugo Jorge Costa'; 
console.log(p1.nome + ' ' + p1.sobrenome);
console.log(p1.fala("de boas"));

console.log(p1.imc);
console.log(p2.imc);
console.log(p3.imc);
/*console.log(p1.imc());
const p2 = criaPessoa('Hugo', 'Jorge', 1.0, 90);
console.log(p2.imc());
console.log(p2.fala("Falando sobre JS"));*/