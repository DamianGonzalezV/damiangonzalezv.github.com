
// Obtener los elementos de la clase .close

// Recorrerlos

// Añadir un elemento click a cada uno de ellos

let links = document.querySelectorAll(".close");

links.forEach(function (link) {


    link.addEventListener('click', function (ev) {
        ev.preventDefault();
        let content = document.querySelector('.content');

        // quitar las clases de animación
        content.classList.remove("animate__slideInLeft");
        content.classList.remove("animate__animated");

        // agregar clases de salida 
        content.classList.add("animate__fadeOutUp");
        content.classList.add("animate__animated");

        // regresar 
        setTimeout(function () {
            location.href = "file:///C:/Users/Jonathan/Documents/GitHub/DamianGonzalezV.github.com/boletines/index.html";
        }, 700);

        console.log("can't get out")

        return false;

    });
});






