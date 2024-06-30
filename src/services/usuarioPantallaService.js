import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL;

export const getPantallasUsuarioApi = async (id_usuario) => {
  try {
    const response = await axios.get(`${BASE_URL}/usuario-pantalla/asociacion-by-usuario-todas?id=${id_usuario}`);

    if (response.status === 200) {
      return {success: true, data: response.data};
    }
    return {success: false, message: "Error al obtener las pantallas del usuario", data: []};

  } catch (error) {

    if ( error.response ) {
      
      return {success: false, message: error.response.message, data: []};
    } else if ( error.request ) {

      return { success: false, message: "No se pudo conectar con el servidor", data: [] };
    }

    return { success: false, message: "Ha ocurrido un error" };
  }
}

export const asociarPantallaUsuario = async (usuario_id, pantalla_id) => {
  try {
    const response = await axios.post(`${BASE_URL}/usuario-pantalla/`, {
      usuario_id,
      pantalla_id
    })

    if (response.status === 201) {
      return { success: true, message: "Pantalla asociada correctamente" };
    }
    return { success: false, message: "Error al asociar la pantalla" };
  } catch (error) {

    if ( error.response ) {
      if (error.response.status === 409) {
        return { success: false, message: "Ya existe la asociación" };
      }
    } else if ( error.request ) {

      return { success: false, message: "No se pudo conectar con el servidor" };
    }

    return { success: false, message: "Ha ocurrido un error" };
  }
}

export const desasociarPantallaUsuario = async (usuario_id, pantalla_id) => {
  try {
    
    const response = await axios.delete(`${BASE_URL}/usuario-pantalla/`, {
        data: {
          pantalla_id,
          usuario_id
        }
      });
      

    if ( response.status === 200 ) {
      return { success: true, message: "Pantalla desasociada correctamente" }
    }

    return { success: false, message: "Ha ocurrido un error al desasociar"}
  } catch (error) {
    
    if ( error.response ) {
      if ( error.response.status === 409 ) {
        return { success: false, message: "No existe la asociación" };
      }
    } else if ( error.request ) {

      return { success: false, message: "No se pudo conectar con el servidor" }
    }

    return { success: false, message: "Ha ocurrido un error al desasociar" };
  }
};