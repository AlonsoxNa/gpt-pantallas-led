import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Button, Grid, Typography } from '@mui/material';
import { CardCustomUsuario } from '../../components/admin/CardCustomUsuario';
import { useUsuarios } from '../../hooks/useUsuarios';
import { CustomProgress } from '../../components/ui/CustomProgress';

export const Usuarios = () => {

  const { isLoading, usuarios } = useUsuarios();

  return (
    <>
      <CustomProgress open={ isLoading } />
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
    </>
  );
};