import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_URL;

export const login = async ({email, password}) => {
  console.log(BASE_URL)
  try {
    const response = await axios.post(`${BASE_URL}/auth/login`, {email, password});

    if (response.status === 200) {
      return {success: true, data: response.data};
    }
    return {success: false, message: response.data.message};

  } catch (error) {
    return {success: false, message: error.response.message};
  }
}