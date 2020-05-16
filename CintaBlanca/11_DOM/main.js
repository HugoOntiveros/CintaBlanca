let titulo = document.getElementById("1")
let parrafo = document.getElementById("2")
let texto = document.getElementById("texto")
let respuesta = document.getElementById("3")


const cambio = () => {
titulo.innerHTML = "Titulo modificado"
parrafo.innerHTML = "Parrafo modificado"
respuesta.innerHTML = texto.value
}

boton.addEventListener("click", cambio)