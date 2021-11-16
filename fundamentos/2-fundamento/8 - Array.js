const valores = [7.7, 8.9, 9.2, 8.3]
console.log(valores[0], valores[2])
console.log(valores[4])

valores[4] =10
console.log(valores)
console.log(valores.length)
valores.push({id:3}, false, null, 'teste')
console.log(valores)

console.log(valores.pop())//remove o ultimo elemento do array
delete valores[0] // remove do array o indice passado
console.log(valores)

console.log(typeof valores)