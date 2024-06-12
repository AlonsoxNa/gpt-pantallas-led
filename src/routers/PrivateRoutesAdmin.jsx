import { Navigate } from 'react-router-dom';
import { useUserStore } from '../store/user.store';
import { decodeRol } from '../utils/rolFromToken';

export const PrivateRoutesAdmin = ( { children } ) => {

  const user = useUserStore( ( state ) => state.user );

  const rolUsuario = decodeRol( user.token );

  if ( !user.token || rolUsuario !== 'administrador' ) {
    return <Navigate to="/login" />;
  }

  return <>{ children }</>;
};