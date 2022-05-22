function save(){
    window.preventDefault()
    let name = document.querySelector("input[name='name']").value
    let programmingLang = document.querySelector("select[name='programming-lang']").value
    alert("Nome: " +nome + "\nLinguagem de Programação: "+ programmingLang)
}