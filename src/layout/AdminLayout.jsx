import { Box } from '@mui/material';
import { Navbar } from '../components/ui/Navbar';

export const AdminLayout = ( { children } ) => {

  return (
    <Box sx={ { display: 'flex', minHeight: '100dvh', flexDirection: 'column' } }>

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