import { Button, Grid, Typography } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { pantallasUsuario } from '../../assets/data/pantallasUsuario';
import { CardCustomPantalla } from '../../components/admin/CardCustomPantalla';
import LinkOffIcon from '@mui/icons-material/LinkOff';
import AddLinkIcon from '@mui/icons-material/AddLink';

export const PantallasDeUsuario = () => {

  const location = useLocation();
  const usuario = location.state;

  const onDesasociarPantalla = ( pantalla ) => {
    console.log( 'Desasociar pantalla con id:', pantalla.id );
  };

  return (
    <>
      <Grid container justifyContent="space-between" alignItems="center">
        <Grid item xs={ 8 }>
          <Typography variant="h4">Pantallas asociadas a { usuario.nombre }</Typography>
        </Grid>
        <Grid item xs={ 4 }>
          <Button variant="contained" startIcon={ <AddLinkIcon /> }>
            Asociar
          </Button>
        </Grid>
      </Grid>
      <Grid container>
        { pantallasUsuario.map( ( pantalla ) => (
          <Grid item xs={ 12 } key={ pantalla.id }>
            <CardCustomPantalla pantalla={ pantalla.pantalla } icono={ <LinkOffIcon fontSize="large" /> } accionIcono={ onDesasociarPantalla } />
          </Grid>
        ) ) }

      </Grid>
    </>
  );
};