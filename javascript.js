// Obtén una referencia a los enlaces "Biografía" y "Contacto" y a los contenidos correspondientes
const aboutLink = document.getElementById('about-link');
const aboutContent = document.getElementById('about-content');
const contactLink = document.getElementById('contact-link');
const contactContent = document.getElementById('contact-content');

// Función para mostrar u ocultar contenido
function toggleContent(content) {
    if (content.style.display === 'none' || content.style.display === '') {
        content.style.display = 'block'; // Muestra el contenido
    } else {
        content.style.display = 'none'; // Oculta el contenido
    }
}

// Agrega event listeners para los enlaces "Biografía" y "Contacto"
aboutLink.addEventListener('click', function (event) {
    event.preventDefault(); // Evita que el enlace redirija a una nueva página
    toggleContent(aboutContent); // Muestra u oculta el contenido de la biografía
});

contactLink.addEventListener('click', function (event) {
    event.preventDefault(); // Evita que el enlace redirija a una nueva página
    toggleContent(contactContent); // Muestra u oculta el contenido de contacto
});
