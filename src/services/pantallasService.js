import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL;

export const obtenerPantallasApi = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/pantalla`);

    if (response.status === 200) {
      return { success: true, data: response.data };
    }
    return { success: false, message: response.data.message, data: [] };
  } catch (error) {

    if ( error.response ) {
      
      return { success: false, message: error.response.message, data: [] };
    } else if ( error.request ) {

      return { success: false, message: "No se ha podido conectar con el servidor", data: [] };
    }

    return { success: false, message: "No se pudo obtener las pantallas", data: [] };
  }
};

export const enviarMensajeDefecto = async (
  id_pantalla,
  id_usuario,
  mensaje,
  animacion
) => {
  try {
    const response = await axios.patch(
      `${BASE_URL}/pantalla/enviar-mensaje?id=${id_usuario}`,
      {
        id: id_pantalla,
        mensaje,
        animacion,
      }
    );

    if (response.status === 200) {
      return {
        success: true,
        message: "Se actualizó correctamente el mensaje",
      };
    }
    return { success: false, message: "No se pudo enviar el mensaje" };
  } catch (error) {

    if ( error.response ) {
      if (error.response.status === 404) {
        
        return { success: false, message: "No se encontró la pantalla" };
      }
    } else if ( error.request ) {
        
      return { success: false, message: "No se pudo conectar con el servidor" };
    }

    return { success: false, message: "No se pudo enviar el mensaje" };
  }
};

export const enviarMensajeProgramado = async (
  id_pantalla,
  id_usuario,
  mensaje,
  animacion,
  dias,
  fecha_inicio,
  hora_inicio,
  hora_fin,
  fecha_fin
) => {
  try {
    const response = await axios.patch(
      `${BASE_URL}/pantalla/enviar-mensaje-programado?id=${id_usuario}`,
      {
        id: id_pantalla,
        mensaje,
        animacion,
        dias,
        fecha_inicio,
        hora_inicio,
        hora_fin,
        fecha_fin,
      }
    );

    if (response.status === 200) {
      return { success: true, message: "Se envió correctamente el mensaje" };
    }

    return { success: false, message: "No se pudo enviar el mensaje" };
  } catch (error) {

    if ( error.response ) {
      if (error.response.status === 404) {
        return { success: false, message: "No se encontró la pantalla" };
      } else if (error.response.status === 412) {
        return { success: false, message: "Usuario no encontrado" };
      } else if (error.response.status === 414) {
        return { success: false, message: "El usuario no tiene permisos para enviar mensajes" };
      } else if (error.response.status === 413) {
        return { success: false, message: "Ya tienes mensajes programados" };
      } else if (error.response.status === 411) {
        return { success: false, message: "Si tienes fecha de término debes tener fecha de inicio" };
      } else if ( error.response.status === 410 ) {
        return { success: false, message: "Si tienes hora de inicio debes tener fecha de inicio" };
      } else if ( error.response.status === 415) {
        return { success: false, message: "Si tienes hora de fin debes tener fecha de término" };
      } else if ( error.response.status === 416) {
        return { success: false, message: "La fecha de fin debe ser mayor a la fecha de inicio"};
      } else if (error.response.status === 417) {
        return { success: false, message: "La hora de fin debe ser mayor a la hora de inicio"};
      }
    } else if ( error.request ) {

      return { success: false, message: "No se pudo conectar con el servidor" };
    }

    return { success: false, message: "No se pudo enviar el mensaje" };
  }
};

export const crearPantalla = async (nombre) => {
  try {
    const response = await axios.post(`${BASE_URL}/pantalla/`, {
      nombre,
    });

    if (response.status === 201) {
      return { success: true, message: "Se creó correctamente la pantalla" };
    }

    return { success: false, message: "No se pudo crear la pantalla" };
  } catch (error) {

    if ( error.response ) {
      if (error.response.status === 409) {
        return { success: false, message: "Ya existe una pantalla con ese nombre" }
      }
    } else if ( error.request ) {

      return { success: false, message: "No se pudo conectar con el servidor" }
    }

    return { success: false, message: "No se pudo crear la pantalla" };
  }
};

export const borrarPantalla = async (id_pantalla) => {
  try {
    
    const response = await axios.delete(`${BASE_URL}/pantalla?id=${id_pantalla}`);

    if ( response.status === 200 ) {
      return { success: true, message: "Se borró correctamente la pantalla" };
    } else {
      return { success: false, message: "No se pudo borrar la pantalla" }
    }
  } catch (error) {

    if ( error.response ) {
      if ( error.response.status === 404 ) {
        return { success: false, message: "No se encontró la pantalla" };
      }
    } else if ( error.request ) {
      
      return { success: false, message: "No se pudo conectar con el servidor" };
    }

    return { success: false, message: "No se pudo borrar la pantalla" };
  }
}

export const borrarMensajeProgramado = async (id_usuario, pantalla_id) => {
  try {

    const response = await axios.delete(`${BASE_URL}/pantalla/cron-activos?id=${String(id_usuario)}`, {
      data: { pantalla_id: String(pantalla_id)}
    }
    )

    if ( response.status === 200 ) {
      return { success: true, message: "Se borró correctamente el mensaje programado" };
    } else if ( response.status === 204 ) {
      return { success: false, message: "No se encontró el mensaje programado" };
    } else {
      return { success: false, message: "No se pudo borrar el mensaje programado" };
    }

  } catch (error) {
    if ( error.response ) {
      if ( error.response.status === 404 ) {
        return { success: false, message: "No se encontró la pantalla" };
      } else if ( error.response.status === 412 ) {
        return { success: false, message: "Usuario no encontrado" };
      } else if ( error.response.status === 414 ) {
        return { success: false, message: "El usuario no tiene permisos para enviar mensajes" };
      } 
    } else if ( error.request ) {

      return { success: false, message: "No se pudo conectar con el servidor" };
    }

    return { success: false, message: "No se pudo borrar el mensaje programado" };
  }
}