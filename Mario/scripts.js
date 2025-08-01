const formu = document.querySelector(".formulario-fale-conosco")
const mascara = document.querySelector(".mascara-formulario")

function MostrarForm(){
    formu.style.left = "50%"
    formu.style.transform = "translateX(-50%)"
    mascara.style.visibility = "visible"
}

function EsconderForm(){
    formu.style.left = "-300px"
    formu.style.transform = "translateX(0)"
    mascara.style.visibility = "hidden"
}