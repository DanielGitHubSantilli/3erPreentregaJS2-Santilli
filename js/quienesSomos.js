let texto ="Hola. Conozcan un poco nuestra historia."
const hablar = (texto)=> speechSynthesis.speak(new SpeechSynthesisUtterance(texto))

hablar(texto)