let nomeNave = prompt("Infome o nome da nave");
let velocidade = 0;

let opcao = prompt("Escolha uma das opções: \n 1-Acelear a nave em 5km/s\n 2-Desacelear em 5km/s\n 3-Imprimir dados de bordo\n 4-Sair do programa")
console.log(opcao);
do {
    switch (opcao){
        case '1':
            acelerar();
            break;
        case '2':
            desacelerar();
            break
        case '3':
            imprimir();
            break;
        case '4':
            break;
        default:
            alert("Opção invalida");
    }
    opcao = prompt("Escolha uma das opções: \n 1-Acelear a nave em 5km/s\n 2-Desacelear em 5km/s\n 3-Imprimir dados de bordo\n 4-Sair do programa")
} while (opcao!='4');

function acelerar (){
    let aceleracao = 5;
    velocidade = velocidade + aceleracao;
    alert("Velocidade atual:" + velocidade);
}
function desacelerar(   ){
    if(velocidade >= 5){
        velocidade = velocidade - 5;
        alert("Velocidade atual:" + velocidade);
    }else{
        alert("Velocidade abaixo dos 5Km/s");
    }  
}
function imprimir(){
    alert("Nome da nave: "+nomeNave + "\n Velocidade atual: "+velocidade);
}