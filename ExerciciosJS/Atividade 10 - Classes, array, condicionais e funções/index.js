class Nave{
    constructor(nome,qntTripulantes){
        this.nome = nome
        this.qntTripulantes = qntTripulantes
        this.engate = false
        this.portas = false
    }
}
let arrayNaves = [];
function cadastroNave(){
    let nave = new Nave(
        prompt("Nome da nave"),
        Number(prompt("Quantidade de tripulantes"))
    );
    return nave;
}

let opc
do {
    opc = prompt("Escolha uma opção:\n 1-Realizar engate\n 2- Imprimir naves\n 3-Sair do programa ")

    switch (opc){
        case "1":
            arrayNaves.push(cadastroNave());
        break

        case "2":
            console.log(arrayNaves)
        break

        case "3":
        break

        default:
            alert("Opção inválida!!")
        break
    }
} while (opc != "3");

