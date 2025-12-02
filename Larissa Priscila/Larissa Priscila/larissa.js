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

module.exports = {
    output
} // exportando com chaves, logo precisa-se de chaves para importar




