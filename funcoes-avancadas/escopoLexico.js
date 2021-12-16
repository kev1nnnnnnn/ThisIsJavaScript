const nome = "John";

function falaNome() {
    //const nome = 'Kevin'; //prevalece a que ta dentro
    console.log(nome);
}
falaNome();

function usaFalaNome() {

    falaNome();

}
usaFalaNome();