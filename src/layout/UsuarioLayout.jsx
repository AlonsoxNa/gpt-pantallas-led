import { Box } from '@mui/material';
import { Navbar } from '../components/ui/Navbar';

export const UsuarioLayout = ( { children } ) => {

  return (
    <Box sx={ { display: 'flex', minHeight: '100dvh', flexDirection: 'column' } }>

      {/* TODO: Hay que modificar el navbar, ya que este es para administrador */ }
      {/* Navbar */ }
      <Navbar />
      {/* Sidebar */ }

      {/* Main content */ }
      <Box
        component="main"
        sx={ { flexGrow: 1, bgcolor: 'primary.secondary', p: 3 } }
      >
        {/* Children */ }
        { children }
      </Box>

    </Box>
  );
};