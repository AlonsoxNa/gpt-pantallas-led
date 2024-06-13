import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import PersonIcon from '@mui/icons-material/Person';
import { Drawer, Grid, List, ListItem, ListItemButton, ListItemText, Menu, MenuItem, Typography } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserStore } from '../../store/user.store';
import { decodeRol } from '../../utils/rolFromToken';

export const Navbar = () => {

  const user = useUserStore( ( state ) => state.user );
  const handleLogout = useUserStore( ( state ) => state.handleLogout );

  const navigate = useNavigate();

  const [ anchorEl, setAnchorEl ] = useState( null );
  const openMenuIcon = Boolean( anchorEl );

  const [ openDrawer, setOpenDrawer ] = useState( false );

  const toggleDrawer = ( newOpen ) => () => {
    setOpenDrawer( newOpen );
  };

  const handleClick = ( event ) => {
    setAnchorEl( event.currentTarget );
  };

  const handleClose = () => {
    setAnchorEl( null );
  };

  const onLogout = () => {
    handleLogout();
    navigate( '/login' );
  };

  const handleGoToPantallas = () => {
    const rol = decodeRol( user.token );
    if ( rol === 'administrador' ) {
      navigate( '/admin/pantallas' );
    } else if ( rol === 'usuario' ) {
      navigate( '/usuario/pantallas' );
    }
  };

  const handleGoToUsuarios = () => {
    const rol = decodeRol( user.token );

    if ( rol === 'administrador' ) {
      navigate( '/admin/usuarios' );
    }
  };

  return (
    <Box alignItems="center">
      <AppBar position="static" >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={ { mr: 'auto' } }
            onClick={ toggleDrawer( true ) }
          >
            <MenuIcon />
          </IconButton>
          <Grid container justifyContent="end" alignItems="center" mr="1rem">
            <IconButton sx={ { color: 'white' } } onClick={ handleClick }>
              <PersonIcon fontSize="large" />
            </IconButton>
            <Typography sx={ { my: 'auto' } } onClick={ handleClick }>{ user.name.split( " " )[ 0 ] }</Typography>
            <Menu
              id="basic-menu"
              anchorEl={ anchorEl }
              open={ openMenuIcon }
              onClose={ handleClose }
              MenuListProps={ {
                'aria-labelledby': 'basic-button',
              } }
            >
              <MenuItem onClick={ onLogout }>Cerrar sesión</MenuItem>
            </Menu>
          </Grid>
        </Toolbar>
      </AppBar>
      <Drawer open={ openDrawer } onClose={ toggleDrawer( false ) } PaperProps={ { width: '100%' } }>
        <Grid
          role="presentation"
          onClick={ toggleDrawer( false ) }
          onKeyDown={ toggleDrawer( false ) }
          sx={ {
            width: '100vw',
            minHeight: '100vh',
            backgroundColor: 'primary.main',
          } }
        >
          <Toolbar>
            <IconButton sx={ { color: 'white' } }>
              <CloseIcon />
            </IconButton>
          </Toolbar>
          <List>
            <ListItem>
              <ListItemButton >
                <ListItemText
                  onClick={ handleGoToPantallas }
                  primary="Pantallas"
                  primaryTypographyProps={ { fontSize: '1.5rem', color: 'white' } }
                />
              </ListItemButton>
            </ListItem>
            { decodeRol( user.token ) === 'administrador' && <ListItem>
              <ListItemButton>
                <ListItemText
                  onClick={ handleGoToUsuarios }
                  primary="Usuarios"
                  primaryTypographyProps={ { fontSize: '1.5rem', color: 'white' } }
                />
              </ListItemButton>
            </ListItem> }
          </List>
        </Grid>
      </Drawer>
    </Box>
  );
};