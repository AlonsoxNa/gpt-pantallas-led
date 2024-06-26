import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid } from '@mui/material';
import { useState } from 'react';
import { borrarPantalla } from '../../services/pantallasService';
import { CustomAlert } from '../ui/CustomAlert';
import { CustomProgress } from '../ui/CustomProgress';

import ErrorIcon from '@mui/icons-material/Error';

export const ModalBorrarPantalla = ({ open, handleClose, pantallaId}) => {
  
  const [isLoading, setIsLoading] = useState(false);

  // Alertas
  const [isOpenAlert, setIsOpenAlert] = useState(false);
  const [msgAlert, setMsgAlert] = useState('');
  const [tipoMsg, setTipoMsg] = useState('success');


  const handleBorrarPantalla = async () => {
    setIsLoading(true);

    const response = await borrarPantalla(pantallaId);

    if (response.success) {
      setMsgAlert(response.message);
      setTipoMsg('success');
      // handleClose();
    } else {
      setMsgAlert(response.message);
      setTipoMsg('error');
    }
    
    setIsOpenAlert(true);
    setIsLoading(false);
  }

  const handleCloseAlert = () => {
    setIsOpenAlert(false);
  };
  
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>
        <Grid container alignItems="center" gap={2}>
          <ErrorIcon fontSize="large" />
          Atención
        </Grid>
      </DialogTitle>
      <DialogContent sx={{ px: 3 }}>
        ¿Estás seguro de borrar esta pantalla? No podrás deshacer la acción
      </DialogContent>
      <DialogActions sx={{ px: 3 }}>
        <Button onClick={handleClose} variant="outlined" color="error">
          Cancelar
        </Button>
        <Button
          type="submit"
          onClick={handleBorrarPantalla}
          variant="contained"
          color="error"
        >
          Borrar
        </Button>
      </DialogActions>
      {isLoading && <CustomProgress open={isLoading} />}
      <CustomAlert
        handleClose={handleCloseAlert}
        mensaje={msgAlert}
        tipoMensaje={tipoMsg}
        open={isOpenAlert}
      />
    </Dialog>
  )
}