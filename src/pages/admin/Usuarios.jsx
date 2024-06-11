import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Button, Grid, Typography } from '@mui/material';
import { usuarios } from '../../assets/data/usuarios';
import { CardCustomUsuario } from '../../components/admin/CardCustomUsuario';

export const Usuarios = () => {
  return (
    <Grid container spacing={3} sx={{ p: 3 }}>
      <Grid item xs={12} container justifyContent="space-between" alignItems="center">
        <Typography variant="h4" style={{ fontFamily: '"Tahoma", sans-serif', fontSize: '2rem', fontWeight: 'bold' }}>Usuarios</Typography>
        <Button variant="contained"
          size='large'
          sx={{ py: 1, textTransform: 'none', color: '#FFFFFF' }}
          style={{ fontFamily: '"Tahoma", sans-serif', fontSize: '1rem'}} 
          startIcon={ <AddCircleIcon /> }>
          Agregar
        </Button>
      </Grid>
      <Grid item xs={12} container spacing={2} sx={{ marginBottom: '30px' }}>
        { usuarios.map( ( usuario ) => (
          <Grid item xs={ 12 } key={ usuario.id } >
            <CardCustomUsuario usuario={ usuario } />
          </Grid>
        ) ) }

      </Grid>
    </Grid>
  );
};