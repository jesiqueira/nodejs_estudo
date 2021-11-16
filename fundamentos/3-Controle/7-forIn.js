const nota = [3.4, 2.5, 6.5, 9.8]

for(let i in nota){
    console.log(`nota: ${nota[i]}`)
}

const pessoa ={
    nome: 'edmar',
    sobrenome: 'Siqueira',
    idade: 37,
    peso: 119
}

for( let atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`)
}