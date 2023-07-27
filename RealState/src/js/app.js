const imagenes = document.querySelectorAll('.propiedad__img');

window.addEventListener('scroll', () => {

    const scroll = this.scrollY / -20;

    imagenes.forEach((imagen) => {
        imagen.style.backgroundPositionY = `${scroll}px`;
    });
});