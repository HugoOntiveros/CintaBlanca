let N = document.getElementById("N")
let T = document.getElementById("T")
// let P = document.getElementById("P")
// let D = document.getElementById("D")
let NN = document.getElementById("NN")
let TN = document.getElementById("TN")
// let PN = document.getElementById("PN")
// let DN = document.getElementById("DN")


const cambio = () => {
    NN.innerHTML = N.value
    TN.innerHTML = T.value
    // PN.innerHTML = P.value
    // DN.innerHTML = D.value
    document.getElementById("DN").innerHTML = document.getElementById("D").value
    document.getElementById("Card").className = "card border-warning mb-3 d-flex mx-auto";

let pizza = P.value
console.log(pizza);

if(pizza.toUpperCase() === "S") {
    // PN.innerHTML = "Foto con piña"
    PN.className = "d-flex w-50 h-50 mx-auto"
    PS.className = "d-none"
    PE.classList.add('d-none')
} else if(pizza.toUpperCase() === "N") {
    // PN.innerHTML = "Foto sin piña"
    PS.className = "d-flex w-50 h-50 mx-auto"
    PN.className = "d-none"
    PE.className = "d-none"
} else {
    PN.className = "d-none"
    PS.className = "d-none"
    PE.innerHTML = "Respuesta no válida, por favor responda con: N o S"
    PE.classList.remove('d-none')
}

}

boton.addEventListener("click", cambio)