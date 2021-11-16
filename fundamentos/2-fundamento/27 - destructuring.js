// novo recurso do ES2015 ou ES6
//destruturar obejto

const pessoa ={
    nome: 'Ana',
    idade: 5,
    endereco:{
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

//Usamos o {} para tirar o nome e idade da pessoa, ou seja destruturar nome e idade
const  {nome, idade} = pessoa
console.log(nome, idade)

const { nome: n, idade: i} = pessoa
console.log(n, i)

const {sobrenome, bemHumorado = true} = pessoa
console.log(sobrenome, bemHumorado) // sobrenome será apresentado com undefined ou indefinido 

const {endereco: {logradouro, numero}} = pessoa
console.log(logradouro, numero)