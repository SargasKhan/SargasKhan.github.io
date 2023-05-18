/************Script para modo oscuro***************/

const btn_darkmode = document.getElementById("darkmode");
btn_darkmode.addEventListener("click", function(){
    /*if( document.body.classList.contains("dark") ){
        document.body.classList.remove("dark");
    }
    else{
        document.body.classList.add("dark");
    }*/

    document.body.classList.toggle("dark");
    


})

/****************Script para encriptar ***************/

const textArea = document.querySelector(".caja-texto")
const mensaje = document.querySelector(".caja-encriptado");

/*La letra "e" es convertida en "enter"
La letra "i" es convertida en "imes"
La letra "a" es convertida en "ai"
La letra "o" es convertida en "ober"
La letra "u" es convertida en "ufat"*/

function encriptar(){
    let texto = document.getElementById("texto").value
    console.log(texto)

    let textoCifrado = texto
        .replaceAll("e","enter")
        .replaceAll("i","imes")
        .replaceAll("a","ai")
        .replaceAll("o","ober")
        .replaceAll("u","ufat");

    /****** Función para reemplazar mayúsculas y minúsculas ************/
        /*.replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat")
        .replace(/a/gi, "ai");
        
    **********************************************************************/
    
    console.log(textoCifrado)
    console.log(texto)

    if (texto.length != 0){
        mensaje.value = textoCifrado 
        textArea.value = "";
        mensaje.style.backgroundImage = "none";
    }
    else{
        mensaje.value = "No se ha detectado ningún texto a encriptar."
        mensaje.style.backgroundImage = "url('Imagenes/error2.jpg')";
        mensaje.style.backgroundSize = "60%";
        mensaje.style.backgroundPosition = "bottom";
        textArea.value = "Por favor, ingrese el texto que desea encriptar.";
    }
    }

/****************Script para desencriptar***************/

function desencriptar(){
        let textoCifrado = document.getElementById("texto").value
        let texto = textoCifrado
            .replaceAll("enter","e")
            .replaceAll("imes","i")
            .replaceAll("ai","a")
            .replaceAll("ober","o")
            .replaceAll("ufat","u");
        
        console.log("textoCifrado:" + textoCifrado)
        console.log("texto:" + texto)
    
    
        mensaje.value = texto 
        textArea.value = "";
        mensaje.style.backgroundImage = "none";
    
        if (texto.length != 0){
            mensaje.value = texto 
            textArea.value = "";
            mensaje.style.backgroundImage = "none";
        }
        else{
            mensaje.value = "No se ha detectado ningún texto a desencriptar."
            mensaje.style.backgroundImage = "url('Imagenes/error2.jpg')";
            textArea.value = "Por favor, ingrese el texto que desea desencriptar.";
        }
        
    }

    

/***************Copiar texto encriptado**************/

function copiar(texto){
    const textoCopiado = mensaje.value
    navigator.clipboard.writeText(textoCopiado);
}

/****************Limpiar************ */

function limpiar(){
    textArea.value="";
    mensaje.value="";
    mensaje.style.backgroundImage = "url(Imagenes/hacker-friend2.gif)";
    mensaje.style.backgroundPosition = "center";
    mensaje.style.backgroundSize = "50%";
    console.log("Saludos")
}
