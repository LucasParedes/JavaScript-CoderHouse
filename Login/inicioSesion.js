function iniciarSesion(event) {
  event.preventDefault();

  const loginForm = event.target;
  const usuario = loginForm.username.value;
  const contrasena = loginForm.password.value;
  const errorP = document.querySelector('#error-message');

  const request = window.indexedDB.open('registroDB', 1);

  request.onsuccess = function(event) {
    const db = event.target.result;
    const transaction = db.transaction('registro', 'readonly');
    const objectStore = transaction.objectStore('registro');

    const getRequest = objectStore.get(usuario);

    getRequest.onsuccess = function(event) {
      const registro = event.target.result;
      if (registro && registro.contrasena === contrasena) {
        // Inicio de sesión exitoso
        // Redirigir a la página principal después del inicio de sesión
        window.location.href = '../Pagina/pagPrincipal.html';
      } else {
        // Inicio de sesión fallido
        errorP.innerHTML = 'Usuario o contraseña incorrectos';
      }
    };

    getRequest.onerror = function(event) {
      console.error('Error al obtener el registro en IndexedDB', event.target.error);
    };
  };

  request.onerror = function(event) {
    console.error('Error al abrir/crear la base de datos', event.target.error);
  };
}

document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('login-form');
  loginForm.addEventListener('submit', iniciarSesion);
});
