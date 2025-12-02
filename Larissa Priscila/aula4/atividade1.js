/*
Escreva um programa que pergunta pro usuário um número, apos
isso sorteia um outro número aleatório, se o usuário acertar ele
termina o programa.

O usuário tem no máximo 10 tentativas e no final fala se
ele terminou ou se acabou a quantidade de tentativas.
*/ 
input = require("../input");

(async()=>{

    nroAleatorio = Math.floor(Math.random()*10)

    for(let i=0; i<10; i++){
        console.log("Digite um número aleatório de 0 a 9");    
        nroUsuario = Number(await input());

        if(isNaN(nroUsuario) || nroUsuario < 0){
            console.log(`\n\nDIGITE SOMENTE NÚMEROS E POSITIVOS`)
        }

        if(nroUsuario == nroAleatorio){
            console.log("Número encontrado")
            console.log(`O número gerado: '${nroAleatorio}' foi encontrado na '${i+1}' tentativa`)
            break;
        }
        else
            console.log(`\n* * * * ********** * * * *\n*     Tente novamente    *\n* * * * ********** * * * *`)
            console.log(`* ${10-(i+1)} tentativas restantes *\n* * * ************ * * * *\n`)
    }

    if(nroAleatorio !== nroUsuario)
        console.log(`\t\tSinto muito\n\n\t    ******************\n\n\tSuas tentativas acabaram :((\n`)
    
        
})()