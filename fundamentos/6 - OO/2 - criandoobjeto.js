//usando a notação literal
const obj1 = {}
console.log(obj1)

//Objeto em js
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

//funcao construtura
function Produto(nome, preco, desc){
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}

const p1 = new Produto('Caneta', 7.99, 0.15)
const p2 = new Produto('Notebook', 7999.99, 0.15)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

// Função Factury
function criarFuncionario(nome, salarioBase, faltas){
    return {
        nome,
        salarioBase,
        faltas,
        getSalario(){
            return (salarioBase / 30)  * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('Joao', 12312, 4)
const f2 = criarFuncionario('Joao', 15312, 1)
console.log(f1.getSalario())
console.log(f2.getSalario())

// Object.create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

// Uma funcao famosa que retorna objeto...
const fromJSON = JSON.parse('{"info" : "Sou um JSON"}')
console.log(fromJSON.info)