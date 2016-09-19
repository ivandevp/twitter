window.addEventListener("load", function() {

  var boton = document.getElementById("boton");

  boton.addEventListener("click", function() {

    var texto = document.getElementById("texto").value;
    document.getElementById("texto").value = "";

    var publicacion = document.createElement("p");
    publicacion.innerText = texto;

    var contenedor = document.getElementById("contenedor");
    contenedor.insertBefore(publicacion, contenedor.childNodes[0]);
  });
  
});