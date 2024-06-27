
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

  // Validar la fecha de inicio y de fin
  if (data.fechaInicio.isAfter(data.fechaFin, 'day')) {
    error = 'La fecha de inicio no puede ser mayor a la fecha de fin';
  } else if (data.fechaFin.isBefore(data.fechaInicio, 'day')) {
    error = 'La fecha de fin no puede ser menor a la fecha de inicio';
  }

  // Validar la hora de inicio y de fin
  if (data.horaInicio.isAfter(data.horaFin, 'minute')) {
    error = 'La hora de inicio no puede ser mayor a la hora de fin';
  } else if (data.horaFin.isBefore(data.horaInicio, 'minute')) {
    error = 'La hora de fin no puede ser menor a la hora de inicio';
  }

  return error;
};