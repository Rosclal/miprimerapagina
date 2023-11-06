// alert("Hola este es mi Javascript");
// let nombre = "Marta";
// nombre = "Maria";

// var nombre1 = "Marta";

// const nombre2 = "Marta";
// // nombre2 = "Maria";

// console.log(nombre);
// console.log(nombre1);
// console.log(nombre2);

// SELECCIONAR ELEMENTOS

let contenidoTitulo = "Nombre";
let titulo = document.querySelector(".logo .fuente")
// titulo.innerHTML = contenidoTitulo;

// CONDICIONALES
// let textoTitulo = titulo.innerText;
// console.log(textoTitulo);

// if (textoTitulo == "Nombre") {
//     titulo.innerHTML = "Otro";
// }
// else {
//         console.log("no se cumple");
// }

// FUNCIONES

let nombre = "Ani";
let ciudad = "Bs As";
let gusto = "chocolate";

let parrafo = document.querySelector(".parrafo2");

function cambiarTexto(nombre, ciudad, gusto) {
    let contenido = `Me llamo ${nombre}, nací en ${ciudad} y vivo
    en Caballito. Me gusta el ${gusto} y salir a pasear en días de
    sol. Me encantaría aprender a programar para poder ayudar a
    las personas a mostrar lo que hacen.`;

    return contenido;
}

// et nombre = "ani";
// let ciudad = "ani";
// let gusto = "ani";
// let parrafo = document.querySelector(".parrafo2");

// function cambiarTexto(nombre, ciudad, gusto)
// {
//     let contenido =`me llamo ${nombre}, naci en ${ciudad} me gusta el ${gusta}`
//     return contenido;
// }
// parrafo.innerText = cambiarTexto(nombre,ciudad, gusto);
// <p class="parrafo1">Mi nombre es: <span class="nombre"></span>, soy de: <span class="ciudad"></span> y me gusta: <span class="gustos"></span></p>

