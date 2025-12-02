const input = require("../input");

(async ()=> {
    console.log("Digite o 1º lado: ");
    let lado1 = Number(await input());
    console.log("Digite o 2º lado: ");
    let lado2 = Number(await input());
    console.log("Digite o 3º lado: ");
    let lado3 = Number(await input());

    if(isNaN(lado1) || isNaN(lado2) || isNaN(lado3)){
        console.log("lado não é numero")
    }else if(lado1 <= 0 || lado2<=0 || lado3<=0){
        console.log("Números negativos")
    }else if ( 
        (lado1 + lado2 <= lado3) 
        || (lado2 + lado3 <= lado1) 
        || (lado1 + lado3 <= lado2) 
    ) {
        console.log("Estorou")
    }else if(lado1 == lado2 && lado2 == lado3){
        console.log("Equilatero");
    }else if(lado1==lado2 || lado2==lado3 || lado1==lado3){
        console.log("Isoceles");
    }else{
        console.log("Escaleno");
    }
})();


