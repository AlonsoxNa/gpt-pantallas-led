import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import { CustomProgress } from "../ui/CustomProgress";
import { CustomAlert } from "../ui/CustomAlert";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { crearUsuario } from "../../services/usuariosService";

export const ModalCrearUsuario = ({ open, handleClose, fetchUsuarios }) => {
  const [isLoading, setIsLoading] = useState(false);

  // react-hook-form
  const form = useForm({
    defaultValues: {
      email: "",
      nombre: "",
      password: "",
    },
  });
  const { register, handleSubmit, formState, reset } = form;
  const { errors } = formState;

  const [showPassword, setShowPassword] = useState(false);

  //alert
  const [isOpenAlert, setIsOpenAlert] = useState(false);
  const [msgAlert, setMsgAlert] = useState("");
  const [tipoMsg, setTipoMsg] = useState("");

  const handleCrearPantalla = async (data) => {
    setIsLoading(true);

    try {
      const response = await crearUsuario(data);
      if (response.success) {
        setMsgAlert(response.message);
        setTipoMsg("success");
        reset();
        fetchUsuarios();
      } else {
        setMsgAlert(response.message);
        setTipoMsg("error");
      }
    } catch (error) {
      setMsgAlert("Error al crear usuario");
      setTipoMsg("error");
    } finally {
      setIsLoading(false);
      setIsOpenAlert(true);
    }
  };

  const handleCloseAlert = () => {
    setIsOpenAlert(false);
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Registrar usuario</DialogTitle>
      <DialogContent sx={{ px: 3 }}>
        <Grid item xs={12} sx={{ my: 2 }}>
          <TextField
            autoComplete="off"
            error={!!errors.nombre}
            helperText={errors.nombre?.message}
            name="nombre"
            fullWidth
            label="Nombre usuario"
            {...register("nombre", {
              required: "El nombre es requerido",
              minLength: {
                value: 3,
                message: "Ingresa mínimo 3 caracteres",
              },
              maxLength: {
                value: 50,
                message: "Máximo 50 caracteres",
              },
            })}
            type="text"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sx={{ my: 2 }}>
          <TextField
            autoComplete="off"
            error={!!errors.email}
            helperText={errors.email?.message}
            name="email"
            fullWidth
            label="Correo electrónico"
            {...register("email", {
              required: "El correo es requerido",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "El correo no es válido",
              },
            })}
            type="email"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sx={{ my: 2 }}>
          <TextField
            autoComplete="off"
            error={!!errors.password}
            helperText={errors.password?.message}
            name="password"
            fullWidth
            label="Contraseña"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => setShowPassword(!showPassword)}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            {...register("password", {
              required: "La contraseña es requerida",
              minLength: {
                value: 5,
                message: "Ingresa mínimo 5 caracteres",
              },
              maxLength: {
                value: 20,
                message: "Máximo 20 caracteres",
              },
            })}
            type={showPassword ? "text" : "password"}
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
          onClick={handleSubmit(handleCrearPantalla)}
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
