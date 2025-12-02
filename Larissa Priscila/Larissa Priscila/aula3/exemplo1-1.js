const input = require('../input');

//require importa arquivo externo

(async()=>{
    console.log("Digite sua idade: ");
    
    let idade = parseInt(await input()); //letalable
    
    if (idade <= 17){
        console.log("Menor de Idade");
    }else{
    console.log("Maior de Idade");
    }
    
})()