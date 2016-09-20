window.addEventListener("load", function() {

    var boton = document.getElementById("boton");
    boton.disabled = true;
    
    boton.addEventListener("click", function(e) {
        e.preventDefault();
        var textArea = document.getElementById("texto");
        var texto = textArea.value;
        agregarMensaje(texto);
        textArea.value = "";
        boton.disabled = true;
    });

    function agregarMensaje(texto) {
        var publicacion = document.createElement("div");
        publicacion.innerText = texto;
        var contenedor = document.getElementById("contenedor");
        contenedor.insertBefore(publicacion, contenedor.childNodes[0]).classList.add("box");
    }

    texto.addEventListener("keydown", function() {
        boton.disabled = false;
        var caracteresPermitidos = 140;
        var longitud = document.getElementById("texto").value.length;
        if(longitud <= caracteresPermitidos) {
            document.getElementById("contador").value = caracteresPermitidos - longitud;
        } else {
            document.getElementById("contador").value = caracteresPermitidos - longitud;
        }
        if(longitud == 0) {
            boton.disabled = true;
        }
    });
  
});
