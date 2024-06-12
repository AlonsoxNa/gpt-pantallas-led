import AddLinkIcon from '@mui/icons-material/AddLink';
import LinkOffIcon from '@mui/icons-material/LinkOff';
import { Button, Grid, Typography } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { CardCustomPantalla } from '../../components/admin/CardCustomPantalla';
import { usePantallasUsuario } from '../../hooks/admin/usePantallasUsuario';
import { CustomProgress } from '../../components/ui/CustomProgress';

export const PantallasDeUsuario = () => {

  const location = useLocation();
  const usuario = location.state;

  const { isLoading, pantallasUsuario } = usePantallasUsuario( usuario.id );

  const onDesasociarPantalla = ( pantalla ) => {
    console.log( 'Desasociar pantalla con id:', pantalla.id );
  };

  return (
    <>
      <CustomProgress open={ isLoading } />
      <Grid container justifyContent="space-between" alignItems="center">
        <Grid item xs={ 8 }>
          <Typography variant="h4">Pantallas asociadas a { usuario.nombreCompleto }</Typography>
        </Grid>
        <Grid item xs={ 4 }>
          <Button variant="contained" startIcon={ <AddLinkIcon /> }>
            Asociar
          </Button>
        </Grid>
        <Grid container>
          { pantallasUsuario.map( ( pantalla, index ) => (
            <Grid item xs={ 12 } key={ index }>
              <CardCustomPantalla pantalla={ pantalla.pantalla } icono={ <LinkOffIcon fontSize="large" /> } accionIcono={ onDesasociarPantalla } />
            </Grid>
          ) ) }
        </Grid>
      </Grid>
    </>
  );
};