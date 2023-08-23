
const piepag = document.getElementById("telefono")
piepag.innerText = "02324-1111111"

document.getElementById("formulario").addEventListener("submit", function(event){
  event.preventDefault()
  let nombre = document.getElementById("nombre").value;
  let direccion = document.getElementById("direccion").value;
  let telefono = document.getElementById("telefono").value;
  let email= document.getElementById("email").value;
  if (nombre === "" || direccion === "" || telefono === "") {
      alert("Por favor complete todos los campos");
  } else {
      localStorage.setItem("nombre", nombre);
      localStorage.setItem("direccion", direccion);
      localStorage.setItem("telefono", telefono);
      localStorage.setItem("email", email);
  }
});