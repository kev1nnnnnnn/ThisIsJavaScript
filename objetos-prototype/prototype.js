//A prototype propriedade JavaScript permite que você adicione novas propriedades aos construtores de objeto:

function Pessoas(nome, sobrenome, idade) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
    this.nacionalidade = "Brazil";
}

Pessoas.prototype.persons = function() {
    return this.nome + " " + this.sobrenome + " " + "=>" + this.nacionalidade;
};

const mostrar = new Pessoas('john', 'kevin');

document.getElementById("id").innerText = "Mostrar: " + mostrar.persons(); 
console.log(mostrar.persons());

