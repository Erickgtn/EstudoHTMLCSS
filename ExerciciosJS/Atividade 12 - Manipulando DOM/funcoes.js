function adicionar(){
    let area = document.querySelector("input[name='area']").value
    let bairro = document.querySelector("input[name='bairro']").value
    let cidade = document.querySelector("input[name='cidade']").value
    let numResidencia = document.querySelector("input[name='numResidencia']").value

    let newListValue = document.createElement("li")
    newListValue.innerText = area + "m²,número " + numResidencia + " (" + bairro + " - " + cidade + ")"

    let botaoRemover = document.createElement("button")
    botaoRemover.type = "button"
    botaoRemover.innerText ="Remover"
    botaoRemover.setAttribute("onclick","remover(this)")

    newListValue.appendChild(botaoRemover)
    document.getElementById("lista-casa").appendChild(newListValue)
}
function remover(button){
    let liToRemove = button.parentNode
    document.getElementById("lista-casa").removeChild(liToRemove)
}