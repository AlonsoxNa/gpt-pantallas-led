import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_URL;

export const login = async ({email, password}) => {
  try {
    const response = await axios.post(`${BASE_URL}/identidad/login`, {
      email, 
      contrasena: password
    });

    if (response.status === 200) {
      return {success: true, data: {
        nombre: response.data.nombre,
        token: response.data.token,
        id: response.data.id
      }};
    }
    return {success: false, message: response.data.message};

  } catch (error) {
    return {success: false, message: error.response.message};
  }
}