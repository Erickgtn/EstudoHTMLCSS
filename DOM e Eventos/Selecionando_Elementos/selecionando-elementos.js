function show(){
    
    //Seleção de elemento pelo id que retorna um objeto
    let element1 = document.getElementById("name")
    
    //Seleção de um elemento pelo nome retornando a lista de elementos que tem atributo nome
    let element2 = document.getElementsByName("phone")

    //Seleção tudo que está no elemento de acordo com os atributos
    let element3 = document.querySelectorAll("div#phone input[name='phone']")

    //Seleção por nome da tag
    let element4 = document.getElementsByTagName("input")
    
    
    console.log(element)
}