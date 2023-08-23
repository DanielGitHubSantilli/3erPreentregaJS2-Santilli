const titulo2 = document.createElement("h2");
const textoTitulo2 = document.createTextNode("Título creado para prácticar con DOM");


let texto ="Hola. Soy Daniel Santilli. Te felicito por haber adquirido este software."
const hablar = (texto)=> speechSynthesis.speak(new SpeechSynthesisUtterance(texto))

hablar(texto)

const piepag = document.getElementById("telefono")
piepag.innerText = "02324-1111111"

const titulo = document.getElementsByClassName("animate__animated animate__flash");

titulo.innerText ="animate__animated animate__flash"

setTimeout(()=>{
    console.log(document.getSelection().toString());
},4000)
