import { Grid, Typography } from "@mui/material";
import { CustomProgress } from "../../components/ui/CustomProgress";
import { CardCustomPantalla } from "../../components/usuario/CardCustomPantalla";
import { usePantallasUsuario } from "../../hooks/admin/usePantallasUsuario";
import { useUserStore } from "../../store/user.store";

export const Pantallas = () => {
  const user = useUserStore((state) => state.user);

  const { isLoading, pantallasUsuario } = usePantallasUsuario(user.id);

  return (
    <>
      <CustomProgress open={isLoading} />
      <Grid container justifyContent="space-between">
        <Typography variant="h4">
          Pantallas de {user.name.split(" ")[0]}
        </Typography>
      </Grid>
      <Grid container>
        {pantallasUsuario.map((pantalla, index) => (
          <Grid item xs={12} key={index}>
            <CardCustomPantalla pantalla={pantalla.pantalla} />
          </Grid>
        ))}
        {!isLoading && pantallasUsuario.length === 0 ? (
          <Grid item xs={12} md={6}>
            <Typography
              variant="h6"
              component="h6"
              fontWeight={400}
              textAlign="center"
              mt={2}
            >
              No tienes pantallas asignadas
            </Typography>
          </Grid>
        ) : null}
      </Grid>
    </>
  );
};
