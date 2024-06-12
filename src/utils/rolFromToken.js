import { jwtDecode } from "jwt-decode";

export const decodeRol = (token) => {
  const tokenDecode = jwtDecode(token);
  return tokenDecode.usuarioRol;
}