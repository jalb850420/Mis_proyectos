

function factorial(){
    let resultado=1;
    num=document.getElementById("text_input").value;
    concat="";
    for(let x=1;x<=num;x++){
        x == num ? concat+=x+"=" : concat+=x+"x"; 
        resultado=x*resultado;
    }
    document.getElementById("resultado").innerText=concat+" "+resultado;
    return
}

function calcular(){
    setTimeout(factorial, 100);
}

