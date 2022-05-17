class Nave{
    static get desaceleracao(){
        return 0.17
    }
    constructor(nome,qntTripulantes,velocidadeAtual){
        this.nome=nome
        this.qntTripulantes=qntTripulantes
        this.velocidadeAtual=0
    }
    velocidade (aceleracao){
        this.velocidadeAtual+=(aceleracao*(1-Nave.desaceleracao))
    }
}