const input = require("../input");

(async()=>{
    
    let i = 0; // || iterator =0 (aquele que interage rsrsrs kiddin /notkidding
    let continuar; // inicializando a variavel continuar
     
    // usa o do while qdo preciso que o programa execute ao menos 1vez
    do{   

        console.log("Quer continuar?");
        continuar = await input();        
        console.log("I: "+i);
        i++
        // iterator = iterator +1; // i +=1 OR  i++
    }while(continuar == "sim" && i <3);
    console.log("fora do lupi: I: "+i);


})();