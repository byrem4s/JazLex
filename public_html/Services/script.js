const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');


navToggle.addEventListener('click', () =>{
    navMenu.classList.toggle('nav-menu_visible');
});

document.addEventListener('DOMContentLoaded', function() {
    // Seleccionar el botón
    var botonCopiar = document.getElementById('btn1');
  
    // Agregar un evento de clic al botón
    botonCopiar.addEventListener('click', function() {
      // Texto que deseas copiar
      var textoACopiar = "rnizamuddin@jazlexcs.com";
  
      // Crear un elemento de textarea para almacenar el texto temporalmente
      var textareaTemp = document.createElement('textarea');
      textareaTemp.value = textoACopiar;
  
      // Agregar el textarea al DOM
      document.body.appendChild(textareaTemp);
  
      // Seleccionar el texto dentro del textarea
      textareaTemp.select();
  
      // Copiar el texto seleccionado al portapapeles
      document.execCommand('copy');
  
      // Eliminar el textarea temporal
      document.body.removeChild(textareaTemp);
  
      // Alerta para indicar que el texto ha sido copiado
      alert('Texto copiado');
    });
  });
  document.addEventListener('DOMContentLoaded', function() {
    // Seleccionar el botón
    var botonCopiar = document.getElementById('btn2');
  
    // Agregar un evento de clic al botón
    botonCopiar.addEventListener('click', function() {
      // Texto que deseas copiar
      var textoACopiar = "365-341-0189";
  
      // Crear un elemento de textarea para almacenar el texto temporalmente
      var textareaTemp = document.createElement('textarea');
      textareaTemp.value = textoACopiar;
  
      // Agregar el textarea al DOM
      document.body.appendChild(textareaTemp);
  
      // Seleccionar el texto dentro del textarea
      textareaTemp.select();
  
      // Copiar el texto seleccionado al portapapeles
      document.execCommand('copy');
  
      // Eliminar el textarea temporal
      document.body.removeChild(textareaTemp);
  
      // Alerta para indicar que el texto ha sido copiado
      alert('Texto copiado');
    });
  });