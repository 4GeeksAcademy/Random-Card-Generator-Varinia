import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function formarCartaAleatoria() {
  //write your code here
  let numero = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
  let pinta = ['♦', '♥', '♠', '♣'];
    let randomNumero = numero[Math.floor(Math.random() * numero.length)];
    let randomPinta = pinta[Math.floor(Math.random() * pinta.length)];
    document.getElementsByClassName('card').innerText=`${randomNumero} ${randomPinta}`;
};


