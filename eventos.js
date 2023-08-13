function saludar(event) {
    alert('Hola!');
    event.stopPropagation();
}

document.addEventListener('DOMContentLoaded', function() {
    const divElement = document.querySelector('div');

    divElement.addEventListener('click', function() {
        alert('Hola! Soy el div');
    });
});
