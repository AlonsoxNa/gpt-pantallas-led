import { Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useState } from 'react';
import { usePantallas } from '../../hooks/usePantallas';
import { asociarPantallaUsuario } from '../../services/usuarioPantallaService';
import { CustomProgress } from '../ui/CustomProgress';
import { CustomAlert } from '../ui/CustomAlert';

export const ModalAsociarPantalla = ( { open, handleClose, usuario } ) => {

  const [ isLoading, setIsLoading ] = useState( false );
  const [ pantalla, setPantalla ] = useState( {} );

  const { pantallas } = usePantallas();

  //alert
  const [ isOpenAlert, setIsOpenAlert ] = useState( false );
  const [ msgAlert, setMsgAlert ] = useState( '' );
  const [ tipoMsg, setTipoMsg ] = useState( '' );

  const handleChangePantalla = ( event ) => {
    setPantalla( event.target.value );
  };

  const handleAsociarPantalla = async () => {
    setIsLoading( true );

    const response = await asociarPantallaUsuario( usuario.id, pantalla.id );

    if ( response.success ) {
      setMsgAlert( response.message );
      setTipoMsg( 'success' );

    } else {
      setMsgAlert( response.message );
      setTipoMsg( 'error' );
    }
    setIsOpenAlert( true );
    setIsLoading( false );
  };



  const handleCloseAlert = () => {
    setIsOpenAlert( false );
  };

  return (
    <Dialog
      open={ open }
      onClose={ handleClose }
    >
      <DialogTitle>Asociar pantalla a Coronel</DialogTitle>
      <DialogContent >
        <FormControl fullWidth sx={ { textAlign: 'center', my: 4 } }>
          <InputLabel id="demo-simple-select-label">Selecciona pantalla</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={ pantalla }
            label="Selecciona pantalla"
            onChange={ handleChangePantalla }
          >
            { pantallas.map( ( pantalla, index ) => (
              <MenuItem key={ index } value={ pantalla }>{ pantalla.nombre }</MenuItem>
            ) ) }
          </Select>
        </FormControl>
      </DialogContent>
      <DialogActions>
        <Button onClick={ handleClose } variant="contained" color="error">Cancelar</Button>
        <Button type="submit" onClick={ handleAsociarPantalla } variant="contained" >Asociar</Button>
      </DialogActions>
      <CustomProgress open={ isLoading } />
      <CustomAlert handleClose={ handleCloseAlert } mensaje={ msgAlert } tipoMensaje={ tipoMsg } open={ isOpenAlert } />
    </Dialog>
  );
};