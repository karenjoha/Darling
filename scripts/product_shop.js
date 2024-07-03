var modal = document.getElementById("cart-modal");

// Obtener el botón que abre el modal
var btn = document.querySelector(".header__buttons button:nth-child(2)");

// Obtener el <span> que cierra el modal
var span = document.querySelector(".close-btn");

// Cuando el usuario haga clic en el botón, abrir el modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// Cuando el usuario haga clic en <span> (x), cerrar el modal
span.onclick = function() {
    modal.style.display = "none";
}

// Cuando el usuario haga clic en cualquier lugar fuera del modal, cerrarlo
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

