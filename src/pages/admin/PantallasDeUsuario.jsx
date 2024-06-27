import AddLinkIcon from "@mui/icons-material/AddLink";
import { Button, Grid, Typography } from "@mui/material";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { CardCustomPantallaUsuario } from "../../components/admin/CardCustomPantallaUsuario";
import { ModalAsociarPantalla } from "../../components/admin/ModalAsociarPantalla";
import { CustomAlert } from "../../components/ui/CustomAlert";
import { CustomProgress } from "../../components/ui/CustomProgress";
import { usePantallasUsuario } from "../../hooks/admin/usePantallasUsuario";

export const PantallasDeUsuario = () => {
  const location = useLocation();
  const usuario = location.state;

  const [openModal, setOpenModal] = useState(false)
  const [alerta, setAlerta] = useState({ open: false, mensaje: '', tipo: 'error' })


  const [alertaDesasociar, setAlertaDesasociar] = useState({
    open: false,
    mensaje: "",
    tipo: "error",
  });

  const { isLoading, pantallasUsuario, getPantallasUsuario } =
    usePantallasUsuario(usuario.id);


  const handleAsociarPantalla = () => {
    setOpenModal(true)
  }

  const handleCloseModal = () => {
    setOpenModal(false)
  }

  const handleCloseAlert = () => {
    setAlerta({ ...alerta, open: false })
  }

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
              <CardCustomPantallaUsuario
                pantalla={pantalla.pantalla}
                setAlertaDesasociar={setAlertaDesasociar}
                usuario={usuario}
                fetchPantallas={getPantallasUsuario}
              />
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
        mensaje={alertaDesasociar.mensaje}
        tipoMensaje={alertaDesasociar.tipo}
        open={alertaDesasociar.open}
      />
    </>
  );
};
