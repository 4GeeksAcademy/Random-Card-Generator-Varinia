import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
window.onload = function () {
  //write your code here
  //llamar aleatoriamente
  function generarCarta() {
    const numero = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const pinta = ['♦', '♥', '♠', '♣'];
    let randomNumero = numero[Math.floor(Math.random() * numero.length)];
    const indiceAleatorio = Math.floor(Math.random() * pinta.length);
    document.getElementById('number').innerText = `${randomNumero}`;
    const parrafo = document.getElementById('number');
    parrafo.style.textAlign = 'center';
    const iconElements = document.querySelectorAll('.icon');
    const pintaAleatoria = pinta[indiceAleatorio];
    iconElements.forEach(el => {
      el.textContent = pintaAleatoria;
      el.style.color = (pintaAleatoria === '♦' || pintaAleatoria === '♥') ? 'red' : 'black';
    });
  }
  generarCarta();
  const botonRecargar = document.getElementById('btn-recargar');
  botonRecargar.addEventListener('click', generarCarta);
  setTimeout(generarCarta, 10000);
}


