const input = require('../input'); // importar a função que o professor criou

( async() => {
    
    console.log(`Digite seu nome: `);
    let nome = await input(); // chamar função input para entrar com os dados

    console.log(`Digite sua idade: `);
    let idade = await input();

    console.log(`Olá ${nome}, você tem ${idade} anos.`)

})()