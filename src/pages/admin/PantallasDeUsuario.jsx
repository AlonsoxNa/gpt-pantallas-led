import AddLinkIcon from "@mui/icons-material/AddLink";
import LinkOffIcon from "@mui/icons-material/LinkOff";
import { Button, Grid, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
import { CardCustomPantalla } from "../../components/admin/CardCustomPantalla";
import { usePantallasUsuario } from "../../hooks/admin/usePantallasUsuario";
import { CustomProgress } from "../../components/ui/CustomProgress";
import { useState } from "react";
import { ModalAsociarPantalla } from "../../components/admin/ModalAsociarPantalla";
import { desasociarPantallaUsuario } from "../../services/usuarioPantallaService";
import { CustomAlert } from "../../components/ui/CustomAlert";

export const PantallasDeUsuario = () => {
  const location = useLocation();
  const usuario = location.state;

  const [openModal, setOpenModal] = useState(false);
  const [alerta, setAlerta] = useState({
    open: false,
    mensaje: "",
    tipo: "error",
  });

  const { isLoading, pantallasUsuario } = usePantallasUsuario(usuario.id);

  const onDesasociarPantalla = (pantalla) => {
    desasociarPantallaUsuario(usuario.id, pantalla.id).then((response) => {
      if (response.success) {
        setAlerta({ open: true, mensaje: response.message, tipo: "success" });
        pantallasUsuario.pop(pantalla); // No se si es la mejor forma de hacerlo
      } else {
        setAlerta({ open: true, mensaje: response.message, tipo: "error" });
      }
    });
  };

  const handleAsociarPantalla = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleCloseAlert = () => {
    setAlerta({ ...alerta, open: false });
  };

  return (
    <>
      <CustomProgress open={isLoading} />
      <Grid container justifyContent="space-between" alignItems="center">
        <Grid item xs={8}>
          <Typography variant="h4">
            Pantallas asociadas a {usuario.nombreCompleto}
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Button
            variant="contained"
            startIcon={<AddLinkIcon />}
            onClick={handleAsociarPantalla}
          >
            Asociar
          </Button>
        </Grid>
        <Grid container>
          {pantallasUsuario.map((pantalla, index) => (
            <Grid item xs={12} key={index}>
              <CardCustomPantallaUsuario pantalla={pantalla.pantalla} />
            </Grid>
          ))}
        </Grid>
      </Grid>
      {openModal && (
        <ModalAsociarPantalla
          open={openModal}
          handleClose={handleCloseModal}
          usuario={usuario}
          fetchPantallas={getPantallasUsuario}
        />
      )}
      <CustomAlert
        handleClose={handleCloseAlert}
        mensaje={alerta.mensaje}
        tipoMensaje={alerta.tipo}
        open={alerta.open}
      />
    </>
  );
};
