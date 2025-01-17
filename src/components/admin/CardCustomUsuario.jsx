import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export const CardCustomUsuario = ({ usuario }) => {
  const navigate = useNavigate();

  const onClickUser = () => {
    navigate(`/admin/pantallas-usuario`, { state: usuario });
  };

  return (
    <Card sx={{ minWidth: 275, mt: 4, boxShadow: 3 }}>
      <CardContent>
        <Typography
          variant="h5"
          component="h5"
          textAlign="center"
          sx={{ my: 1 }}
        >
          {usuario.nombreCompleto}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "center", gap: 4 }}>
        <Button
          variant="contained"
          size="medium"
          color={usuario.habilitado ? "habilitado" : "deshabilitado"}
          sx={{ textTransform: "none", marginBottom: "24px" }}
        >
          {usuario.habilitado ? "Habilitado" : "Deshabilitado"}
        </Button>
        <Button
          variant="text"
          size="large"
          // color="tagSala"
          sx={{ textTransform: "none", marginBottom: "24px" }}
          onClick={onClickUser}
        >
          Ver pantallas
        </Button>
      </CardActions>

    </Card>
  );
};
