let distancia = prompt("Informe uma  distância em anos luz");    
let opc = prompt(" Qual operacao deseja:\n 1- Parsec(PC)\n 2- Unidade astrônomica(AU)\n 3- Quilômetros(Km))")
console.log(opc)
switch(opc){
    case '1':
        alert("A distância " + distancia + "PC é de: "+distancia*0.306601);
        break;
    case '2':
        alert("A ditância " + distancia + " em AU é de: "+distancia*63241.1);   
        break;
    case '3':
        alert("A distância " + distancia + " em Km é de : "+ distancia*9.5*(Math.pow(10,12)));
        break
    default:
        alert("Opçao invalida");
        break;
}
