import LinkOffIcon from '@mui/icons-material/LinkOff';
import { Button, Card, CardActions, CardContent, Divider, Typography } from '@mui/material';

export const CardCustomPantallaUsuario = ( { pantalla } ) => {

  const onDesasociarPantalla = () => {
    console.log('Desasociar pantalla con id:', pantalla.id);
  };

  return (
    <Card sx={ { minWidth: 275, mt: 4, boxShadow: 3 } }>
      <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
        <Typography variant="h6" component="h6" textAlign="left" fontWeight={500}>
          { pantalla.nombre }
        </Typography>
        <Divider />
        <Typography variant="h6" component="h6" textAlign="center" fontWeight={400}>
          Mensaje activo:
        </Typography>

        <Typography variant="body1" component="p" textAlign="center" sx={ { my: 1 } }>
          { pantalla.mensajeActual.split( "&" )[ 0 ] }
        </Typography>
      </CardContent>
      <CardActions sx={ { justifyContent: 'center', gap: 4 } }>
        <Button
          variant="contained"
          size="medium"
          color="tagEdificio"
          sx={ { textTransform: 'none', marginBottom: '24px' } }
        >
          { pantalla.habilitada ? 'Habilitada' : 'Deshabilitada' }
        </Button>
        <Button
          variant="contained"
          size="medium"
          color="tagSala"
          sx={{ textTransform: 'none', marginBottom: '24px' }}
          startIcon={ <LinkOffIcon fontSize="medium" /> }
          onClick={ onDesasociarPantalla }
        >
          Desasociar
        </Button>
        
      </CardActions>
    </Card>
  );
};