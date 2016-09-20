window.addEventListener("load", function() {

    var boton = document.getElementById("boton");
    var textArea = document.getElementById("texto");
    var contador = document.getElementById("contador");
    var caracteres = contador.innerHTML = 140;
    
    boton.addEventListener("click", function(e) {
        e.preventDefault();
        var texto = textArea.value;
        agregarMensaje(texto);
        textArea.value = "";
        contador.innerHTML = 140;
        boton.disabled = true;
    });

    function agregarMensaje(texto) {
        var publicacion = document.createElement("div");
        publicacion.innerText = texto;
        var contenedor = document.getElementById("contenedor");
        contenedor.insertBefore(publicacion, contenedor.childNodes[0]).classList.add("box");
    }

    textArea.addEventListener("keydown", function() {
        boton.disabled = false;
        var longitud = textArea.value.length;

        if(longitud <= caracteres) {
            contador.innerHTML = caracteres - longitud;
        } else {
            contador.innerHTML = caracteres - longitud;
        }

        if(longitud == 0) {
            boton.disabled = true;
        }

        if(longitud > 120) {
            contador.classList.add("colorUno");
        }

        if(longitud > 130) {
            contador.classList.add("colorDos");
        }

        if(longitud < 120) {
            contador.classList.remove("colorUno");
        }

        if(longitud < 130) {
            contador.classList.remove("colorDos");
        }

        if(longitud > caracteres) {
            boton.disabled = true;
        }
    });
  
});
