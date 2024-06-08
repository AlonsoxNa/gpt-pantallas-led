import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#5483FC",
      secondary: "#E4ECFD"
    },
    secondary: {
      main: "#656565"
    },
    mode: 'light' // Aquí se puede cambiar a dark para tener modo oscuro
  }
})