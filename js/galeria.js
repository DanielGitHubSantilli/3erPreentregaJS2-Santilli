let texto ="Hola. Estás en la sección de Galería."
const hablar = (texto)=> speechSynthesis.speak(new SpeechSynthesisUtterance(texto))

hablar(texto)

let $h2 = document.getElementsByTagName("h2")
console.log("Participación en el año 2020")
