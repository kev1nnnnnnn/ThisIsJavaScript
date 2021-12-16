function criaCalculadora() {

    return {

        display: document.querySelector('.display'),
        
        //inicia: function() {
        inicia() {
            this.cliqueBotoes();
        },
        
        realizaConta() {
            let conta =  this.display.value;

            try {
                conta = eval(conta);
                if(!conta) {
                    alert('Conta inválida!');
                    return;
                }
                this.display.value = String(conta);
            } catch(e) {
                alert("Conta inválida!");
                return;
            }
        },

        clearDisplay() {
            this.display.value = '';
        },

        apagaUm() {
            this.display.value = this.display.value.slice(0, -1);
        },

        cliqueBotoes() {
            // this -> calculadora
            document.addEventListener('click', e => {
                const el = e.target;
                
                if(el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText);
                }

                if(el.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }

                if(el.classList.contains('btn-del')) {
                    this.apagaUm();
                }
                if(el.classList.contains('btn-eq')) {
                    this.realizaConta();
                }

            });
        },

        btnParaDisplay(valor) {
            this.display.value += valor;
        }
    };
}

const calculadora = criaCalculadora();
calculadora.inicia();
