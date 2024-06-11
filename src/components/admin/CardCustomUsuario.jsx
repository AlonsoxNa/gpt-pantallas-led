import { Button, Card, CardActions, CardContent, IconButton, Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from 'react-router-dom';


export const CardCustomUsuario = ( { usuario } ) => {
  const navigate = useNavigate();

  const onClickUser = () => {
    navigate( `/admin/pantallas-usuario`, { state: usuario } );
  };

  return (
    <Card sx={ { minWidth: 275, mt: 4, boxShadow: `0 0 30px #3f78e9` } } >
      <CardContent>
        <Typography variant="h5" component="h5" textAlign="center" sx={ { my: 1 } } style={{ fontFamily: '"Tahoma", sans-serif', fontSize: '1.5rem'}}>
          { usuario.nombre }
        </Typography>
      </CardContent>
      <CardActions sx={ { justifyContent: 'center', gap: 4 } }>
        <Button
          variant="contained"
          size="medium"
          color={ usuario.habilitado ? "habilitado" : "deshabilitado" }
          sx={ { textTransform: 'none', marginBottom: '24px' } }
          style={{ fontFamily: '"Tahoma", sans-serif', fontSize: '1rem',width: '150px'}}
        >
          { usuario.habilitado ? 'Habilitado' : 'Deshabilitado' }
        </Button>
        <Button
          variant="contained"
          size="medium"
          color="tagSala"
          sx={ { textTransform: 'none', marginBottom: '24px' } }
          style={{ fontFamily: '"Tahoma", sans-serif', fontSize: '1rem',width: '150px'}}
          onClick={ onClickUser }
        >
          { usuario.cantidadPantallas } pantallas
        </Button>
        <IconButton sx={{marginBottom: '24px'}} >
          <EditIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};