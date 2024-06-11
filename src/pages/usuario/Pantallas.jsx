import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Button, Grid, Typography } from '@mui/material';
import { pantallas } from '../../assets/data/pantallas';
import { CardCustomPantalla } from '../../components/admin/CardCustomPantalla';
import { useNavigate } from 'react-router-dom';

export const Pantallas = () => {

  const navigate = useNavigate();

  const onEditPantalla = ( pantalla ) => {
    navigate( '/admin/cambiar-mensaje-pantalla', { state: { pantalla } } );
  };

  return (
    <Grid container spacing={3} sx={{ p: 3 }}>
      <Grid item xs={12} container justifyContent="space-between" alignItems="center">
        <Typography variant="h4" style={{ fontFamily: '"Tahoma", sans-serif', fontSize: '2rem', fontWeight: 'bold' }}>Pantallas</Typography>
        <Button variant="contained" startIcon={ <AddCircleIcon /> } style={{ fontFamily: '"Tahoma", sans-serif', fontSize: '1rem'}}>
          Agregar
        </Button>
      </Grid>
      <Grid item xs={12} container spacing={2} sx={{ marginBottom: '30px' }}>
        { pantallas.map( ( pantalla ) => (
          <Grid item xs={ 12 } key={ pantalla.id }>
              <CardCustomPantalla pantalla={ pantalla } accionIcono={ onEditPantalla } />
          </Grid>
        ) ) }
      </Grid>
    </Grid>
  );
};