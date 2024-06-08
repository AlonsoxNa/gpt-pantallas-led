import { Navigate, Route, Routes } from "react-router-dom";
import { Login, Register } from '../pages/auth';

export const AppRouter = () => {
  return (
    <Routes>
      {/* <Route path="" element={ <Vista1 /> } /> */ }

      {/* Login y registro */ }
      <Route path="/login" element={ <Login /> } />
      <Route path="/register" element={ <Register /> } />


      <Route path="/*" element={ <Navigate to="/login" /> } />

    </Routes>
  );
};
