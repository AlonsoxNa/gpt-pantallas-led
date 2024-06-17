import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { useState } from "react";
import { usePantallas } from "../../hooks/usePantallas";
import { asociarPantallaUsuario } from "../../services/usuarioPantallaService";
import { CustomProgress } from "../ui/CustomProgress";
import { CustomAlert } from "../ui/CustomAlert";

export const ModalAsociarPantalla = ({ open, handleClose, usuario }) => {
  const [isLoading, setIsLoading] = useState(false);

  const { isLoading: loadingPantallas, pantallas } = usePantallas();

  const [pantalla, setPantalla] = useState("");

  //alert
  const [isOpenAlert, setIsOpenAlert] = useState(false);
  const [msgAlert, setMsgAlert] = useState("");
  const [tipoMsg, setTipoMsg] = useState("");

  const handleChangePantalla = (event) => {
    setPantalla(event.target.value);
  };

  const handleAsociarPantalla = async () => {
    setIsLoading(true);

    const response = await asociarPantallaUsuario(usuario.id, pantalla);

    if (response.success) {
      setMsgAlert(response.message);
      setTipoMsg("success");
    } else {
      setMsgAlert(response.message);
      setTipoMsg("error");
    }
    setIsOpenAlert(true);
    setIsLoading(false);
  };

  const handleCloseAlert = () => {
    setIsOpenAlert(false);
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>
        Asociar pantalla a {usuario.nombreCompleto.split(" ")[0]}
      </DialogTitle>
      <DialogContent>
        <FormControl fullWidth sx={{ my: 4 }}>
          <InputLabel id="demo-simple-select-label">
            Selecciona pantalla
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={pantalla}
            label="Selecciona pantalla"
            onChange={handleChangePantalla}
          >
            {pantallas.map((pantalla) => (
              <MenuItem key={pantalla.id} value={pantalla.id}>
                {pantalla.nombre}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} variant="contained" color="error">
          Cancelar
        </Button>
        <Button
          type="submit"
          onClick={handleAsociarPantalla}
          variant="contained"
        >
          Asociar
        </Button>
      </DialogActions>
      {loadingPantallas && <CustomProgress open={loadingPantallas} />}
      {isLoading && <CustomProgress open={isLoading} />}
      <CustomAlert
        handleClose={handleCloseAlert}
        mensaje={msgAlert}
        tipoMensaje={tipoMsg}
        open={isOpenAlert}
      />
    </Dialog>
  );
};
