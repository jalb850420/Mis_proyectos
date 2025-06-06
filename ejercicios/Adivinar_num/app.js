function jugar() {
  let num = prompt("Digita un número!");
  if (num == null) return;

  num = parseInt(num);
  if (num === num_randon) {
    document.getElementById("contenedor").innerHTML = "¡Adivinaste! el numero era el ["+num+"]";
  } else if (num > num_randon) {
    document.getElementById("contenedor").innerHTML = "Pista: es menor";
    setTimeout(jugar, 100);
  } else {
    document.getElementById("contenedor").innerHTML = "Pista: es mayor";
    setTimeout(jugar, 100);
  }
}

let num_randon = Math.floor(Math.random() * 100) + 1;
jugar();