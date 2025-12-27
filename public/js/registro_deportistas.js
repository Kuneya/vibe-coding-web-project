const disciplinas = [
  {
    categoria: "Deportes Olímpicos de Verano",
    deportes: [
      "Atletismo", "Natación", "Gimnasia artística", "Gimnasia rítmica", "Gimnasia trampolín",
      "Boxeo", "Judo", "Taekwondo", "Esgrima", "Tiro con arco", "Ciclismo en pista",
      "Ciclismo de ruta", "BMX", "Mountain Bike", "Lucha libre", "Lucha grecorromana",
      "Triatlón", "Pentatlón moderno", "Levantamiento de pesas", "Clavados", "Waterpolo",
      "Remo", "Canotaje slalom", "Canotaje sprint", "Vela", "Balonmano", "Béisbol", "Softbol",
      "Fútbol", "Baloncesto", "Baloncesto 3x3", "Voleibol", "Voleibol de playa", "Hockey sobre césped",
      "Golf", "Skateboarding", "Surf", "Escalada deportiva", "Karate", "Breaking (breakdance)"
    ]
  },
  {
    categoria: "Deportes Olímpicos de Invierno",
    deportes: [
      "Esquí alpino", "Biathlon", "Bobsleigh", "Combinado nórdico", "Curling", "Hockey sobre hielo",
      "Luge", "Patinaje artístico", "Patinaje de velocidad", "Patinaje en pista corta",
      "Salto de esquí", "Snowboard", "Skeleton", "Esquí de fondo", "Freestyle skiing"
    ]
  },
  {
    categoria: "Deportes Paralímpicos",
    deportes: [
      "Atletismo paralímpico", "Natación paralímpica", "Boccia", "Goalball", "Judo paralímpico",
      "Remo adaptado", "Tiro paraolímpico", "Esgrima en silla de ruedas", "Fútbol 5 para ciegos",
      "Fútbol 7", "Baloncesto en silla de ruedas", "Rugby en silla de ruedas",
      "Ciclismo adaptado", "Tenis en silla de ruedas", "Powerlifting", "Tiro con arco adaptado",
      "Voleibol sentado", "Equitación paraecuestre", "Esquí alpino adaptado", "Snowboard adaptado"
    ]
  },
  {
    categoria: "Otros Deportes Reconocidos",
    deportes: [
      "Motocross", "Automovilismo", "Karting", "Artes marciales mixtas (MMA)", "Ajedrez",
      "Parkour", "Pesca deportiva", "Padel", "Esquí acuático", "Wakeboard", "Escalada de velocidad",
      "E-sports", "Ultimate frisbee", "Polo", "Cricket", "Lacrosse", "Kickboxing", "Sambo",
      "Sumo", "Muay Thai", "Bolos", "Billar deportivo", "Pelota vasca", "Roller derby"
    ]
  }
];

const paisesHispanohablantes = [
  "Argentina", "Bolivia", "Chile", "Colombia", "Costa Rica", "Cuba", "Ecuador",
  "El Salvador", "Guatemala", "Honduras", "México", "Nicaragua",
  "Panamá", "Paraguay", "Perú", "Puerto Rico", "República Dominicana",
  "Uruguay", "Venezuela", "Guinea Ecuatorial"
];

// Llenar el select de país
const selectPais = document.getElementById('pais');
paisesHispanohablantes.forEach(pais => {
  const option = document.createElement('option');
  option.value = pais;
  option.textContent = pais;
  selectPais.appendChild(option);
});



// Activar Tooltips (Bootstrap 5)
document.addEventListener('DOMContentLoaded', function () {
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl);
    });
  });

// Agregar opciones al <select>
const select = document.getElementById('disciplina');

disciplinas.forEach(grupo => {
  const optgroup = document.createElement('optgroup');
  optgroup.label = grupo.categoria;

  grupo.deportes.forEach(deporte => {
    const option = document.createElement('option');
    option.value = deporte;
    option.textContent = deporte;
    optgroup.appendChild(option);
  });

  select.appendChild(optgroup);
});



$('#pais').select2({
  placeholder: "Selecciona tu país",
  allowClear: true,
  width: '100%'
});


// Activar Select2
$(document).ready(function() {
  $('#disciplina').select2({
    placeholder: "Selecciona tu disciplina",
    allowClear: true,
    width: '100%'
  });
});


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



// Validación progresiva campo por campo, excluyendo confirm-password
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

// Validación en tiempo real de contraseña principal
document.getElementById("password").addEventListener("input", function () {
  const value = this.value;
  const strength = document.getElementById("password-strength");

  const requisitos = [
    /[A-Z]/.test(value),       // al menos una mayúscula
    /[a-z]/.test(value),       // al menos una minúscula
    /\d/.test(value),          // al menos un número
    /[\W_]/.test(value),       // al menos un símbolo o carácter especial
    value.length >= 8          // mínimo 8 caracteres
  ];

  const esValida = requisitos.every(r => r);

  if (esValida) {
    strength.textContent = "✅ Contraseña válida";
    strength.classList.add('password-valid');
    strength.classList.remove('password-invalid');
    this.classList.add('is-valid');
    this.classList.remove('is-invalid');
    this.setCustomValidity(""); // para que el formulario no lo bloquee
  } else {
    strength.textContent = "Debe tener como mínimo 8 caracteres, con mayúsculas, minúsculas, número y símbolo.";
    strength.classList.remove('password-valid');
    strength.classList.add('password-invalid');
    this.classList.add('is-invalid');
    this.classList.remove('is-valid');
    this.setCustomValidity("La contraseña no cumple con los requisitos");
  }
});


// Validación en tiempo real para confirmar contraseña
document.getElementById("confirm-password").addEventListener("input", function () {
  const pass1 = document.getElementById("password");
  const pass2 = this;
  const message = document.getElementById("confirm-password-message");

  const contrasenaValida = pass1.checkValidity();

  if (pass2.value === "") {
    // Si está vacío, limpia todo
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


//Validación contraseñas iguales al enviar
form.addEventListener("submit", function (e) {
  const pass1 = document.getElementById("password");
  const pass2 = document.getElementById("confirm-password");

  if (pass1.value !== pass2.value || !pass1.checkValidity()) {
    e.preventDefault();
    pass2.setCustomValidity("Las contraseñas no coinciden o la contraseña principal no es válida");
    pass2.reportValidity();
  } else {
    pass2.setCustomValidity("");
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


form.addEventListener("submit", function (e) {
  if (!form.checkValidity()) {
    e.preventDefault(); // ⚠️ Detiene el envío, pero NO borra los datos
    e.stopPropagation(); // Detiene propagación si hay otro listener
    form.classList.add('was-validated'); // Bootstrap muestra feedback
  }
});

