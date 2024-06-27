import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Button, Grid, Typography } from "@mui/material";
import { CardCustomUsuario } from "../../components/admin/CardCustomUsuario";
import { useUsuarios } from "../../hooks/useUsuarios";
import { CustomProgress } from "../../components/ui/CustomProgress";
import { useState } from "react";
import { ModalCrearUsuario } from "../../components/admin/ModalCrearUsuario";

export const Usuarios = () => {
  const { isLoading, usuarios, obtenerUsuarios } = useUsuarios();

  const [openModal, setOpenModal] = useState(false);

  const handleCrearUsuarioModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <>
      <CustomProgress open={isLoading} />
      <Grid container justifyContent="space-between">
        <Typography variant="h4">Usuarios</Typography>
        <Button
          variant="contained"
          startIcon={<AddCircleIcon />}
          onClick={handleCrearUsuarioModal}
        >
          Agregar
        </Button>
      </Grid>
      <Grid item xs={12} container spacing={2} sx={{ marginBottom: "30px" }}>
        {usuarios.map((usuario) => (
          <Grid item xs={12} key={usuario.id}>
            <CardCustomUsuario usuario={usuario} />
          </Grid>
        ))}
      </Grid>
      {openModal && (
        <ModalCrearUsuario
          open={openModal}
          handleClose={handleCloseModal}
          fetchUsuarios={obtenerUsuarios}
        />
      )}
    </>
  );
};
