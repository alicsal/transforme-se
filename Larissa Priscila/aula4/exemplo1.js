const input = require("../input");

(async()=>{
    // quando a variavel esta vazia ela esta undefined
    continuar = "sim"
    while(continuar == "sim"){    
        console.log("Quer continuar?");
        var continuar = await input();        
    }
    


})();