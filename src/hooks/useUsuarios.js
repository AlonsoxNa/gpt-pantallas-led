import { useEffect, useState } from 'react';
import { obtenerUsuariosApi } from '../services/usuariosService';

export const useUsuarios = () => {
  
  const [isLoading, setIsLoading] = useState(true);
  const [ usuarios, setUsuarios ] = useState([]);

  const obtenerUsuarios = async () => {
    setIsLoading(true);

    const response = await obtenerUsuariosApi();
    setUsuarios( response.data );
    
    setIsLoading(false);
  };

  useEffect(() => {
    obtenerUsuarios();
  }, []);
  
  return {
    isLoading,
    usuarios,
    obtenerUsuarios
  }
}