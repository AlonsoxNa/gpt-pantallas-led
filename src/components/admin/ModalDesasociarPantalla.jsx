import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
} from "@mui/material";
import ErrorIcon from "@mui/icons-material/Error";
import { CustomProgress } from "../ui/CustomProgress";
import { desasociarPantallaUsuario } from "../../services/usuarioPantallaService";
import { useState } from "react";

export const ModalDesasociarPantalla = ({
  open,
  handleClose,
  fetchPantallas,
  pantalla,
  usuario,
  setAlerta,
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const onDesasociarPantalla = async () => {
    setIsLoading(true);
    try {
      const response = await desasociarPantallaUsuario(usuario.id, pantalla.id);

      if (response.success) {
        setAlerta({ open: true, mensaje: response.message, tipo: "success" });
        fetchPantallas();
      } else {
        setAlerta({ open: true, mensaje: response.message, tipo: "error" });
      }
    } catch (error) {
      setAlerta({
        open: true,
        mensaje: "Error al desasociar pantalla",
        tipo: "error",
      });
    } finally {
      setIsLoading(false);
    }
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
        ¿Estás seguro de desasociar esta pantalla? No podrás deshacer la acción
      </DialogContent>
      <DialogActions sx={{ px: 3 }}>
        <Button onClick={handleClose} variant="outlined" color="error">
          Cancelar
        </Button>
        <Button
          type="submit"
          onClick={onDesasociarPantalla}
          variant="contained"
          color="error"
        >
          Desasociar
        </Button>
      </DialogActions>
      {isLoading && <CustomProgress open={isLoading} />}
    </Dialog>
  );
};
