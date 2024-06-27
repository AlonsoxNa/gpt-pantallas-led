import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
} from "@mui/material";

import ErrorIcon from "@mui/icons-material/Error";
import { useState } from "react";
import { CustomProgress } from "../ui/CustomProgress";
import { borrarMensajeProgramado } from "../../services/pantallasService";

export const ModalBorrarMensaje = ({
  open,
  handleClose,
  fetchPantallas,
  setIsOpenAlert,
  setTipoMsg,
  setMsgAlert,
  data,
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleBorrarMensaje = async () => {
    setIsLoading(true);
    // Lógica para borrar mensaje

    const response = await borrarMensajeProgramado(
      data.usuario_id,
      data.pantalla_id
    );

    if (response.success) {
      setMsgAlert(response.message);
      setTipoMsg("success");
      fetchPantallas();
      handleClose();
    } else {
      setMsgAlert(response.message);
      setTipoMsg("error");
    }

    setIsOpenAlert(true);
    setIsLoading(false);
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
        ¿Estás seguro de borrar el mensaje programado? No podrás deshacer la
        acción
      </DialogContent>
      <DialogActions sx={{ px: 3 }}>
        <Button onClick={handleClose} variant="outlined" color="error">
          Cancelar
        </Button>
        <Button
          type="submit"
          onClick={handleBorrarMensaje}
          variant="contained"
          color="error"
        >
          Borrar
        </Button>
      </DialogActions>
      {isLoading && <CustomProgress open={isLoading} />}
    </Dialog>
  );
};
