/*
Escreva um programa que pergunta pro usuário um número, apos
isso sorteia um outro número aleatório, se o usuário acertar ele
termina o programa.

O usuário tem no máximo 10 tentativas e no final fala se
ele terminou ou se acabou a quantidade de tentativas.
*/ 
const {sorteia, output} = require('../larissa'); // não precisa importar tds os arquivos & na ordem -apenas o mesmo nome 
//do respectivo arquivo é necessário

(async()=>{


    for(let i=0; i<10; i++){

        var nroUsuario = Number(await output("Digite um número aleatório de 0 a 9"));
        var nroAleatorio = sorteia(10)

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