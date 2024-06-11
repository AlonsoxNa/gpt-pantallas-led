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
      <Grid item xs={12} container justifyContent="space-between" alignItems="center" sx={{ marginBottom: '32px' }}>
        <Typography variant="h4">Pantallas</Typography>
        <Button variant="contained" startIcon={<AddCircleIcon />}>
          Agregar
        </Button>
      </Grid>
      <Grid item xs={12} container spacing={2} sx={{ marginBottom: '30px' }}>
        {pantallas.map((pantalla) => (
          <Grid item xs={12} key={pantalla.id}>
            <Paper elevation={3} sx={{ p: 2, boxShadow: `0 0 10px #3f78e9` }}>
              <CardCustomPantalla pantalla={pantalla} accionIcono={onEditPantalla} />
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};
