// JavaScript para mostrar el submenú al hacer clic en móviles
const menuItems = document.querySelectorAll('.submenu');

menuItems.forEach(item => {
    item.addEventListener('click', function (e) {
        // Previene el comportamiento de enlace por defecto
        e.preventDefault();
        
        // Togglear el submenú
        const submenu = item.querySelector('.submenu-items');
        submenu.style.display = (submenu.style.display === 'block') ? 'none' : 'block';
    });
});
