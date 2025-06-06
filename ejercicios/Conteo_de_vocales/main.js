function validacion(){
    // alert("Vamos bien");
    let cont=0;
    miInput = document.getElementById('MyInput').value;
    document.getElementById('MyInput').value = ""
    document.getElementById("Resultado").textContent = miInput;



    for(let i in miInput){
        if((miInput[i].toLowerCase() == "a") || (miInput[i].toLowerCase() == "e")|| (miInput[i].toLowerCase() == "i")|| (miInput[i].toLowerCase() == "o")|| (miInput[i].toLowerCase() == "u")){
            cont+=1;
        }
    }
    document.getElementById("Resultado").textContent = "La palabra o frase ingresada ["+miInput+"] tiene "+ cont +" vocales"
}