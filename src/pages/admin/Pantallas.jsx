import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Button, Grid, Typography } from '@mui/material';
import { pantallas } from '../../assets/data/pantallas';
import { CardCustomPantalla } from '../../components/admin/CardCustomPantalla';
import { AdminLayout } from '../../layout/AdminLayout';

export const Pantallas = () => {

  const onEditPantalla = ( pantalla ) => {
    console.log( "Editando pantalla con id:", pantalla.id );
  };

  return (
    <AdminLayout>
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
    </AdminLayout>
  );
};