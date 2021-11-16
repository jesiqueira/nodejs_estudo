function tratarErro(erro){
    throw new Error('Algo deu errado')
}

function imprimirNomeGritado(obj){
    try{
        console.log(obj.name.toUpperCase() + '!!!')
    }
    catch (e){
        tratarErro(e)
    }
    finally{
        console.log('Final')
    }
}

const obj = {nome: 'Edmar'}
imprimirNomeGritado(obj)