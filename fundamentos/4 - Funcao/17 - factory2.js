// Factory

function criarPessoa(nome, idade, desconto = 2000){
    return {
        nome : nome,
        idade,
        salario : desconto
    }
}

console.log(criarPessoa('edmar',16, 2500))
console.log(criarPessoa('Lucas',9))