import EditIcon from '@mui/icons-material/Edit';
import { Button, Card, CardActions, CardContent, Divider, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const CardCustomPantalla = ( { pantalla } ) => {

  const navigate = useNavigate();

  const onEditPantalla = ( ) => {
    navigate( '/usuario/cambiar-mensaje-pantalla', { state: { pantalla } } );
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
          sx={{ textTransform: "none", marginBottom: "24px" }}
        >
          {pantalla.habilitada ? "Habilitada" : "Deshabilitada"}
        </Button>

        <Button
          variant="contained"
          size="medium"
          color="tagSala"
          sx={{ textTransform: "none", marginBottom: "24px" }}
          startIcon={<EditIcon fontSize="medium" />}
          onClick={onEditPantalla}
        >
          Editar
        </Button>
      </CardActions>
      
    </Card>
  );
};