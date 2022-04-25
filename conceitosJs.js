
//Função em HOF
function doublevelocity(velocity, printer){
    console.log("Entrei em double velocity");
    let newVelocity = velocity*2;
    printer(newVelocity);
    return newVelocity;
}

let printVelocity = velocity => {
    console.log("Nova velocidade: "+ velocity+ "Km/s");
}

let newVelocity = doublevelocity(60,printVelocity);
console.log(newVelocity);

// Trabalhando com arrays
