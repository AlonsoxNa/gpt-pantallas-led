import { Navigate, Route, Routes } from "react-router-dom";
import { Login, Register } from '../pages/auth';
import { AdminRoutes } from './AdminRoutes';

export const AppRouter = () => {
  return (
    <Routes>
      {/* <Route path="" element={ <Vista1 /> } /> */ }

      {/* Login y registro */ }
      <Route path="/login" element={ <Login /> } />
      <Route path="/register" element={ <Register /> } />

      {/* Vistas de administrador */ }
      <Route path="/admin/*" element={ <AdminRoutes /> } />

      <Route path="/*" element={ <Navigate to="/login" /> } />

    </Routes>
  );
};
