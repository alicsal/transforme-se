/*
quero que voces façam uma agenda telefonica 
pede o nome e telefone de cada pessoa, e enquanto o usuario falar que cadastrar um novo (sim),
ele vai cadastrando na lista. No final exibe a lista completa

OBS : as vezes nao tem que ser na ordem que eu listei (ela acaba dificultando)
1- struct com nome: telefone: / 2-estrutura de repetição com condição sim
3- entrada de dados do usuario / 4- imprimir dados
*/
input = require("../input");

(async()=>{
    let agenda= []
/*    do{
        console.log("\t------Cadastro de Contatos------\n")
        let nome, telefone, continuar, i;
        console.log("Nome: ");
        nome = await input();

        console.log("Telefone: ");
        telefone = Number(await input());

        console.log("Deseja continuar o cadastro?");

    }while((continuar = "sim" || "Sim" || "SIM") && (i < 5)) */
    let continuar = "sim";
    for (;agenda.length<=5 && continuar == "sim";){
        let nomeE, fone;
        console.log("\t------Cadastro de Contatos------\n")
        //entrada de dados
        console.log("Nome: ");
        nomeE = await input();
        console.log("Telefone: ");
        fone = await input();
        
        //passar variavel pro objeto
        agenda.push({
            nome: nomeE,
            telefone: fone
        })

        console.log("Deseja continuar o cadastro? (sim)");
        continuar = await input ();
    }
    console.log(agenda)

})()