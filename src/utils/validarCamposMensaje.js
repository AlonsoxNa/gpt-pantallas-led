export const validarCampos = (data) => {
  let error = "";

  if (!data.mensaje) {
    error = 'El mensaje es obligatorio';
  } else if (data.mensaje.length < 3) {
    error = 'El mensaje debe tener al menos 3 caracteres';
  } else if (data.mensaje.length > 50) {
    error = 'El mensaje debe tener menos de 50 caracteres';
  } else if (data.mensaje.includes('&')) {
    error = 'El mensaje no puede contener el caracter &';
  }
  return error;
};