let estadoRunning = "apagado";
let bunny = document.getElementById("bunny");
let audioRunning = document.getElementById("running-sound");

function iniciarRunning(){
    if ( estadoRunning == "apagado"){
        estadoRunning = "encendido"
        bunny.classList.add("running")
        hacerSonido();
        console.log("Iniciar correr")
    } 
}

function detenerRunning() {
    if (estadoRunning = "apagado"){
        bunny.classList.remove("running");
        hacerSonido();
        console.log("Parar");
    }
}

function hacerSonido(){
    if ( audioRunning.paused ){
        audioRunning.play();
    } else {
        audioRunning.pause();
        audioRunning.currentTime = 0;
    }
}
