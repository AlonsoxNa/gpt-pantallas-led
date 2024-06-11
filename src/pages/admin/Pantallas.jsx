import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Button, Grid, Typography, Paper } from '@mui/material';
import { pantallas } from '../../assets/data/pantallas';
import { CardCustomPantalla } from '../../components/admin/CardCustomPantalla';
import { useNavigate } from 'react-router-dom';

export const Pantallas = () => {
  const navigate = useNavigate();

  const onEditPantalla = (pantalla) => {
    navigate('/admin/cambiar-mensaje-pantalla', { state: { pantalla } });
  };

  return (
    <Grid container spacing={3} sx={{ p: 3 }}>
      <Grid item xs={12} container justifyContent="space-between" alignItems="center">
        <Typography variant="h4">Pantallas</Typography>
        <Button variant="contained" startIcon={<AddCircleIcon />} sx={{ textTransform: 'none', fontWeight: 400 }}>
          Agregar
        </Button>
      </Grid>
      <Grid item xs={12} container spacing={2}>
        {pantallas.map((pantalla) => (
          <Grid item xs={12} key={pantalla.id}>
            <Paper elevation={3} sx={{ p: 2, marginBottom: '16px' }}>
              <CardCustomPantalla pantalla={pantalla} accionIcono={onEditPantalla} />
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};
