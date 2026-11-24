/**let Delay = document.getElementById("ID1");
Delay.innerText = "Press me NOW";

setTimeout(function() {
  Delay.innerText = "Ouch";
}, 3000);**/
const Head = document.getElementById("IDHEAD");
Head.addEventListener("mouseover", function() {this.style.backgroundColor = "blue"});
Head.addEventListener("mouseout", function(){this.style.backgroundColor = ""});

document.getElementById("ID1").addEventListener("click", function(){document.getElementById("ID1").innertext="Ouch"});
