import { Button, Card, CardActions, CardContent, IconButton, Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

export const CardCustomPantalla = ( { pantalla, icono = <EditIcon fontSize="medium" />, accionIcono } ) => {

  const onClickIcono = () => {
    accionIcono( pantalla );
  };

  return (
    <Card sx={ { minWidth: 275, mt: 4, boxShadow: `0 0 30px #3f78e9`} }>
      <CardContent>
        <Typography variant="h5" component="h6" textAlign="center" style={{ fontFamily: '"Tahoma", sans-serif', fontSize: '1.5rem'}}>
          Mensaje activo:
        </Typography>

        <Typography variant="body1" component="p" textAlign="center" sx={ { my: 1 } } style={{ fontFamily: '"Tahoma", sans-serif', fontSize: '1.1rem'}}>
          { pantalla.mensaje }
        </Typography>
      </CardContent>
      <CardActions sx={ { justifyContent: 'center', gap: 4 } }>
        <Button
          variant="contained"
          size="medium"
          color="tagEdificio"
          sx={ { textTransform: 'none', marginBottom: '24px' } }
          style={{ fontFamily: '"Tahoma", sans-serif', fontSize: '1rem',width: '150px'}}
        >
          { pantalla.ubicacion }
        </Button>
        <Button
          variant="contained"
          size="medium"
          color="tagSala"
          sx={ { textTransform: 'none', marginBottom: '24px' } }
          style={{ fontFamily: '"Tahoma", sans-serif', fontSize: '1rem', width: '150px'}}
        >
          { pantalla.sala }
        </Button>
        <IconButton onClick={ onClickIcono } sx={{marginBottom: '24px'}}>
          { icono }
        </IconButton>
      </CardActions>
    </Card>
  );
};