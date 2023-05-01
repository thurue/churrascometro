
var Nadultos = 0
var Ncriança = 0
var Nduração = 0

function NdA() {
    let adultos = document.getElementById("adultos")
    let A = parseInt(adultos.value)
    var nadultos = A
    console.log(nadultos, 'adultos')

    return Nadultos = nadultos
}

function NdC() {
    let crianças = document.getElementById("crianças")
    let C = parseInt(crianças.value)
    var ncrianças = C
    console.log(ncrianças, 'crianças')

    return Ncriança = ncrianças
}
function Dur() {
    let duração = document.getElementById("duração")
    let D = parseInt(duração.value)
    var nduração = D
    console.log("o evento vai durar", nduração, "Horas")

    return Nduração = nduração
}
function btn() {
    if (Nduração < 6) {
        var carne = 400 * (Nadultos + (Ncriança / 2));
    }
    else {
        var carne = 650 * (Nadultos + (Ncriança / 2));
    }

    if (Nduração < 6) {
        var cerveja = 1200 * Nadultos;
    }
    else {
        var cerveja = 2000 * Nadultos;
    }

    if (Nduração < 6) {
        var refri = 1000 * Ncriança / 2;
    }
    else {
        var refri = 1500 * Ncriança / 2;
    }

    console.log(carne, "gramas de carne")
    console.log(cerveja, "ml de cerveja")
    console.log(refri, "ml de refri")

    let Container = document.getElementsByClassName("container")[0]
    Container.style.height = "608px"

    let Re = document.getElementsByClassName("result")[0]
    Re.children[0].innerHTML = ( carne + " Gramas de Carne")
    Re.children[1].innerHTML = ( cerveja + " Ml de Cerveja")
    Re.children[2].innerHTML = ( refri + " Ml de Refrigerante/Água")
    Re.style.display += "inline"
}


