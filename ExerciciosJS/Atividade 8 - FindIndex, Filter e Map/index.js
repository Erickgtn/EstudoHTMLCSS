const naves = [["Fenix",8,true],["Golias",10,true],["Helmet",5,false],["Elemental",3,true],["Darwin",15,false]]

let tripulantes = naves.filter(nave =>{
  return nave[1] > 9
}).map(nave => {
  return nave[0]
})

let engatePendente = naves.findIndex(nave =>{
  return nave[2] == false
})

let maisculo = naves.map(nave=> {
  return nave[0].toUpperCase()
})

let mensagem = "NAves com mais de 9 tripulantes: " +tripulantes.join(", ")
mensagem +="\n Plataforma com proceesso de engate: " +(engatePendente +1)
mensagem +="\n Naves Destacadas: "+maisculo.join(", ")

alert(mensagem)