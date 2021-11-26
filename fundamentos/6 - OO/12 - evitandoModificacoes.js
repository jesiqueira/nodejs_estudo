//Object.preventExtensions
const produto = Object.preventExtensions({
    nome: 'Qualquer',
    preco: 199,
    tag : 'promoção'
})

console.log('Extensível: ', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar Branca'
delete produto.tag
console.log(produto)

// Object.seal -> não consegue, add, excluir mas consegue modificar
const pessoa ={
    nome : 'Juliana',
    idade : 35
}

Object.seal(pessoa)

console.log(pessoa)
console.log('Selado: ', Object.isSealed(pessoa))
pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)


// Object.freeze = selado + valores constante