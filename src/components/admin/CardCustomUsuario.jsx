import AddLinkIcon from '@mui/icons-material/AddLink';
import { Button, Card, CardActions, CardContent, IconButton, Typography } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ModalAsociarPantalla } from './ModalAsociarPantalla';


export const CardCustomUsuario = ( { usuario } ) => {
  const navigate = useNavigate();

  const [ openModal, setOpenModal ] = useState( false );

  const onClickUser = () => {
    navigate( `/admin/pantallas-usuario`, { state: usuario } );
  };

  const handleAsociarPantalla = () => {
    setOpenModal( true );
  };

  const handleCloseModal = () => {
    setOpenModal( false );
  };

  return (
    <Card sx={ { minWidth: 275, mt: 4, boxShadow: 3 } } >
      <CardContent>
        <Typography variant="h5" component="h5" textAlign="center" sx={ { my: 1 } }>
          { usuario.nombreCompleto }
        </Typography>
      </CardContent>
      <CardActions sx={ { justifyContent: 'center', gap: 4 } }>
        <Button
          variant="contained"
          size="medium"
          color={ usuario.habilitado ? "habilitado" : "deshabilitado" }
          sx={ { textTransform: 'none', marginBottom: '24px' } }
        >
          { usuario.habilitado ? 'Habilitado' : 'Deshabilitado' }
        </Button>
        <Button
          variant="contained"
          size="large"
          color="tagSala"
          sx={ { textTransform: 'none', marginBottom: '24px' } }
          onClick={ onClickUser }
        >
          { usuario.cantidadPantallas } pantallas
        </Button>
        <IconButton sx={ { marginBottom: '24px' } } onClick={ handleAsociarPantalla } >
          <AddLinkIcon />
        </IconButton>
      </CardActions>
      {openModal && <ModalAsociarPantalla open={ openModal } handleClose={ handleCloseModal } usuario={ usuario } />}
    </Card>
  );
};