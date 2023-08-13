document.addEventListener('DOMContentLoaded', function() {
    const boton = document.querySelector('button');
    const divElement = document.querySelector('div');

    boton.addEventListener('click', function(event) {
        saludar(event);
    });

    divElement.addEventListener('click', function(event) {
        event.stopPropagation();
        alert('Hola! Soy el div');
    });
});

function saludar(event) {
    event.stopPropagation();
    alert('Hola!');
}
