import { Button, Card, CardActions, CardContent, IconButton, Tooltip, Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { limitarMaxString } from "../../utils/limitarMaxString";
import { useState } from 'react';

export const CardCustomPantalla = ( { pantalla, icono = <EditIcon fontSize="medium" />, accionIcono } ) => {

  const [ openSala, setOpenSala ] = useState( false );

  const onClickNombreSala = () => {
    setOpenSala( true );
  };

  const onCloseNombreSala = () => {
    setOpenSala( false );
  };

  const onClickIcono = () => {
    accionIcono( pantalla );
  };

  return (
    <Card sx={ { minWidth: 275, mt: 4, boxShadow: 3 } }>
      <CardContent>
        <Typography variant="h5" component="h6" textAlign="center">
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
          sx={ { textTransform: 'none', marginBottom: '24px' } }
        >
          <Tooltip title={ pantalla.nombre } open={ openSala } onClick={ onClickNombreSala } onClose={ onCloseNombreSala }>
            <Typography variant="body2" component="p">
              { limitarMaxString( pantalla.nombre ) }
            </Typography>
          </Tooltip>
        </Button>
        <IconButton onClick={ onClickIcono } sx={ { marginBottom: '24px' } }>
          { icono }
        </IconButton>
      </CardActions>
    </Card>
  );
};