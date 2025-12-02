const input = require('../input'); 


(async () => {

    
    console.log("Digite seu nome: ");
    let nome = await input();

    let nomeTratado = nome[0].toUpperCase() + nome.slice(1).toLowerCase();

    console.log(nomeTratado);

    let nomeTratado1 = nome.toLowerCase();

    let nomeTratado2 = nomeTratado1[0].toUpperCase() + nomeTratado1.slice(1);

    console.log(nomeTratado2);

})();