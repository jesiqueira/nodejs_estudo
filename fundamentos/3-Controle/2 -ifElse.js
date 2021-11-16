const imprimirResultado = function(nota){
    if(nota >= 7){
        console.log('Aprovado')
    }else if(nota < 7){
        console.log('Reprovado')
    }
    else{
        console.log('Nota invalida')
    }
}

imprimirResultado('teas')