const cartas = [
{
  titulo:"Carta 1",
  contenido:`
  <p>Guayaquil, 14 de febrero de 2026</p>

  <p>Querida persona especial,</p>

  <p>
  Hoy quiero escribirte algo más que unas simples palabras.
  Quiero dejar guardado en esta carta un recuerdo,
  una emoción y un pedacito de lo que siento.
  </p>

  <p>
  A veces las palabras no alcanzan,
  pero aún así intento que cada línea
  tenga algo sincero.
  </p>

  <p>Con cariño,<br>Ender</p>
  `
},
{
  titulo:"Carta 2",
  contenido:`
  <p>28 de febrero de 2026</p>

  <p>Hola,</p>

  <p>
  Este es otro mensaje largo, tipo carta real.
  Puedes escribir bastante texto aquí,
  varios párrafos, recuerdos, historias...
  </p>

  <p>
  Lo importante es que se vea natural,
  como una carta escrita en papel.
  </p>

  <p>Siempre,<br>Ender</p>
  `
},
{
  titulo:"Carta 3",
  contenido:`
  <p>10 de marzo de 2026</p>

  <p>Para ti,</p>

  <p>
  Cada carta puede tener su propio estilo,
  su propia fecha y su propia despedida.
  </p>

  <p>
  Aquí puedes escribir algo aún más largo
  si quieres llenar toda la página.
  </p>

  <p>Con afecto,<br>Ender</p>
  `
}
];

const grid = document.getElementById("cartasGrid");
const lightbox = document.getElementById("cartaLightbox");
const contenido = document.getElementById("cartaContenido");
const contador = document.getElementById("cartaContador");
const prev = document.getElementById("cartaPrev");
const next = document.getElementById("cartaNext");

let indiceActual = 0;

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