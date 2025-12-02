/*
----declaração 
function nome(parametros){  // parâmetro é opcional
    algumaCoisa = parametros * 2
    return algumaCoisa  // return é opcional
}
*/

function soma(n1,n2){
    return n1 + n2
}

let resultado = soma(2, 6) // chamada (execução) da função
console.log(resultado);

resultado = soma("Olá", " Mundo")
console.log(resultado);