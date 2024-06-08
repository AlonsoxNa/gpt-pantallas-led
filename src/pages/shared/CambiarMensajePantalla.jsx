import { Grid, Typography } from '@mui/material';
import { useLocation } from 'react-router-dom';

export const CambiarMensajePantalla = () => {

  const location = useLocation();
  const pantalla = location.state.pantalla;

  console.log( "Pantalla a editar: ", pantalla );

  return (
    <>
      <Grid container>
        <Grid item xs={ 12 }>
          <Typography variant="h4" component="h4">Cambiar mensaje de pantalla</Typography>
        </Grid>
      </Grid>
    </>
  );
};