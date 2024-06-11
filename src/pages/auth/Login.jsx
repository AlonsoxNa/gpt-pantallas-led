import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Button, Grid, IconButton, InputAdornment, TextField, Typography, Paper, Avatar } from '@mui/material';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { login } from '../../services/authService';
import { CustomProgress } from '../../components/ui/CustomProgress';
import { CustomAlert } from '../../components/ui/CustomAlert';
import LockIcon from '@mui/icons-material/Lock';

export const Login = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenAlert, setIsOpenAlert] = useState(false);
  const [msgAlert, setMsgAlert] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const form = useForm({
    defaultValues: {
      email: '',
      password: ''
    }
  });

  const { register, handleSubmit, formState } = form;
  const { errors } = formState;

  const handleCloseAlert = () => {
    setIsOpenAlert(false);
  };

  const onClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = async (data) => {
    setIsOpen(true);

    const response = await login(data);

    if (response.success) {
      // navigate('/feed');
    } else {
      setMsgAlert('Credenciales incorrectas');
    }
    setIsOpenAlert(true);
    setIsOpen(false);
  };
    return (
      <Grid
        container
        minHeight="100vh"
        alignItems="center"
        justifyContent="center"
        sx={{ backgroundColor: '#ffffff' }}

      >
        <Paper elevation={10} sx={{ padding: 4, borderRadius: 2, width: '90%', maxWidth: 400, backgroundColor: "#d8e9fb", boxShadow: `0 0 100px #3f78e9`}}> 
          <Grid container spacing={2} justifyContent="center">
            <Grid item>
            <Avatar
              src="https://ferretronica.com/cdn/shop/collections/Elementos_de_visualizacion_pantallas_lcd_display_7_segmentos_matrices_led_modulos_de_visualizacion_led_ferretronica_512x512.png?v=1537792596"
              sx={{ width: 170, height: 170 }}
            />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h5" style={{ fontFamily: '"Tahoma", sans-serif', fontSize: '2rem', fontWeight: 'bold' }} textAlign="center">
                Anuncios LED
              </Typography>
              <Typography variant="h5" style={{ fontFamily: '"Tahoma", sans-serif', fontSize: '2rem', fontWeight: 'bold' }} textAlign="center">
                UTALCA
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField
                autoComplete="off"
                error={!!errors.email}
                helperText={errors.email?.message}
                name="email"
                fullWidth
                label="Correo electrónico"
                {...register('email', {
                  required: "El correo es requerido",
                })}
                type="email"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                error={!!errors.password}
                helperText={errors.password?.message}
                name="password"
                type={showPassword ? 'text' : 'password'}
                InputProps={{
                  endAdornment: <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={onClickShowPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }}
                label="Contraseña"
                {...register('password', {
                  required: "La contraseña es requerida",
                })}
                fullWidth
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                fullWidth
                size='large'
                sx={{ py: 1, textTransform: 'none', fontWeight: 600, mt: 2, color: '#FFFFFF' }}
                style={{ fontFamily: '"Tahoma", sans-serif', fontSize: '1rem'}}
                onClick={handleSubmit(onSubmit)}
              >
                Iniciar sesión
              </Button>
            </Grid>
          </Grid>
        </Paper>
        <CustomAlert handleClose={handleCloseAlert} mensaje={msgAlert} tipoMensaje={'error'} open={isOpenAlert} />
        <CustomProgress open={isOpen} />
      </Grid>
    );
  };
  
