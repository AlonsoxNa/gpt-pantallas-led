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
    return {success: false, message: error.response.message, data: []};
  }
}