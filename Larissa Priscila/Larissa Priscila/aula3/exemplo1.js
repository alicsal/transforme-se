const input = require('../input');

//require importa arquivo externo

(async()=>{
    console.log("Qual sua idade?")
    let idade = Number(await input())

    if(idade<=0){
        console.log("Idade Invalida");
    }else if (idade >=18){ // pelo fato do contexto só ter uma linha a "{}" ñ é obrigatória, logo else if podem ficar juntos
        console.log("Maior de idade")
    }else{
        console.log("Menor de idade")
    }
})()