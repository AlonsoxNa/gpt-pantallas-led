import { Navigate, Route, Routes } from "react-router-dom";
import { Pantallas } from '../pages/admin/Pantallas';
import { Usuarios } from '../pages/admin/Usuarios';
import { PantallasDeUsuario } from '../pages/admin/PantallasDeUsuario';

export const AdminRoutes = () => {
  return (
    <Routes>

      {/* Vistas principales administrador */ }
      <Route path="pantallas" element={ <Pantallas /> } />
      <Route path="usuarios" element={ <Usuarios /> } />
      <Route path="pantallas-usuario" element={ <PantallasDeUsuario /> } />

      <Route path="*" element={ <Navigate to="pantallas" /> } />
    </Routes>
  );
};
