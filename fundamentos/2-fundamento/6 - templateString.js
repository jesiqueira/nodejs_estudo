const nome = 'Edmar'
const concatenacao = 'Óla ' + nome + '!'
const template = `
    Olá
    ${nome}!`

console.log(concatenacao, template)

// Expressoes
console.log(`1 + 1 = ${ 1 + 1} `)

const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}!`)