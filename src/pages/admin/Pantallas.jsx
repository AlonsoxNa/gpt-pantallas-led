import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Button, Grid, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { CardCustomPantalla } from '../../components/admin/CardCustomPantalla';
import { CustomProgress } from '../../components/ui/CustomProgress';
import { usePantallas } from '../../hooks/usePantallas';

export const Pantallas = () => {

  const navigate = useNavigate();

  const { isLoading, pantallas } = usePantallas();

  const onEditPantalla = ( pantalla ) => {
    navigate( '/admin/cambiar-mensaje-pantalla', { state: { pantalla } } );
  };

  

  return (
    <>
      <CustomProgress open={isLoading} />
      <Grid container justifyContent="space-between">
        <Typography variant="h4">Pantallas</Typography>
        <Button variant="contained" startIcon={ <AddCircleIcon /> }>
          Agregar
        </Button>
      </Grid>
      <Grid container>
        { pantallas.map( ( pantalla ) => (
          <Grid item xs={ 12 } key={ pantalla.id }>
            <CardCustomPantalla pantalla={ pantalla } accionIcono={ onEditPantalla } />
          </Grid>
        ) ) }

      </Grid>
    </>
  );
};