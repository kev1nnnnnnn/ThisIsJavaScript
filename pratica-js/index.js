function getTimeSeconds(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'GMT' //zera
    });
}

//DOM
const relogio = document.querySelector(".relogio");
const iniciar = document.querySelector(".iniciar");
const pausar = document.querySelector(".pausar");
const zerar = document.querySelector(".zerar");
const sound = document.querySelector("#sound");

let segundos = 0;
let timer;

function iniciaRelogio() {

    timer = setInterval(function() {
        segundos++
        relogio.innerHTML = getTimeSeconds(segundos);
    }, 1000);
}

document.addEventListener('click', function(e) {

    const el = e.target;
    console.log(el);  //mostra os eventos de clique ao clicar na pagina

    if(el.classList.contains('zerar')) {
        console.log("Zerou");
    } 
});

document.addEventListener('click', function(e) {
    
    const er = e.target

    if(er.classList.contains('iniciar')) {
        console.log("iniciou");
    }
});

document.addEventListener('click', function(e) {
    const et = e.target

    if(et.classList.contains('zerou')) {
        console.log("zerou");
    }
})

iniciar.addEventListener('click', function(event) {
    relogio.classList.remove('pausado');
    relogio.classList.remove('zerado');
   clearInterval(timer);
    iniciaRelogio();
});

pausar.addEventListener('click', function(event) {
   clearInterval(timer);
   relogio.classList.add('pausado');
});

zerar.addEventListener('click', function(event) {
   clearInterval(timer);
   relogio.innerHTML = '00:00:00';
   relogio.classList.add('zerado');


   if(segundos >= 0) {
    sound.play();
   
   }

setTimeout(function() {
    
    clearInterval(timer);
    
}, 1000);
  

});


