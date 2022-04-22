let nome = prompt("Informe seu nome");
let velocidade = 0;
let velocidade2 = prompt("Informe sua velocidade que gostaria de viajar");
alert("voce esta indo para a velocidade de " + velocidade2 + "Km/s, confirma?")

if(velocidade2){
    velocidade=velocidade2
}
    
if(velocidade < 0){
    alert("Nave esta parada. Considere partir e aumentar a velocidade")
}
if(velocidade < 40){
    alert("Voce esta devegar, podemos aumentar mais")
}
if(velocidade >=40 && velocidade <80 ){
    alert("Parece uma boa velocidade para manter")
}
if(velocidade >=80 && velocidade <100){
    alert("Velocidade alta. Considere diminuir");
}
if(velocidade >=100){
    alert("Velocidade perigosa. controle automatico forçado");
}
alert("Nome: "+nome+"\n  Velocidade atual: "+velocidade)