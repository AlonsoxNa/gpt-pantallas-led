import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_URL;

export const obtenerUsuariosApi = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/usuario`);

    if (response.status === 200) {
      return {success: true, data: response.data};
    }
    return {success: false, message: response.data.message, data: []};

  } catch (error) {
    return {success: false, message: error.response.message, data: []};
  }
}