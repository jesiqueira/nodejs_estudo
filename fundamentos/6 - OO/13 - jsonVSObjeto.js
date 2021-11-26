const obj = {
    a: 1, 
    b: 2, 
    c: 3, 
    soma() {
        return a + b + c
    }
}

console.log(obj)

console.log(JSON.stringify(obj))

// console.log(JSON.parse("{a: 1, b: 2, c: 3}")) //formato invalido
// console.log(JSON.parse("{'a': 1, 'b': 2, 'c': 3}")) //formato invalido
console.log(JSON.parse('{"a": 1, "b": 2, "c": 3}')) //formato Válido

console.log('{"a" : 1, "b" : "String}, "c": true, "d": {}, "e": []}')