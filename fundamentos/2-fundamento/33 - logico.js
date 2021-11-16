function compras(trabalho1, trabalho2){
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho2
    // const comprarTV32 = !!(trabalho1 ^ trabalho2 ) //bitwise XOR
    const comprarTV32 = trabalho1 != trabalho2 // outra forma de escrever XOR
    const manterSaudavel = !comprarSorvete // operador unario
    return {comprarSorvete, comprarTv50, comprarTV32, manterSaudavel}
}

console.log(compras(true,false))
console.log(compras(true,true))
console.log(compras(false, true))
console.log(compras(false,false))