document.querySelectorAll(".menu .item").forEach(boton=>{
  boton.addEventListener("click", function(){

    const destino = this.dataset.link;

    document.body.classList.add("fade-out");

    setTimeout(()=>{
      window.location.href = destino;
    }, 400);
  });
});