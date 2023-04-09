const form = document.querySelector('form'); 
const nombreInput = document.querySelector('#nombre'); 
const emailInput = document.querySelector('#email'); 


function validarFormulario(evento) {
  evento.preventDefault(); 
  

  if (nombreInput.value.trim() === '') {
    alert('Por favor ingrese su nombre.');
    nombreInput.focus();
    return;
  }
  

  if (emailInput.value.trim() === '') {
    alert('Por favor ingrese su correo electrónico.');
    emailInput.focus();
    return;
  }
  
 
  alert('El formulario ha sido enviado correctamente.');
  form.submit();
}


form.addEventListener('submit', validarFormulario);

