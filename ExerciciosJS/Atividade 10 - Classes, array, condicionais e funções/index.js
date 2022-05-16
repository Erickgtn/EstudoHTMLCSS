class Nave{
    constructor(nome,qntTripulantes,engate=false,portas=false){
        this.nome = nome
        this.qntTripulantes = qntTripulantes
        this.engate = engate
        this.portas = portas
    }
}
function cadastroNave(){
    let nave = new Nave(
        prompt("Nome da nave"),
        Number(prompt("Quantidade de tripulantes")),
        true,
        true
     );
    return nave;
}
let arrayNaves = [];


let opc
do {
    opc = prompt("Escolha uma opção:\n 1-Realizar engate\n 2- Imprimir naves\n 3-Sair do programa ")

    switch (opc){
        case "1":
            arrayNaves.push(cadastroNave());
        break

        case "2":
            alert(arrayNaves)
            console.log(arrayNaves)
        break

        case "3":
        break

        default:
            alert("Opção inválida!!")
        break
    }
} while (opc != "3");

