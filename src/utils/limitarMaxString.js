export const limitarMaxString = (cadena, limite = 10) => {
  return cadena.length > limite ? cadena.substring(0, limite) + '...' : cadena;
};