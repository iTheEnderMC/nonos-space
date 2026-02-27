const cartas = [
{
  titulo:"✨ I",
  contenido:`
  <p>Querida Nono</p>

  <p>
    Eres una de las personas más especiales para mí, eres de las 
    personas más puras, lindas tanto por fuera y por dentro, y si 
    tuviera que decir todas tus virtudes te juro que jamás terminaría
    de conocí de pura causalidad y honestamente fueron de las mejores cosas
    que me pudieron pasar. 
  </p>

  <p>
    Con el tiempo me fuí dando cuenta lo importante y especial que te has vuelto para mí
    no solo me enseñaste a querer si no también a comprender. En un mundo que es una mierda
    y pocas cosas valen la pena, tú me enseñaste a ver las cosas de una mejor manera.
  </p>
  `
},
{
  titulo:"🧡 II",
  contenido:`
  <p>
    A ver las cosas de una perspectiva diferente, y siempre estaré profundamente agradecida
    por jamás rendirte conmigo por más veces que me equivocara por más veces que cometiese
    errores, siempre estuviste para mí diciendome que si tendrías que decirmerlo 1000 veces lo harías.
  </p>

  <p>
    Eres mi bro, mi hermano, mi confidente, mi gumball, y honestamente no te cambiaría por nada.
    Gracias por todo. 
  </p>

  <p>Te quiere Keny🧡</p>
  `
}
];

const grid = document.getElementById("cartasGrid");
const lightbox = document.getElementById("cartaLightbox");
const contenido = document.getElementById("cartaContenido");
const contador = document.getElementById("cartaContador");
const prev = document.getElementById("cartaPrev");
const next = document.getElementById("cartaNext");
const cartaCerrar = document.getElementById("cartaCerrar");

let indiceActual = 0;

cartaCerrar.onclick = (e)=>{
  e.stopPropagation();
  cartaLightbox.classList.remove("activo");
};
// Crear mini cartas
cartas.forEach((carta,i)=>{
  const div = document.createElement("div");
  div.className="carta-mini";
  div.textContent = carta.titulo;
  div.onclick = ()=>abrir(i);
  grid.appendChild(div);
});

function abrir(i){
  indiceActual = i;
  contenido.innerHTML = cartas[i].contenido;
  contador.textContent = (i+1) + " / " + cartas.length;

  lightbox.classList.add("activo");

  actualizarFlechas();
}

function actualizarFlechas(){
  prev.style.display = indiceActual === 0 ? "none":"block";
  next.style.display = indiceActual === cartas.length-1 ? "none":"block";
}

function mostrar(dir){
  let nuevo = indiceActual + dir;
  if(nuevo>=0 && nuevo<cartas.length){
    abrir(nuevo);
  }
}

prev.onclick = (e)=>{
  e.stopPropagation();
  mostrar(-1);
};

next.onclick = (e)=>{
  e.stopPropagation();
  mostrar(1);
};

lightbox.onclick = ()=>lightbox.classList.remove("activo");
contenido.onclick = e=>e.stopPropagation();