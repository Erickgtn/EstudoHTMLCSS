

function desacelerar(velocidade,imprimir){
    while(velocidade>0){
       imprimir(velocidade); 
       velocidade=velocidade-20;
    }
    alert("Nave parada. Comportas abertas!!");
}

let velocidade = 350;

function imprimir(velocidade){
    console.log("Velocidade em: "+velocidade+"Km/s");
}

let desaceleracao = desacelerar(velocidade,imprimir);
console.log(desaceleracao);