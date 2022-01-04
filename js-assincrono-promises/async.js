function random(min=1, max=20) {
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

async function executa() {

    try {
        const fase1 = await praticando('fase 1', random());
        console.log(fase1);


        setTimeout( () => {
            console.log('essa promose estava pendente: ', fase1);
        }, 1100);
        
        const fase2 = await praticando('', random());
        console.log(fase2);
    
        const fase3 = await praticando('fase 3', random());
        console.log(fase3);
    } catch (e){
        console.log(e);
    }
   
}

executa();

// peding -> pendente
// fullfuilled -> resolvida
// rejected -> rejeitada

const teste2 = praticando('qlq', 5000);
console.log(teste2);


/*praticando('fase 1', random())
.then(valor => {
    console.log(valor);
    return praticando('fase 2', random());
})
.then(fase => {
    console.log(fase);
    return praticando("ok", random());
})
.then(fase => {
    console.log(fase);
})
.then(fase => {
    console.log("finalizamos na fase: ", fase);
})
.catch(e => console.log(e));*/

