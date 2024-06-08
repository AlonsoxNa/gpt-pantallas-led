import { Button, Card, CardActions, CardContent, IconButton, Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

export const CardCustomPantalla = ( { pantalla, icono = <EditIcon fontSize="medium" />, accionIcono } ) => {

  const onClickIcono = () => {
    accionIcono( pantalla );
  };

  return (
    <Card sx={ { minWidth: 275, mt: 4 } }>
      <CardContent>
        <Typography variant="h5" component="h6" textAlign="center">
          Mensaje activo:
        </Typography>

        <Typography variant="body1" component="p" textAlign="center" sx={ { my: 1 } }>
          { pantalla.mensaje }
        </Typography>
      </CardContent>
      <CardActions sx={ { justifyContent: 'center', gap: 4 } }>
        <Button
          variant="contained"
          size="medium"
          color="tagEdificio"
          sx={ { textTransform: 'none' } }
        >
          { pantalla.ubicacion }
        </Button>
        <Button
          variant="contained"
          size="medium"
          color="tagSala"
          sx={ { textTransform: 'none' } }
        >
          { pantalla.sala }
        </Button>
        <IconButton onClick={ onClickIcono } >
          { icono }
        </IconButton>
      </CardActions>
    </Card>
  );
};