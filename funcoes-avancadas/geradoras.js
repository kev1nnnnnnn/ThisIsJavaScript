function* geradora1() {
    yield 'Valor 1';
    yield 'Valor 2';
    yield 'Valor 3';
}

function gerador2() {
    
    let i = 0;
    
    while(true) {
        yield i;
        i++;
    }
}

const g2 = gerador2();

console.log(g2.next().value);

