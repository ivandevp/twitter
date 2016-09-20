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
        contador.classList.remove("colorUno");
        contador.classList.remove("colorDos");
        boton.disabled = true;
    });

    textArea.addEventListener("keydown", function() {
        boton.disabled = false;
        var longitud = textArea.value.length;

        contarCaracteres(longitud);
        cambioColor(longitud);

    });

    textArea.addEventListener("keyup", function(e) {
        
        if(e.keyCode == 13) {
           var row = this.getAttribute("rows");
           this.setAttribute("rows", parseInt(row) + 1);
        }
    });

    function agregarMensaje(texto) {
        var publicacion = document.createElement("div");
        publicacion.innerText = texto;
        var contenedor = document.getElementById("contenedor");
        contenedor.insertBefore(publicacion, contenedor.childNodes[0]).classList.add("box");
    }

    function contarCaracteres(longitud) {
         if(longitud <= caracteres) {
            contador.innerHTML = caracteres - longitud;
        } else {
            contador.innerHTML = caracteres - longitud;
        }
        if(longitud == 0) {
            boton.disabled = true;
        }
         if(longitud > caracteres) {
            boton.disabled = true;
        }
    }

    function cambioColor(longitud) {
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
    }
});


