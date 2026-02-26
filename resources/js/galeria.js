const imagenes = [
  {
    src:"resources/album/foto1.png",
    texto:"Fue un dibujo el cual me gustó mucho hacerlo. Empece a dibujar solamente para poderlo dibujar, realmente le puse ganas, espero que te guste, tan solo es el boceto. Psdt: Está al revez, jaja.",
    fecha:"23 Febrero 2026"
  },
  {
    src:"resources/album/foto2.png",
    texto:"Este moment fue lindo, por que fueron de las primeras llamadas que hicimos, estuvimos viendo Terrifier. jiji",
    fecha:"29 Marzo 2025"
  },
  {
    src:"resources/album/foto3.png",
    texto:"Tío, te quiero muchísimo, pero no mates a toda mi familia, por favor. JAJAJA",
    fecha:"12 Septiembre 2025"
  },
  {
    src:"resources/album/foto4.png",
    texto:"Me agradas plus deluxe hyper delta premium VIP peak prime. 🧡😎😎😎",
    fecha:"1 Marzo 2025"
  },
  {
    src:"resources/album/foto5.png",
    texto:"Como siempre, todas unas iconicas, devoramos aquella vez. 🥹✨",
    fecha:"2025"
  },
  {
    src:"resources/album/foto6.png",
    texto:"En lo personal a mí me encantaron estos outfits, no dejo de pensar que mi outfit parece la chica creeper.",
    fecha:"2025"
  },
  {
    src:"resources/album/foto7.png",
    texto:"SOMOS EL DUO PLUS DELUXE, IMPARABLE COMO SIEMPRE. 🧡",
    fecha:"2025"
  }
];

const contador = document.getElementById("contador");
const grid = document.getElementById("grid");
const lightbox = document.getElementById("lightbox");
const imagenActiva = document.getElementById("imagenActiva");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const infoToggle = document.getElementById("infoToggle");
const infoBox = document.getElementById("infoBox");
const descripcionImagen = document.getElementById("descripcionImagen");
const fechaImagen = document.getElementById("fechaImagen");
const descargar = document.getElementById("descargar");

infoToggle.onclick = (e)=>{
  e.stopPropagation();
  infoBox.classList.toggle("activo");
  infoToggle.classList.toggle("activo");
};

let indiceActual = 0;

imagenes.forEach((imagen,i)=>{
  const img = document.createElement("img");
  img.src = imagen.src;   // ← aquí está la corrección
  img.onclick = ()=>abrir(i);
  grid.appendChild(img);
});

function abrir(i){
  indiceActual = i;
  imagenActiva.src = imagenes[i].src;
  descripcionImagen.textContent = imagenes[i].texto;
  fechaImagen.textContent = imagenes[i].fecha;


  lightbox.classList.add("activo");
  infoBox.classList.remove("activo");
  infoToggle.classList.remove("activo");

  actualizarControles();
}

function actualizarControles(){

  contador.textContent = (indiceActual + 1) + " / " + imagenes.length;

  // Mostrar u ocultar flechas
  prev.style.display = indiceActual === 0 ? "none" : "block";
  next.style.display = indiceActual === imagenes.length - 1 ? "none" : "block";
}

function cerrar(){
  lightbox.classList.remove("activo");
}

function mostrar(dir){
  let nuevo = indiceActual + dir;
  if(nuevo >=0 && nuevo < imagenes.length){
    abrir(nuevo);
  }
}
descargar.onclick = (e)=>{
  e.stopPropagation();
  const link = document.createElement("a");
  link.href = imagenes[indiceActual].src;
  link.download = "";
  link.click();
};

prev.onclick = (e)=>{
  e.stopPropagation();
  mostrar(-1);
};

next.onclick = (e)=>{
  e.stopPropagation();
  mostrar(1);
};

lightbox.onclick = cerrar;
imagenActiva.onclick = e=>e.stopPropagation();

