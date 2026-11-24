let Delay = document.getElementById("ID1");
Delay.innerText = "Press me NOW";

setTimeout(function() {
  Delay.innerText = "Ouch";
}, 3000);
const Head = document.getElementById("IDHEAD");
