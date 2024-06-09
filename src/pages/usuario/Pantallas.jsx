import { Grid, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { pantallasUsuario } from '../../assets/data/pantallasUsuario';
import { CardCustomPantalla } from '../../components/admin/CardCustomPantalla';

export const Pantallas = () => {

  const navigate = useNavigate();

  const onEditPantalla = ( pantalla ) => {
    navigate( '/usuario/cambiar-mensaje-pantalla', { state: { pantalla } } );
  };

  return (
    <>
      <Grid container justifyContent="space-between">
        <Typography variant="h4">Pantallas de Renzo</Typography>
      </Grid>
      <Grid container>
        { pantallasUsuario.map( ( pantalla ) => (
          <Grid item xs={ 12 } key={ pantalla.id }>
            <CardCustomPantalla pantalla={ pantalla.pantalla } accionIcono={ onEditPantalla } />
          </Grid>
        ) ) }

      </Grid>
    </>
  );
};