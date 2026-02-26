const imagenes = [
  {
    src:"resources/album/foto1.png",
    texto:"Fue un dibujo el cual me gustó mucho hacerlo. Empece a dibujar solamente para poderlo dibujar, realmente le puse ganas, espero que te guste, tan solo es el boceto. Psdt: Está al revez, jaja.",
    fecha:"12 Febrero 2026"
  },
  {
    src:"resources/album/foto2.png",
    texto:"Ese día fue inolvidable ✨",
    fecha:"28 Febrero 2026"
  },
  {
    src:"resources/album/foto3.jpg",
    texto:"Recuerdo bonito 📷",
    fecha:"10 Marzo 2026"
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


