// chamamos de estrutura || objeto anonimo || dicionario
let dado = {
    // chave: valor
    nome: "Marcius Leandro Junior",
    idade: 35,
    endereco: "Rua qualquer"
    // chaves: nome, idade, endereco / valores: Marcius, 35, Rua qualquer
}
//console.log(dado)

let user= []
user.push(dado)
//console.log(user)

//dado.nome = "Felipe"
//dado.idade = 20
//console.log(user)

user.push({
    nome: "Felipe",
    idade:20,
    endereco:"Rua outra"
})

console.log(user)