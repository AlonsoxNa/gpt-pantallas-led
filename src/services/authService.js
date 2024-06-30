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

    return {success: false, message: "Ha ocurrido un error"};
  } catch (error) {
    
    if (error.response) {
      if (error.response.status === 401 | error.response.status === 404) {
        return { success: false, message: "Credenciales incorrectas"}
      }

      return { success: false, message: "Ha ocurrido un error" };
    } else if ( error.request ) {
      return { success: false, message: "No se ha podido conectar con el servidor" };
    } 
    
    return { success: false, message: "Ha ocurrido un error" };
  }
}

export const registerUser = async ({email, password, name}) => {
    try {
      const response = await axios.post(`${BASE_URL}/usuario/registrar`, {
        email,
        contrasena: password,
        nombre_completo: name
      });
  
      if (response.status === 201) {
        return { success: true, data: response.data };
      }
  
      return { success: false, message: "Ha ocurrido un error" };
    } catch (error) {
  
      if ( error.response ) {
        if (error.response.status === 400) {
          return { success: false, message: "Datos inválidos"};
        } else if (error.response.status === 409) {
          return { success: false, message: "El usuario ya existe" };
        }
        return { success: false, message: "Ha ocurrido un error" };
      } else if ( error.request ) {
        return { success: false, message: "No se ha podido conectar con el servidor" };
      }
  
      return { success: false, message: "Ha ocurrido un error" };
    }
  }
