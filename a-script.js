let reproducir = true;
const audio = document.getElementById('myAudio');

document.getElementById("openBtn").addEventListener("click", function() {
    const card = document.querySelector('.card');
    card.classList.toggle('open');
    this.textContent = card.classList.contains('open') ? "Cerrar Carta" : "Abrir Carta";
    if(reproducir){
        reproducir=false;
        audio.play();
    }
  });
  
audio.addEventListener('ended', function() {
    audio.currentTime = 0; 
    audio.play(); 
});