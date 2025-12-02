/*
----declaração 
function nome(parametros){  // parâmetro é opcional
    algumaCoisa = parametros * 2
    return algumaCoisa  // return é opcional
}
*/

const {output} = require('./larissa');
function soma(n1,n2){
    return (n1 + n2)
    
}


(async ()=>{
    let e1 = Number(await output("Digite o primeiro nro: "));
    let e2 = Number(await output("Digite um nro: "));
    let resultado = soma (e1, e2);
    console.log(resultado);

    

    //resultado = soma("Olá", " Mundo")
    //console.log(resultado);

})()