import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { CustomAlert } from "../ui/CustomAlert";
import { CustomProgress } from "../ui/CustomProgress";
import { crearPantalla } from "../../services/pantallasService";

export const ModalCrearPantalla = ({ open, handleClose, fetchPantallas }) => {
  const [isLoading, setIsLoading] = useState(false);

  // react-hook-form
  const form = useForm({
    defaultValues: {
      nombre: "",
    },
  });
  const { register, handleSubmit, formState, reset } = form;
  const { errors } = formState;

  //alert
  const [isOpenAlert, setIsOpenAlert] = useState(false);
  const [msgAlert, setMsgAlert] = useState("");
  const [tipoMsg, setTipoMsg] = useState("");

  const handleAsociarPantalla = async (data) => {
    setIsLoading(true);

    const response = await crearPantalla(data.nombre);

    if (response.success) {
      setMsgAlert(response.message);
      setTipoMsg("success");
      reset();
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
      <DialogTitle>Crear pantalla</DialogTitle>
      <DialogContent sx={{ px: 3 }}>
        <Grid item xs={12} sx={{ my: 2 }}>
          <TextField
            autoComplete="off"
            error={!!errors.nombre}
            helperText={errors.nombre?.message}
            name="nombre"
            fullWidth
            label="Nombre pantalla"
            {...register("nombre", {
              required: "El nombre es requerido",
              minLength: {
                value: 3,
                message: "Ingresa mínimo 3 caracteres",
              },
              maxLength: {
                value: 20,
                message: "Máximo 20 caracteres",
              },
            })}
            type="text"
            variant="outlined"
          />
        </Grid>
      </DialogContent>
      <DialogActions sx={{ px: 3 }}>
        <Button onClick={handleClose} variant="contained" color="error">
          Cancelar
        </Button>
        <Button
          type="submit"
          onClick={handleSubmit(handleAsociarPantalla)}
          variant="contained"
        >
          Crear
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
  );
};
