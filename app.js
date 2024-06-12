window.addEventListener('DOMContentLoaded', () => {
    const footerPlaceholder = document.getElementById('footer-placeholder');

    // Realiza una solicitud para cargar el contenido del footer
    fetch('footer.html')
        .then(response => response.text())
        .then(html => {
            footerPlaceholder.innerHTML = html;
        })
        .catch(error => console.error('Error al cargar el footer:', error));
});
