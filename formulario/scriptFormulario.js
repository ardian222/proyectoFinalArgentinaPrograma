function validarFormulario() {
    var usuario = document.getElementById("usuario").value;
    var apellido = document.getElementById("apellido").value;
    var contrasena = document.getElementById("contrasena").value;
    var repetirContrasena = document.getElementById("repetir-contrasena").value;
    var correoElectronico = document.getElementById("correo-electronico").value;
    var telefono = document.getElementById("telefono").value;
  
    var regexUsuario = /^[a-zA-Z0-9_-]{4,16}$/;
    if (!regexUsuario.test(usuario)) {
      alert("El nombre de usuario debe tener entre 4 y 16 caracteres alfanuméricos, guiones bajos o guiones.");
      return false;
    }
  
    var regexApellido = /^[a-zA-Z ]{2,30}$/;
    if (!regexApellido.test(apellido)) {
      alert("El apellido debe tener entre 2 y 30 caracteres alfabéticos y no debe contener números.");
      return false;
    }
  
    var regexContrasena = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    if (!regexContrasena.test(contrasena)) {
      alert("La contraseña debe tener entre 6 y 20 caracteres y contener al menos una letra mayúscula, una letra minúscula y un número.");
      return false;
    }
  
    if (contrasena !== repetirContrasena) {
      alert("Las contraseñas no coinciden.");
      return false;
    }
  
    var regexCorreoElectronico = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexCorreoElectronico.test(correoElectronico)) {
      alert("El correo electrónico no es válido.");
      return false;
    }
  
    var regexTelefono = /^\d{10}$/;
    if (!regexTelefono.test(telefono)) {
      alert("El número de teléfono debe tener 10 dígitos.");
      return false;
    }
  
    return true; // para enviar el formulario si la validación es exitosa
  }
  