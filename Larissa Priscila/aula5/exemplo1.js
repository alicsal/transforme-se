/*
um vetor é uma região na memória que pode ser estendida para outras regiões através de ponteiros
(é como se fosse uma estante)
*/

let cesta =["café","pão","ovo","leite"];
console.log(cesta); // mostra a cesta inteira
console.log(cesta[1]); // mostra o pão / O item do VETOR está sendo acessado pelo INDICE

cesta[1] = "baguete"
console.log(cesta)

cesta[4] = "kiwi"
console.log(cesta)

console.log("Tamanho: "+cesta.length);
console.log("Indice do ultimo elemento: "+(cesta.length-1))
console.log("Ultimo elemento: "+cesta[cesta.length-1])

//adicionando um elemento na ultima posição
//cesta[cesta.length-1] = 'chocolate' //esse vai roubar o kiwi
cesta.push("chocolate");
console.log(cesta);
console.log;