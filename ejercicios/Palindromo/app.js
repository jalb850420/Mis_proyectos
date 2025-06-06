
function validar(){
    texto=document.getElementById("text_ingresado").value;
    texto2=texto.replace(/\s+/g, "")
    texto_invertido=texto2.split("").reverse().join("");
    if(texto2==texto_invertido){
        document.getElementById("resultado").innerText = "Es palindromo?: Si!";
    }else{
        document.getElementById("resultado").innerText = "Es palindromo?: No!";
    }
}