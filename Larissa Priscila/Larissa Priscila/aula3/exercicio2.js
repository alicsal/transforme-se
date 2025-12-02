const input = require('../input');

/*escreva um programa que peça o código do produto e o saldo em dinheiro que a pessoa inseriu
se o código do produto for 42 e o saldo maior que 5 da uma coca-cola para a pessoa
*/

(async() => {

    //criação de variáveis :
    let codProduto, saldo;

    //entrada de valores nas variáveis
    console.log("Digite o código do produto: ");
    codProduto = await input();

    console.log("Digite o saldo do produto: ");
    saldo = Number(await input());

    while (isNaN(saldo)){
        console.log('Digite apenas um número');
        saldo = Number(await input());
    }

    //teste lógico
    if(codProduto == 42 && saldo >= 5)
        console.log("Toma sua coca-cola");
    else
        console.log("Nenhum produto a oferecer");

})()