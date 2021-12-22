//objeto literal ********
const pessoa1 = {
    nome: "john", sobrenome: "kevin"
}

const chave = 'nome';
console.log(pessoa1[chave]);

console.log(pessoa1["nome"]);

//*******************/
const pessoa2 = new Object();

pessoa2.nome = "Hugo";
pessoa2.sobrenome = "Jorge";

console.log(pessoa2);

//*******************/
const pessoa3 = {
    nome: 'viviane',
    sobrenome: 'menezes'
}
console.log(pessoa3);

//*******************/
pessoa4 = new Object();
pessoa4.nome = "Mateus";
pessoa4.sobrenome = "Marinho";
pessoa4.idade = 30;
pessoa4.falarNome = function() {

    return (`${this.nome} está falando!`);
};

pessoa4.getDataNascimento = function() {

    const dataAtual = new Date();

    return dataAtual.getFullYear() - this.idade;

}
console.log(pessoa4.getDataNascimento());
console.log(pessoa4.falarNome());

for (let chave in pessoa1) {
    console.log("chave: " + chave);
}
//*******Factory functions / constructor functions / classes ************/

function criaPessoa(nome, sobrenome) {

    return {
        nome,
        sobrenome,
        nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        }
    };
    
} 
const p1 = criaPessoa('John', 'Kevin');
console.log(p1.nomeCompleto());
//*******************/

function Pessoa(nome, sobrenome) {

    this.nome = nome;
    this.sobrenome = sobrenome;
}

const p2 = new Pessoa('Julian', 'Reis');
console.log(p2);

