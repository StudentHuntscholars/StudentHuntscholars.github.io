let Delay= document.getElementById("ID1")
Delay.innerText = "Press me NOW";

setTimeout(function() {
  Delay.innertext = "Ouch";}, 3000);
