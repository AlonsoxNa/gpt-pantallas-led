import { Alert, Snackbar } from '@mui/material';

export const CustomAlert = ( { handleClose, mensaje, tipoMensaje, open } ) => {
  return (
    <Snackbar open={ open } autoHideDuration={ 4000 } onClose={ handleClose }>
      <Alert
        onClose={ handleClose }
        severity={ tipoMensaje }
        variant="filled"
        sx={ { width: '100%' } }
      >
        { mensaje }
      </Alert>
    </Snackbar>
  );
};