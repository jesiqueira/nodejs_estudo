{ 
    { 
        { 
            { 
                var sera = 'será???'
                console.log(sera)
                //Obs.: var nao respeita escopo
            } 
        } 
    } 
}
console.log(sera)

function teste(){
    //var em uma funcao tem escopo local
    var local = 123
    console.log(local)
}
teste()
// console.log(local)