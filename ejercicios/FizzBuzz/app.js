function ejecutar(){
    let resultado="";
    for(let x=0;x<=100; x++){
        if(x%3===0 && x%5===0){
            resultado+="FizBuzz"+"\n";
        }else if(x%3===0){
            resultado+="Fizz"+"\n";
        }else if(x%5===0){
            resultado+="Buzz"+"\n";
        }else{
            resultado+=x+"\n";
        }
    }
    document.getElementById("contenedor").value=resultado;
}