const input = require('../input');

(async()=>{
    console.log("Digite um nro qualquer");
    nro = Number(await input());

    if (nro == 0)
        console.log("O número é zero")
    else if (nro % 2 == 0)
       console.log("O número é par")
    else
        console.log("O número é ímpar")

})()