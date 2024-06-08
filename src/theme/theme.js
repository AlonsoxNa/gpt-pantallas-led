import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#5483FC",
      secondary: "#E4ECFD"
    },
    secondary: {
      main: "#DAF7A6 "
    },
    mode: 'light', // Aquí se puede cambiar a dark para tener modo oscuro
    tagEdificio: {
      main: '#58D68D'
    },
    tagSala: {
      main: '#F5B041'
    }
  }
})