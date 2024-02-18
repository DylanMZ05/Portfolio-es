document.addEventListener('DOMContentLoaded', function() {
    var checkbox = document.querySelector('.check');
    var link = document.querySelector('.link-style');
    
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Evitar la acción predeterminada del enlace
        checkbox.checked = !checkbox.checked; // Alternar el estado del checkbox
        // Aquí puedes agregar más acciones si lo deseas, como cambiar estilos o redirigir
    });
});