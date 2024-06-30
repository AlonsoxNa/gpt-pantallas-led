import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { useState } from "react";
import { usePantallas } from "../../hooks/usePantallas";
import { asociarPantallaUsuario } from "../../services/usuarioPantallaService";
import { CustomProgress } from "../ui/CustomProgress";
import { CustomAlert } from "../ui/CustomAlert";

export const ModalAsociarPantalla = ({ open, handleClose, usuario, fetchPantallas }) => {
  const [isLoading, setIsLoading] = useState(false);

  const { isLoading: loadingPantallas, pantallas } = usePantallas();

  const [pantalla, setPantalla] = useState("");
  const [errorPantalla, setErrorPantalla] = useState("");

  //alert
  const [isOpenAlert, setIsOpenAlert] = useState(false);
  const [msgAlert, setMsgAlert] = useState("");
  const [tipoMsg, setTipoMsg] = useState("");

  const handleChangePantalla = ({ target }) => {
    const { value } = target;
    setPantalla(value);
    setErrorPantalla("");
  };

  const handleAsociarPantalla = async () => {
    setIsLoading(true);

    if (pantalla === "") {
      setErrorPantalla("Debes seleccionar una pantalla");
      setIsLoading(false);
      return;
    }

    const response = await asociarPantallaUsuario(usuario.id, pantalla);

    if (response.success) {
      setMsgAlert(response.message);
      setTipoMsg("success");
      fetchPantallas();
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
      <DialogContent sx={{ px: 3 }}>
        <FormControl fullWidth sx={{ my: 4 }} error={!!errorPantalla}>
          <InputLabel id="demo-simple-select-label">
            Selecciona pantalla
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={pantalla}
            name="pantalla"
            label="Selecciona pantalla"
            onChange={handleChangePantalla}
          >
            {pantallas.map((pantalla) => (
              <MenuItem key={pantalla.id} value={pantalla.id}>
                {pantalla.nombre}
              </MenuItem>
            ))}
          </Select>
          <FormHelperText>{errorPantalla}</FormHelperText>
        </FormControl>
      </DialogContent>
      <DialogActions sx={{ px: 3 }}>
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
