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

    if ( error.response ) {

      return {success: false, message: error.response.message, data: []};
    } else if ( error.request ) {
      
      return { success: false, message: "No se pudo conectar con el servidor", data: [] };
    }

    return { success: false, message: "No se pudo obtener los usuarios", data: [] };
  }
}

export const crearUsuario = async ({email, nombre, password}) => {
  try {
    
    const response = await axios.post(`${BASE_URL}/usuario/registrar`, {
      email,
      nombre_completo: nombre,
      contrasena: password
    })

    if ( response.status === 201 ) {
      return { success: true, message: "Usuario creado correctamente" };
    }

    return { success: false, message: "No se pudo crear el usuario" };
  } catch (error) {

    if ( error.response ) {
      if ( error.response.status === 409 ) {
        return { success: false, message: "El correo ya está registrado" };
      }
    } else if ( error.request ) {
      
      return { success: false, message: "No se pudo conectar con el servidor" };
    }
    
    return {success: false, message: "No se pudo crear el usuario"};
  }
}