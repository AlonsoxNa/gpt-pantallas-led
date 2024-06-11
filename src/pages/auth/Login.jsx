import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Button, Grid, IconButton, InputAdornment, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { login } from '../../services/authService';
import { CustomProgress } from '../../components/ui/CustomProgress';
import { CustomAlert } from '../../components/ui/CustomAlert';
import { useNavigate } from 'react-router-dom';
import { useUserStore } from '../../store/user.store';

export const Login = () => {

  const handleLogin = useUserStore( state => state.handleLogin );

  const [ isOpen, setIsOpen ] = useState( false );
  const navigate = useNavigate();

  // Alerta
  //ALERT
  const [ isOpenAlert, setIsOpenAlert ] = useState( false );
  const [ msgAlert, setMsgAlert ] = useState( '' );

  const [ showPassword, setShowPassword ] = useState( false );

  const form = useForm( {
    defaultValues: {
      email: '',
      password: ''
    }
  } );

  const { register, handleSubmit, formState } = form;
  const { errors } = formState;

  const handleCloseAlert = () => {
    setIsOpenAlert( false );
  };

  const onClickShowPassword = () => {
    setShowPassword( !showPassword );
  };

  const onSubmit = async ( data ) => {
    setIsOpen( true );

    const response = await login( data );

    console.log("Response:",response);
    if ( response.success ) {
      // navigate('/feed');
      handleLogin( response.data.nombre, data.email, response.data.token);
      navigate( '/admin/pantallas' );
    } else {
      setMsgAlert( 'Credenciales incorrectas' );
    }
    setIsOpenAlert( true );
    setIsOpen( false );
  };

  return (
    <Grid
      container
      minHeight="100dvh"
      width="100%"
      bgcolor="primary.secondary"
      alignItems="center"
    >
      <Grid
        container
        gap={ 2 }
        maxWidth="90%"
        sx={ {
          my: 5,
          mx: 'auto'
        } }
      >
        <Grid item xs={ 8 } sx={ { mx: 'auto' } }>
          <Typography variant="h4" fontWeight={ 500 } textAlign="center">
            Anuncios LED UTALCA
          </Typography>
        </Grid>
        <Grid item xs={ 12 }>
          <TextField
            autoComplete="off"
            error={ !!errors.email }
            helperText={ errors.email?.message }
            name="email"
            fullWidth
            label="Correo electrónico"
            { ...register( 'email', {
              required: "El correo es requerido",
            } ) }
            type="email"
          />
        </Grid>
        <Grid item xs={ 12 }>
          <TextField
            error={ !!errors.password }
            helperText={ errors.password?.message }
            name="password"
            type={ showPassword ? 'text' : 'password' }
            InputProps={ {
              endAdornment: <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={ onClickShowPassword }
                  edge="end"
                >
                  { showPassword ? <VisibilityOff /> : <Visibility /> }
                </IconButton>
              </InputAdornment>
            } }
            label="Contraseña"
            { ...register( 'password', {
              required: "La contraseña es requerida",
            } ) }
            fullWidth
          />
        </Grid>
        <Grid item xs={ 12 }>
          <Button
            variant="contained"
            fullWidth
            size='large'
            sx={ { py: 1, textTransform: 'none', fontWeight: 400, mt: 2 } }
            onClick={ handleSubmit( onSubmit ) }
          >
            Ingresar
          </Button>
        </Grid>
      </Grid>
      <CustomAlert handleClose={ handleCloseAlert } mensaje={ msgAlert } tipoMensaje={ 'error' } open={ isOpenAlert } />
      <CustomProgress open={ isOpen } />
    </Grid>
  );
};