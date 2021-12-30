function random(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}
  // Criamos uma nova promise: prometemos a contagem dessa promise (após aguardar 3s)
function praticando(msg, tempo) {
    // a função resolve() é chamada com a capacidade para resolver ou
    // rejeitar a promise
    return new Promise((resolve, reject) => {
        
        
        setTimeout(() => {     
            if(typeof msg !== 'string') {
               
                reject("Caiu no erro de string");
                return; 
                
            } 
            resolve(msg.toUpperCase() + ' - Passei na promise')
            return;
        
        }, tempo);
    });
}

/*const promises = [
    praticando('promise 1', random(1, 5)),
    praticando('promise 2', random(1, 5)),
    praticando('promise 3', random(1, 5)),
    praticando(1000, random(1,5)),
    
];
//definimos o que fazer quando a promise for realizada
Promise.race(promises)
.then(function(valor) {
    console.log(valor);
})
.catch(function(error) {
    console.log(error);
})*/

function baixaPagina() {
    const emCache = false;

    if(emCache) {
        return Promise.resolve('Página em cache');
    } else {
        return praticando('Baixei a pagina', 3000);
    }
}

baixaPagina()
.then(dadosPagina => {
    console.log(dadosPagina);
})
.catch(e => console.log('ERRO:', e));