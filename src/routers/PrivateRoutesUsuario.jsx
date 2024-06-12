import { Navigate } from 'react-router-dom';
import { useUserStore } from '../store/user.store';
import { decodeRol } from '../utils/rolFromToken';

export const PrivateRoutesUsuario = ( { children } ) => {

  const user = useUserStore( ( state ) => state.user );

  const rolUsuario = decodeRol( user.token );

  if ( !user.token || rolUsuario !== 'usuario' ) {
    return <Navigate to="/login" />;
  }

  return <>{ children }</>;
};