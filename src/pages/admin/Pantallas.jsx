import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Button, Grid, Typography } from "@mui/material";
import { CardCustomPantalla } from "../../components/admin/CardCustomPantalla";
import { CustomProgress } from "../../components/ui/CustomProgress";
import { usePantallas } from "../../hooks/usePantallas";
import { useState } from "react";
import { ModalCrearPantalla } from "../../components/admin/ModalCrearPantalla";

export const Pantallas = () => {
  const { isLoading, pantallas, obtenerPantallas } = usePantallas();

  const [openModal, setOpenModal] = useState(false);

  const handleCrearPantallaModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
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
            />
          </Grid>
          
        ))
        }
      </Grid>
      {openModal && (
        <ModalCrearPantalla open={openModal} handleClose={handleCloseModal} fetchPantallas={obtenerPantallas} />
      )}
    </>
  );
};
