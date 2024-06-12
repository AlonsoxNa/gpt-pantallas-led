import { Navigate } from 'react-router-dom';
import { useUserStore } from '../store/user.store';
import { jwtDecode } from "jwt-decode";

export const PrivateRoutesAdmin = ( { children } ) => {

  const user = useUserStore( ( state ) => state.user );

  const tokenDecode = jwtDecode( user.token );
  const rolUsuario = tokenDecode.usuarioRol;

  if ( !user.token || rolUsuario !== 'administrador' ) {
    return <Navigate to="/login" />;
  }

  return <>{ children }</>;
};