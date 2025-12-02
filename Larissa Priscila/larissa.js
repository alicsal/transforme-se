const input = require("./input");

async function output(msg){ 
    console.log(msg);
    let leitura = await input();
    return leitura;
}
// let resposta = await output("qual é o seu nome")
//ERRO : SyntaxError: await is only valid in async functions and the top level bodies of modules
//encapsular no async rono 

/*(async ()=>{
    let resposta = await output("qual é o seu nome")
    console.log(resposta);
})()*/

// parametro são variaveis passadas na declaração-criação da função
//dentro dos parenteses
function sorteia(limite){
    return Math.floor(Math.random()*(limite+1)) // random vai de nros aleatórios 0 à 1 /floor arredonda pra baixo
}

module.exports = {
    output, sorteia
} // exportando com chaves, logo precisa-se de chaves para importar /pq tem mais de um item




