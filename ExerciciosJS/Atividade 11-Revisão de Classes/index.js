class principal{
    constructor(){
        this.nave=null
    }

    cadastroNave(){
        let nome = prompt("Informe o nome da nave")
        let qntTripulantes = prompt("Informe a quantidade de tripulantes")
        let tipoNave = Number(prompt("Informe se a nave é\n1-Batalha\n2-Transporte"))
        switch (tipoNave) {
            case "1":
                let numArmas = prompt("Informe o números de Armas que a nave possui")
                this.naveBatalha=new Nave(nome,qntTripulantes,numArmas)
                break;
            case "2":
                let numLugares = prompt("Informe o números de Lugares que a nave comporta")
                this.naveTransporte = new Nave(nome,qntTripulantes,numLugares)
                break;
            default:
                prompt("Opção inválida")
                break;
        }
    }

    showMenu(){
        do {
            let opcao = Number(prompt("1-Acelerar a nave\n 2-Trocar a Nave\n 3-Imprimir e sair"))
            switch (opcao) {
                case "1": 
                    let vel = Number(prompt("informe a aceleracao desejada"))
                    this.Nave.velocidade(vel)
                    break;
                case "2":

                    break;
                case "3":
                    break;

                default:
                    prompt("Opção inválida")
                    break;
            }
        } while (opcao!="3");
        return opcao
    }

}