import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
let who = ['mi café','mi gato','mi despertador','mi cama'];
let action = ['no estaba listo','estaba muy apapachable','no sonó','estaba muy suave'];
let what = ['y no pude beber','y tuve que acariciarlo','y no me desperté','y me atrapó'];
let when = ['esta mañana.','toda la mañana.','a la hora.','todo el fin de semana incluyendo hoy lunes.'];

let container = document.getElementById('excuse');
container.innerHTML = ''; 

let i = Math.floor(Math.random() * who.length); // prueba de índice aleatorio

let excuse = who[i] + ' ' + action[i] + ' ' + what[i] + ' ' + when[i];

let p = document.createElement('p');
p.textContent = excuse;
container.appendChild(p);

console.log("Frase aleatoria mostrada:", excuse);
};