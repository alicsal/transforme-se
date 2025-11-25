// importação é qdo estou trazendo para o meu arquivo funções externas

// criar uma variavel para importar 
const input = require('../input');


//arrow function OU função anônima (deve ser encapsulada) --> a função anônima não precisa ser chamada (a execucação é o último parenteses)
(async () => { // a chaves chama contexto, usar variavel local 'let' (que não existe fora do contexto)
    console.log("Digite seu nome: ");
    
    let nome = await input(); // a função pai deve ser async pois o metodo await é assíncrono
    console.log('Olá '+ nome);

    

})()

