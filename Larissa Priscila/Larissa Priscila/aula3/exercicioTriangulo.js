const input = require ('../input');

(async() => {

    //criação e entrada de dados 
    let lado1, lado2, lado3;
    
    do{
        console.log('Digite somente números positivos');
        console.log("Digite o 1º lado do triângulo: ")
        lado1 = Number(await input())
        console.log("Digite o 2º lado do triângulo: ")
        lado2 = Number(await input())
        console.log("Digite o 3º lado do triângulo: ")
        lado3 = Number(await input())
    }while(isNaN(lado1, lado2, lado3) || (lado1< 0) || (lado2<0) || (lado3<0))
    
  
    //teste lógico
    if(lado1+lado2 > lado3 && lado1+lado3 > lado2 && lado2+lado3 > lado1){
        console.log("É um triângulo");

        if(lado1 === lado2 === lado3){ // todos os lados tem a mesma medida
        console.log("Triângulo Equilátero");
        }else if(lado1 !== lado2 && lado2 !== lado3 && lado1 !== lado3) 
        console.log("Triângulo Escaleno"); // todos os lados tem medidas diferentes
        else
            console.log("Triângulo Isósceles"); // dois lados tem a mesma medida
    
    }else{
        console.log("Não é um triângulo");
    }
})()


