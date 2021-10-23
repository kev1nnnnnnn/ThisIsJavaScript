


function calcularMedia() {

    var total = 0;
    var qtd =  arguments.length; // lenght rretorna o número de elementos.
    var x = 0;

    while(typeof arguments[x] === 'number' ) {
        total += arguments[x];
        x++
    }

    return total / qtd.toFixed(2);
}

function sortear(n){
    var _n = n || 1;
    var nSorteado = Math.random();
    nSorteado = nSorteado * _n;
    nSorteado = Math.floor(nSorteado);
    return nSorteado;
}