const emailInput = document.getElementById('email');
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

emailInput.addEventListener('input', function () {
  if (emailRegex.test(emailInput.value)) {
    emailInput.classList.remove('is-invalid');
    emailInput.classList.add('is-valid');
  } else {
    emailInput.classList.remove('is-valid');
    emailInput.classList.add('is-invalid');
  }
});

const form = document.querySelector('form');
const campos = form.querySelectorAll('input, select, textarea');

campos.forEach(campo => {
  if (campo.id !== "confirm-password") {
    campo.addEventListener('blur', () => {
      if (!campo.checkValidity()) {
        campo.classList.add('is-invalid');
        campo.classList.remove('is-valid');
      } else {
        campo.classList.remove('is-invalid');
        campo.classList.add('is-valid');
      }
    });
  }
});

// Validación de contraseña principal
document.getElementById("password").addEventListener("input", function () {
  const value = this.value;
  const strength = document.getElementById("password-strength");

  const requisitos = [
    /[A-Z]/.test(value),
    /[a-z]/.test(value),
    /\d/.test(value),
    /[\W_]/.test(value),
    value.length >= 8
  ];

  const esValida = requisitos.every(r => r);

  if (esValida) {
    strength.textContent = "✅ Contraseña válida";
    strength.classList.add('password-valid');
    strength.classList.remove('password-invalid');
    this.classList.add('is-valid');
    this.classList.remove('is-invalid');
    this.setCustomValidity("");
  } else {
    strength.textContent = "Debe tener como mínimo 8 caracteres, con mayúsculas, minúsculas, número y símbolo.";
    strength.classList.remove('password-valid');
    strength.classList.add('password-invalid');
    this.classList.add('is-invalid');
    this.classList.remove('is-valid');
    this.setCustomValidity("La contraseña no cumple con los requisitos");
  }
});

// Confirmación de contraseña
document.getElementById("confirm-password").addEventListener("input", function () {
  const pass1 = document.getElementById("password");
  const pass2 = this;
  const message = document.getElementById("confirm-password-message");

  const contrasenaValida = pass1.checkValidity();

  if (pass2.value === "") {
    pass2.classList.remove('is-valid', 'is-invalid');
    pass2.setCustomValidity("");
    message.textContent = "";
    message.classList.remove('text-success', 'text-danger');
  } else if (pass1.value === pass2.value && contrasenaValida) {
    pass2.classList.add('is-valid');
    pass2.classList.remove('is-invalid');
    pass2.setCustomValidity("");
    message.textContent = "✅ Las contraseñas coinciden";
    message.classList.add('text-success');
    message.classList.remove('text-danger');
  } else {
    pass2.classList.add('is-invalid');
    pass2.classList.remove('is-valid');
    pass2.setCustomValidity("Contraseña incorrecta");
    message.textContent = "❌ Las contraseñas no coinciden";
    message.classList.add('text-danger');
    message.classList.remove('text-success');
  }
});

// Mostrar/ocultar contraseñas
function togglePasswordVisibility(idInput, idBtn) {
  const input = document.getElementById(idInput);
  const btn = document.getElementById(idBtn);
  btn.addEventListener('click', () => {
    const isPassword = input.type === 'password';
    input.type = isPassword ? 'text' : 'password';
    btn.querySelector('i').classList.toggle('bi-eye-fill');
    btn.querySelector('i').classList.toggle('bi-eye-slash-fill');
  });
}

togglePasswordVisibility('password', 'toggle-password');
togglePasswordVisibility('confirm-password', 'toggle-confirm-password');

// Validación final al enviar
form.addEventListener("submit", function (e) {
  const pass1 = document.getElementById("password");
  const pass2 = document.getElementById("confirm-password");

  if (!form.checkValidity() || pass1.value !== pass2.value || !pass1.checkValidity()) {
    e.preventDefault();
    e.stopPropagation();

    if (pass1.value !== pass2.value || !pass1.checkValidity()) {
      pass2.setCustomValidity("Las contraseñas no coinciden o la contraseña principal no es válida");
      pass2.reportValidity();
    }

    form.classList.add('was-validated');
  } else {
    pass2.setCustomValidity("");
  }
});

// Activar tooltips de Bootstrap
document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach(el => {
  new bootstrap.Tooltip(el);
});
