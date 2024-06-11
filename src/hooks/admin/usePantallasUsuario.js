import { useCallback, useEffect, useState } from 'react';
import { getPantallasUsuarioApi } from '../../services/usuarioPantallaService';

export const usePantallasUsuario = (id_usuario) => {
  
  const [isLoading, setIsLoading] = useState(true);
  const [pantallasUsuario, setPantallasUsuario] = useState([]);
  
  const getPantallasUsuario = useCallback(async () => {
    setIsLoading(true);

    const response = await getPantallasUsuarioApi(id_usuario);
    setPantallasUsuario(response.data);    

    setIsLoading(false);
  }, [id_usuario])

  useEffect(() => {
    getPantallasUsuario();
  }, [getPantallasUsuario])

  return {
    isLoading,
    pantallasUsuario
  }
}