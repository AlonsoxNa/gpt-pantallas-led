import { Navigate, Route, Routes } from "react-router-dom";
import { UsuarioLayout } from '../layout/UsuarioLayout';
import { Pantallas } from '../pages/usuario/Pantallas';
import { CambiarMensajePantalla } from '../pages/shared/CambiarMensajePantalla';

export const UsuarioRoutes = () => {
  return (
    <UsuarioLayout>
      <Routes>

        {/* Vistas principales usuario */ }
        <Route path="pantallas" element={ <Pantallas /> } />
        <Route path="cambiar-mensaje-pantalla" element={ <CambiarMensajePantalla /> } />

        <Route path="*" element={ <Navigate to="pantallas" /> } />
      </Routes>
    </UsuarioLayout>

  );
};
