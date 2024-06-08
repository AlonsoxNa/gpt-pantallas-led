import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Button, Grid, Typography } from '@mui/material';
import { usuarios } from '../../assets/data/usuarios';
import { CardCustomUsuario } from '../../components/admin/CardCustomUsuario';
import { AdminLayout } from '../../layout/AdminLayout';

export const Usuarios = () => {
  return (
    <AdminLayout>
      <Grid container justifyContent="space-between">
        <Typography variant="h4">Usuarios</Typography>
        <Button variant="contained" startIcon={ <AddCircleIcon /> }>
          Agregar
        </Button>
      </Grid>
      <Grid container>
        { usuarios.map( ( usuario ) => (
          <Grid item xs={ 12 } key={ usuario.id }>
            <CardCustomUsuario usuario={ usuario } />
          </Grid>
        ) ) }

      </Grid>
    </AdminLayout>
  );
};