import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
window.onload = function() {
  //write your code here
  //llamar aleatoriamente
  let numero = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
  let randomNumero = numero[Math.floor(Math.random() * numero.length)];
  document.getElementById('number').innerText=`${randomNumero}`;
  const pinta = ['♦', '♥', '♠', '♣'];
  const iconElements = document.querySelectorAll('.icon');
  const indiceAleatorio = Math.floor(Math.random() * pinta.length);
  const pintaAleatoria = pinta[indiceAleatorio];
  iconElements.forEach(el => {
  el.textContent = pintaAleatoria;
//propiedades iconos
if (pintaAleatoria === '♦' || pintaAleatoria === '♥'){
  el.style.color= 'red';
} else {
  el.style.color= 'black';
  }
});
}


