function addNewPhone(){
    const phoneForm = document.querySelector("form#phones")
    const newPhone = phoneForm.children(true)
    const phonePosition = phoneForm.children.length + 1
    newPhone.querySelector("label").innerText = "Telefone " + phonePosition + ": "
    phoneForm.appendChild(newPhone)
}