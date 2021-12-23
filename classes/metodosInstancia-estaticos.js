function teste() {
    console.log("esse é um teste");
}

class ControleRemoto {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
        teste();
    }
    
    //metodo de instância.
    aumentarVolume() {
      document.getElementById('aumentar').addEventListener('click', () => {
        this.volume += 2;
        
        document.getElementById('volume').innerHTML = this.volume;
       
      })
        
    }
    diminuirVolume() {
        document.getElementById('diminuir').addEventListener('click', () => {

            this.volume -= 2;

            document.getElementById('volume').innerHTML = this.volume;
           
        })
    }

    //métodos staticos.
    static soma(x, y) {
       return x + y;
    }
}

controle = new ControleRemoto('LG');
controle.aumentarVolume();
controle.diminuirVolume();
console.log(controle);

console.log(ControleRemoto.soma(2, 3));


