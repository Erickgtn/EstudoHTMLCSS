let nomeNave = prompt("informe o nome da nave");
let caracterTroca = prompt("informe qual caracter que substituir");
let caracterNovo = prompt("Por qual caracter quer substituir? ");

let novoNomeNave="";

console.log("Nome nave: "+nomeNave)
console.log("Caracter para trocar: "+caracterTroca);
console.log("Caracter novo: "+caracterNovo);

for (let i = 0; i < nomeNave.length; i++) {
    if(nomeNave[i]==caracterTroca){
        novoNomeNave+=caracterNovo;
    }else{
        novoNomeNave+=nomeNave[i];
    }
}
console.log(novoNomeNave);
alert("Novo nome da nave :"+novoNomeNave);