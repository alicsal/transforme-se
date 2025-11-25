const input = require("../input");

(async()=>{
    
    // quando a variavel esta vazia ela esta undefined
    let continuar = "sim"
    while(continuar == "sim"){    
        console.log("Quer continuar?");
        continuar = await input();        
    }
    


})();