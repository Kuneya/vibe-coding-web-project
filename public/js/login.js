const form = document.querySelector("form");
    const email = document.getElementById("email");
    const password = document.getElementById("password");

    form.addEventListener("submit", function (e) {
      if (!form.checkValidity()) {
        e.preventDefault();
        e.stopPropagation();
      }
      form.classList.add("was-validated");
    });

    document.getElementById("toggle-password").addEventListener("click", function () {
      const input = document.getElementById("password");
      const icon = this.querySelector("i");
      const isPassword = input.type === "password";
      input.type = isPassword ? "text" : "password";
      icon.classList.toggle("bi-eye-fill");
      icon.classList.toggle("bi-eye-slash-fill");
    });

document.addEventListener('DOMContentLoaded', () => {
    const enlaceRegistro = document.getElementById('mostrar-registro');
    const seccionRegistro = document.getElementById('registro-seccion');

    if (enlaceRegistro && seccionRegistro) {
      enlaceRegistro.addEventListener('click', (e) => {
        e.preventDefault();
        seccionRegistro.style.display = 'block';       // Mostrar sección
        enlaceRegistro.style.display = 'none';         // Opcional: ocultar el enlace
        window.scrollTo({ top: seccionRegistro.offsetTop, behavior: 'smooth' }); // Opcional: hacer scroll
      });
    }
  });
