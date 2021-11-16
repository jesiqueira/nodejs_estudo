//par chave/valor ou nome/valor
const saudacao = 'Opa' // contexto léxico ou que local o par chave valor foi definido

function exec(){
    const saudacao = 'Falaa' // contexto léxico, contexto da função
    return saudacao
}

//Objeto são   grupos aninhados de pares chave/valor
const cliente = {
    nome: 'Edmar',
    idade: 32,
    peso: 90,
    endereco:{
        logradouro: 'Rua muito legal',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)