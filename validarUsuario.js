function validarUsuario(nombre, edad) {
  if (!nombre || typeof nombre !== 'string') {
    throw new Error('Nombre inválido');
  }

  if (edad < 0 || edad > 120) {
    throw new Error('Edad inválida');
  }

  if (edad >= 18) {
    return 'adulto';
  } else {
    return 'menor';
  }
}

module.exports = validarUsuario;