const request = obj => {
    return new Promise((resolve, reject) => {
    
        const xhr = new XMLHttpRequest();
        xhr.open(obj.method, obj.url, true); //define metodo, url e assincrono ou nao.
        xhr.send();
    
        xhr.addEventListener('load', () => {
            if(xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.responseText);
            } else {
                reject(xhr.statusText);
            }
        });
    });
};

document.addEventListener('click', e => {
    const el = e.target;
    const tag = el.tagName.toLowerCase();

    if (tag === 'a') {
        e.preventDefault();
        carregaPagina(el);
    }
});

async function carregaPagina(el) {
   try {
    const href = el.getAttribute('href');
    const response = await fetch(href);
    const html = await response.text();
    carregaResultado(html);
   } catch(e) {
       console.log(e);
   }
}

function carregaResultado(response){
    const resultado = document.querySelector('.resultado');

    resultado.innerHTML = response;
}

/*fetch('pagina1.html')
.then(resposta => {
    if(resposta.status !== 200) throw new Error('ERROR 404 NOSSO');
    return resposta.text();
})
.then(html => console.log(html))
.catch(e => console.error(e));*/
