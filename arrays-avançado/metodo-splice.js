
//Método push
const nomes = ['john', 'hugo', 'viviane'];
nomes.splice(nomes, length, 0, 'jorge');

console.log(nomes);

//Método splice
const frutas = ['uva', 'maca', 'melancia'];
const removidos = nomes.splice(1, 0, 'jorge');
console.log(frutas, removidos);

