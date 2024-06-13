import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_URL;

export const obtenerPantallasApi = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/pantalla`);

    if (response.status === 200) {
      return {success: true, data: response.data};
    }
    return {success: false, message: response.data.message, data: []};

  } catch (error) {
    return {success: false, message: error.response.message, data: []};
  }
}

export const enviarMensajeDefecto = async (id_pantalla, id_usuario, mensaje, animacion) => {

  try {
    const response = await axios.patch(`${BASE_URL}/pantalla/enviar-mensaje?id=${id_usuario}`, {
      id: id_pantalla,
      mensaje,
      animacion
    });
    
    if (response.status === 200) {
      return {success: true, message: "Se actualizó correctamente el mensaje"};
    }
    return {success: false, message: "No se pudo enviar el mensaje"};
  } catch (error) {
    if (error.response.status === 404) {
      return {success: false, message: "No se encontró la pantalla"};
    }
    return {success: false, message: "No se pudo enviar el mensaje"};
  }
};

export const enviarMensajeProgramado = async (id_pantalla, id_usuario, mensaje, animacion, dias, fecha_inicio, hora_inicio, hora_fin, fecha_fin) => {
  try {
    const response = await axios.patch(`${BASE_URL}/pantalla/enviar-mensaje-programado?id=${id_usuario}`, {
      id: id_pantalla,
      mensaje,
      animacion,
      dias,
      fecha_inicio,
      hora_inicio,
      hora_fin,
      fecha_fin
    })

    if (response.status === 200) {
      return {success: true, message: "Se envió correctamente el mensaje"};
    }

    return {success: false, message: "No se pudo enviar el mensaje"};
  } catch (error) {

    if (error.response.status === 404) {
      return {success: false, message: "No se encontró la pantalla"};
    }
    return {success: false, message: "No se pudo enviar el mensaje"};
  }
};