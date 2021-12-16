document.addEventListener('click', function() {

    document.body.style.backgroundColor = '#ccc'; //adiciona uma cor de fundo

});
/************************ */ 
function criaPessoa(nome, sobrenome) {

   return {nome, sobrenome};
}

const p1 = criaPessoa('John', 'Kevin');
const p2 = {
    nome: 'Hugo',
    sobrenome: 'Jorge'
}

console.log(p1);
console.log(p2);

criaPessoa();
/************************ */ 

function falaFrase(comeco) {

    function falaResto(resto) {

        return comeco + '' + resto;
    }

    return falaResto
}
const olaMundo = falaFrase('Olá');
console.log(olaMundo(''));
/************************ */ 

function duplica(n) {

    return n * 2;
}
console.log(duplica(2));

/************************ */ 
function criaMultiplicador(mult) {

    return function(n) {
        return n * mult
    }
}
const duplica2 = criaMultiplicador(2);
console.log(duplica(2));