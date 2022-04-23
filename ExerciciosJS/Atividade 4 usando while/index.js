let nave = prompt("Informe o nome da nave");
let opcao = 0;
opcao = prompt("Deseja entrar em dobra espacial?\n 1-Sim\n2-Não")
let contDobra=0;
console.log(opcao);
console.log(contDobra);
while(opcao=='1'){
    contDobra=contDobra+1;
    opcao = prompt("Deseja realizar a proxima dobra?\n1-Sim\n2-Não ");
}
prompt("Nave: "+nave+" Quantidade de dobras realizada: "+contDobra); 