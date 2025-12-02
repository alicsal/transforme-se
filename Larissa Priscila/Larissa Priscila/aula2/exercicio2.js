const input = require ('../input'); //invocar função para leitura de dados

//arrow function -> cria executavel -> encapsula função -> chama no assíncrono

//entrada de variaveis -> operação com variaveis -> printa na tela

(async () => {
    //criação das variaveis
    let numero1, numero2, numero3, resultadoSoma, resultadoMult;

    //entrada de dados
    console.log("Digite o primeiro número: ");
    numero1 = Number(await input());

    console.log("Digite o segundo número: ");
    numero2 = parseInt(await input()); //sem valor após a vírgula

    console.log("Digite o terceiro número: ");
    numero3 = parseFloat(await input());

    //operações
    resultadoSoma =  numero1 + numero2;
    resultadoMult = resultadoSoma * numero3;

    //imprimir resultados
    console.log(`A soma do 1° e 2° número é: ${resultadoSoma}\nA soma multiplicada pelo 3° número é: ${resultadoMult} `);

})()
