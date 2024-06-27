import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { ModalBorrarMensaje } from "../shared/ModalBorrarMensaje";
import { CustomAlert } from "../ui/CustomAlert";
import { useUserStore } from "../../store/user.store";

export const CardCustomPantalla = ({ pantalla, fetchPantallas }) => {
  const navigate = useNavigate();

  const user = useUserStore((state) => state.user);

  // Alertas
  const [isOpenAlert, setIsOpenAlert] = useState(false);
  const [msgAlert, setMsgAlert] = useState("");
  const [tipoMsg, setTipoMsg] = useState("success");

  const [openDeleteProgramadoModal, setOpenDeleteProgramadoModal] =
    useState(false);

  const onEditPantalla = () => {
    navigate("/usuario/cambiar-mensaje-pantalla", { state: { pantalla } });
  };

  const onDeleteMensaje = () => {
    console.log("Borrar mensaje programado");
    setOpenDeleteProgramadoModal(true);
  };

  const handleCloseModal = () => {
    setOpenDeleteProgramadoModal(false);
  };

  const handleCloseAlert = () => {
    setIsOpenAlert(false);
  };

  return (
    <Card sx={{ minWidth: 275, mt: 4, boxShadow: 3 }}>
      <CardContent sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        <Typography
          variant="h6"
          component="h6"
          textAlign="left"
          fontWeight={500}
        >
          {pantalla.nombre}
        </Typography>

        <Divider />
        <Typography
          variant="h6"
          component="h6"
          textAlign="center"
          fontWeight={400}
        >
          Mensaje activo:
        </Typography>

        <Typography
          variant="body1"
          component="p"
          textAlign="center"
          sx={{ my: 1 }}
        >
          {pantalla.mensajeActual.split("&")[0]}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "center", gap: 1, px: 1 }}>
        <Button
          variant="contained"
          size="medium"
          color="tagEdificio"
          sx={{ textTransform: "none" }}
        >
          {pantalla.habilitada ? "Habilitada" : "Deshabilitada"}
        </Button>

        <Button
          variant="contained"
          size="medium"
          color="tagSala"
          sx={{ textTransform: "none" }}
          startIcon={<EditIcon fontSize="medium" />}
          onClick={onEditPantalla}
        >
          Editar
        </Button>
        <br />
      </CardActions>
      <CardActions sx={{ justifyContent: "center" }}>
        <Button
          variant="outlined"
          size="medium"
          color="error"
          sx={{ textTransform: "none", marginBottom: "12px" }}
          startIcon={<DeleteIcon fontSize="medium" />}
          onClick={onDeleteMensaje}
        >
          Borrar mensaje programado
        </Button>
      </CardActions>
      {openDeleteProgramadoModal && (
        <ModalBorrarMensaje
          open={openDeleteProgramadoModal}
          handleClose={handleCloseModal}
          fetchPantallas={fetchPantallas}
          setIsOpenAlert={setIsOpenAlert}
          setTipoMsg={setTipoMsg}
          setMsgAlert={setMsgAlert}
          data={{ usuario_id: user.id, pantalla_id: pantalla.id }}
        />
      )}
      {isOpenAlert && (
        <CustomAlert
          handleClose={handleCloseAlert}
          mensaje={msgAlert}
          tipoMensaje={tipoMsg}
          open={isOpenAlert}
        />
      )}
    </Card>
  );
};
