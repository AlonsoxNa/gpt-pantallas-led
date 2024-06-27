import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Button, Grid, Typography } from "@mui/material";
import { useState } from "react";
import { CardCustomPantalla } from "../../components/admin/CardCustomPantalla";
import { ModalCrearPantalla } from "../../components/admin/ModalCrearPantalla";
import { CustomProgress } from "../../components/ui/CustomProgress";
import { usePantallas } from "../../hooks/usePantallas";
import { CustomAlert } from '../../components/ui/CustomAlert';

export const Pantallas = () => {
  const { isLoading, pantallas, obtenerPantallas } = usePantallas();

  const [openModal, setOpenModal] = useState(false);

  // Alertas para borrado de pantalla
  const [isOpenAlert, setIsOpenAlert] = useState(false);
  const [msgAlert, setMsgAlert] = useState("");
  const [tipoMsg, setTipoMsg] = useState("success");

  const handleCrearPantallaModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleCloseAlert = () => {
    setIsOpenAlert(false);
  };

  return (
    <>
      <CustomProgress open={isLoading} />
      <Grid container justifyContent="space-between">
        <Typography variant="h4">Pantallas</Typography>
        <Button
          variant="contained"
          startIcon={<AddCircleIcon />}
          onClick={handleCrearPantallaModal}
        >
          Agregar
        </Button>
      </Grid>
      <Grid item xs={12} container spacing={2} sx={{ marginBottom: "30px" }}>
        {pantallas.map((pantalla) => (
          <Grid item xs={12} key={pantalla.id}>
            <CardCustomPantalla
              pantalla={pantalla}
              fetchPantallas={obtenerPantallas}
              setIsOpenAlert={setIsOpenAlert}
              setMsgAlert={setMsgAlert}
              setTipoMsg={setTipoMsg}
            />
          </Grid>
          
        ))
        }
      </Grid>
      {openModal && (
        <ModalCrearPantalla open={openModal} handleClose={handleCloseModal} fetchPantallas={obtenerPantallas} />
      )}
      {isOpenAlert && (
        <CustomAlert
          handleClose={handleCloseAlert}
          mensaje={msgAlert}
          tipoMensaje={tipoMsg}
          open={isOpenAlert}
        />
      )}
    </>
  );
};
