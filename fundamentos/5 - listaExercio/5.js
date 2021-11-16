function formatar(valorDecimal){
    return `R$ ${valorDecimal.toFixed(2).toString().replace(".", ",")}`
}

console.log(formatar(0.1 + 0.2))