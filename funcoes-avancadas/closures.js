function retornaFuncao() {

    const nome = "John";
    return function() {

        return nome;
    }
}

const funcao = retornaFuncao('Hugo');
const funcao2 = retornaFuncao('Jorge');
console.dir(funcao);
console.dir(funcao2);

console.log(funcao(), funcao());
retornaFuncao();