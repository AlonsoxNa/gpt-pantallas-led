import { useEffect, useState } from 'react';
import { obtenerPantallasApi } from '../services/pantallasService';

export const usePantallas = () => {

  const [ isLoading, setIsLoading] = useState(true);
  const [pantallas, setPantallas] = useState([]);


  const obtenerPantallas = async () => {
    setIsLoading(true);

    const response = await obtenerPantallasApi();
    setPantallas(response.data);
    console.log(response);
    
    setIsLoading(false);
  };

  useEffect(() => {
    obtenerPantallas();
  }, []);
  
  return {
    isLoading,
    pantallas,
  }
}