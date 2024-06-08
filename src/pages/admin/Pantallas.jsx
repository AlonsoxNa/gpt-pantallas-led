import { Button, Card, CardActions, CardContent, Grid, IconButton, Typography } from '@mui/material';
import { AdminLayout } from '../../layout/AdminLayout';
import EditIcon from '@mui/icons-material/Edit';
import { pantallas } from '../../assets/data/pantallas';
import AddCircleIcon from '@mui/icons-material/AddCircle';

export const Pantallas = () => {
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
            <Card sx={ { minWidth: 275, mt: 2 } }>
              <CardContent>
                <Typography variant="h5" component="h6" textAlign="center">
                  Mensaje activo:
                </Typography>

                <Typography variant="body2" component="p" textAlign="center" sx={ { my: 1 } }>
                  { pantalla.mensaje }
                </Typography>
              </CardContent>
              <CardActions sx={ { justifyContent: 'center', gap: 4 } }>
                <Button
                  variant="contained"
                  size="small"
                  color="tagEdificio"
                  sx={ { textTransform: 'none' } }
                >
                  { pantalla.ubicacion }
                </Button>
                <Button
                  variant="contained"
                  size="small"
                  color="tagSala"
                  sx={ { textTransform: 'none' } }
                >
                  { pantalla.sala }
                </Button>
                <IconButton >
                  <EditIcon />
                </IconButton>
              </CardActions>
            </Card>
          </Grid>
        ) ) }

      </Grid>
    </AdminLayout>
  );
};