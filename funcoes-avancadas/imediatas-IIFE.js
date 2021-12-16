//IIFE -> Immediately invoked function expression
//funções imediatas

(function(idade, peso, altura) {
    const sobrenome = "Kevin";
    function criaNome(nome) {
        return nome +  '' + sobrenome;
    }

    function falaNome() {
        console.log(criaNome('John '));
    }
    falaNome();
    console.log(idade, peso, altura);
})(30, 80, 1.80);

(function() {


})();
// A variável nome não é acessível fora do escopo da expressão 
//nome  gerará o erro "Uncaught ReferenceError: nome is not defined"
