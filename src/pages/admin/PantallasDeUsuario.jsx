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
    <Grid container spacing={3} sx={{ p: 3 }}>
      <Grid item xs={12} container justifyContent="space-between" alignItems="center">
          <Typography variant="h4" style={{ fontFamily: '"Tahoma", sans-serif', fontSize: '2rem', fontWeight: 'bold' }}>Pantallas asociadas a { usuario.nombre }</Typography>
          <Button variant="contained" startIcon={ <AddLinkIcon /> } style={{ fontFamily: '"Tahoma", sans-serif', fontSize: '1rem'}}>
            Asociar
          </Button>
      </Grid>
      <Grid item xs={12} container spacing={2} sx={{ marginBottom: '30px' }}>
        { pantallasUsuario.map( ( pantalla ) => (
          <Grid item xs={ 12 } key={ pantalla.id }>
            <CardCustomPantalla pantalla={ pantalla.pantalla } icono={ <LinkOffIcon fontSize="large" /> } accionIcono={ onDesasociarPantalla } />
          </Grid>
        ) ) }
      </Grid>
    </Grid>
  );
};