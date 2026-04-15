const list = [32, 87, 999, 17777232, 1, 54, 111]


//const listaModificada = list.map(function(elemento)){
//    return elemento * 2;
//};

//console.log(listaModificada);


let pares = [];
let impares = [];

for (let i = 0; i < list.length; i++){
    if (list[i] % 2 === 0){
        pares.push(list[i]);
    } else {
        impares.push(list[i]);
    }
}

console.log (`Numeros pares: ${pares.join(', ')}`)
console.log (`Numeros impares: ${impares}`)