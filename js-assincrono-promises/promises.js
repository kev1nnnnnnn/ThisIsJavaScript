function random(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {

    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') reject(new Error('ERROR'));
        setTimeout(() => {
            resolve(msg);
        }, tempo);
    });
}
esperaAi('Conexão com a base de dados', random(1, 3))
.then( resposta => {
    console.log(resposta);
    return esperaAi('Buscando dados da base', 1, 3)
})
.then(resposta => {
    console.log(resposta);
    return esperaAi(22222, random(1, 3));
}).then(resposta => {
    console.log(resposta);
}).then(() => {
    console.log("Exibi os dados na tela");
})
.catch(e => {
    console.log('ERROR:', e);
});

console.log("Isso aqui sera exibido antes de qualquer promise");