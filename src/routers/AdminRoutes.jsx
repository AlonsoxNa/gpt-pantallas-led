import { Navigate, Route, Routes } from "react-router-dom";
import { Pantallas, Usuarios, PantallasDeUsuario } from '../pages/admin';
import { CambiarMensajePantalla } from '../pages/shared/CambiarMensajePantalla';
import { AdminLayout } from '../layout/AdminLayout';

export const AdminRoutes = () => {
  return (
    <AdminLayout>
      <Routes>

        {/* Vistas principales administrador */ }
        <Route path="pantallas" element={ <Pantallas /> } />
        <Route path="usuarios" element={ <Usuarios /> } />
        <Route path="pantallas-usuario" element={ <PantallasDeUsuario /> } />
        <Route path="cambiar-mensaje-pantalla" element={ <CambiarMensajePantalla /> } />

        <Route path="*" element={ <Navigate to="pantallas" /> } />
      </Routes>
    </AdminLayout>

  );
};
