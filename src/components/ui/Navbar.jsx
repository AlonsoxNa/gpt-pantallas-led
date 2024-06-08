import MenuIcon from '@mui/icons-material/Menu';
import PersonIcon from '@mui/icons-material/Person';
import { Grid, Menu, MenuItem, Typography } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import { useState } from 'react';

export const Navbar = () => {

  const [ anchorEl, setAnchorEl ] = useState( null );
  const open = Boolean( anchorEl );

  const handleClick = ( event ) => {
    setAnchorEl( event.currentTarget );
  };

  const handleClose = () => {
    setAnchorEl( null );
  };

  return (
    <Box alignItems="center">
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={ { mr: 'auto' } }
          >
            <MenuIcon />
          </IconButton>
          <Grid container justifyContent="end" alignItems="center" mr="1rem">
            <IconButton sx={ { color: 'white' } } onClick={ handleClick }>
              <PersonIcon fontSize="large" />
            </IconButton>
            <Typography sx={ { my: 'auto' } } onClick={ handleClick }>Luis</Typography>
            <Menu
              id="basic-menu"
              anchorEl={ anchorEl }
              open={ open }
              onClose={ handleClose }
              MenuListProps={ {
                'aria-labelledby': 'basic-button',
              } }
            >
              <MenuItem onClick={ handleClose }>Cerrar sesión</MenuItem>
            </Menu>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
};