console.log("carreguei")

var input = document.querySelector("#textoUsuario")
var numero = document.querySelector("#numero")
var divTeste = document.querySelector("#captura")
var itemLista = document.querySelector("#item")
var erro = document.createElement("h1")

function adicionar() {
    if (input.value == "" || input.value == " ") {

        erro.textContent = "Escreva um item"
        erro.setAttribute("id", "erro")
        divTeste.appendChild(erro)
    }
    else {
        if (document.querySelector("#erro")) {
            divTeste.removeChild(erro)
        }

        var item = document.createElement("li")
        item.textContent = input.value
        itemLista.appendChild(item)
    }

    // var titulo = document.createElement("h1")
    // titulo.textContent = "consegui ?"
    // divTeste.appendChild(titulo)

}


function mudar() {
    console.log(input.placeholder)
    input.placeholder = "Texto modificado"
}

function somar() {
    //    numero.value = numero.value + 3
    numeroDigitado = parseInt(numero.value)

    numero.value = numeroDigitado + 3

    console.log(numeroDigitado)

}