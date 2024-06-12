import { Grid, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { CustomProgress } from '../../components/ui/CustomProgress';
import { CardCustomPantalla } from '../../components/usuario/CardCustomPantalla';
import { usePantallasUsuario } from '../../hooks/admin/usePantallasUsuario';
import { useUserStore } from '../../store/user.store';

export const Pantallas = () => {

  const navigate = useNavigate();

  const user = useUserStore( state => state.user );

  const { isLoading, pantallasUsuario } = usePantallasUsuario( user.id );

  const onEditPantalla = ( pantalla ) => {
    navigate( '/usuario/cambiar-mensaje-pantalla', { state: { pantalla } } );
  };

  return (
    <>
      <CustomProgress open={ isLoading } />
      <Grid container justifyContent="space-between">
        <Typography variant="h4">Pantallas de { user.name.split( " " )[ 0 ] }</Typography>
      </Grid>
      <Grid container>
        { pantallasUsuario.map( ( pantalla, index ) => (
          <Grid item xs={ 12 } key={ index }>
            <CardCustomPantalla pantalla={ pantalla.pantalla } accionIcono={ onEditPantalla } />
          </Grid>
        ) ) }
      </Grid>
    </>
  );
};