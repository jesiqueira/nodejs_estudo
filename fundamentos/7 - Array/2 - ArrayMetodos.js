const pilotos = ['Vetel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() //Remove o ultimo elemento do array
console.log(pilotos)

pilotos.push('Vertappen')//Add elementos na ultima posição do Array
console.log(pilotos)

pilotos.shift() // remove o primeiro elemento do Array
console.log(pilotos)

pilotos.unshift('Hamilton') //add elemento na primeira posição do array
console.log(pilotos)

// splice pode adicionar e remover elementos

// adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa') //Adiciona na posição 2, 0 para não remover nem um elemento, e os valores a ser add.
console.log(pilotos)

// Remover elemento
pilotos.splice(3, 1) //remover o conteudo do 3 indice do Array e somente ele
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) //Cria um novo array a partir do indice passodo como parametro
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4) //criar um novo array com os elementos do indice 1 ao 3 o indice 4 não entra
console.log(algunsPilotos2)
