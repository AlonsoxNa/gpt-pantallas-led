import { Navigate, Route, Routes } from "react-router-dom";
import { Login, Register } from '../pages/auth';
import { AdminRoutes } from './AdminRoutes';
import { UsuarioRoutes } from './UsuarioRoutes';
import { PrivateRoutesAdmin } from './PrivateRoutesAdmin';
import { PrivateRoutesUsuario } from './PrivateRoutesUsuario';

export const AppRouter = () => {
  return (
    <Routes>
      {/* <Route path="" element={ <Vista1 /> } /> */ }

      {/* Login y registro */ }
      <Route path="/login" element={ <Login /> } />
      <Route path="/register" element={ <Register /> } />

      {/* Vistas de administrador */ }
      <Route path="/admin/*" element={
        <PrivateRoutesAdmin>
          <AdminRoutes />
        </PrivateRoutesAdmin>
      } />
      <Route path="/usuario/*" element={
        <PrivateRoutesUsuario>
          <UsuarioRoutes />
        </PrivateRoutesUsuario>
      } />

      <Route path="/*" element={ <Navigate to="/login" /> } />

    </Routes>
  );
};
