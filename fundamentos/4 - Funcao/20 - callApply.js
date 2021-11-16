function getPreco(imposto = 0, moeda = 'R$'){
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome : 'notebook',
    preco : 4500,
    desc : 0.15,
    getPreco
}

console.log(getPreco())
console.log(produto.getPreco())

const carro = {preco : 49999, desc: 0.20}

console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

console.log(getPreco.call(carro, .1, '$'))
console.log(getPreco.apply(carro, [.1, '$']))