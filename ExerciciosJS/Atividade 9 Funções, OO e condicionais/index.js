
var nave ={
    velociAtual:0
};

nave.velMaximaFinal = 0
nave.nome = prompt ("Informe o nome da Nave")
nave.tipo = prompt ("Informe o tipo da Nave")
nave.velMaximaFinal = Number(prompt ("Informe a velocidade Máxima permitida"))
let opc
do{
    opc = prompt("Informe a sua escolha\n 1-Acelerar\n 2-Desacerelerar\n 3-Parar")
    
    switch (opc){
        case "1":
            let aceleracao = parseFloat(prompt("Informe quanto deseja acelerar"))
            acelerar(aceleracao)
            break
        case "2":
            let desacelerar = (aceleracao)=>{
                console.log("Oii")
                nave.velociAtual-=aceleracao
                alert(nave.velociAtual)
            }
            desacelerar()
            break
        case "3":
            parar()
            break
        default:
            alert("Opção invalida")
            break
    }
}while(opc!="3")


function acelerar(aceleracao){
    nave.velociAtual +=aceleracao
    verificacao()
}

function verificacao(){
    if(nave.velMaximaFinal < nave.velociAtual){
        alert("Velocidade acima da permitida!!")
    }
}
function parar(){
    alert("Nome da nave: "+nave.nome +"\nTipo da nave: "+nave.tipo + "\nVelocidade máxima está: "+nave.velMaximaFinal)
}