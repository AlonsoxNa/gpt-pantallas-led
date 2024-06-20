import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Button, Grid, IconButton, InputAdornment, TextField, Typography, Paper, Avatar, Link } from '@mui/material';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { registerUser } from '../../services/authService'; // Asegúrate de tener este servicio de registro
import { CustomProgress } from '../../components/ui/CustomProgress';
import { CustomAlert } from '../../components/ui/CustomAlert';
import { useNavigate } from 'react-router-dom';

export const Register = () => {

  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);
  const [isOpenAlert, setIsOpenAlert] = useState(false);
  const [msgAlert, setMsgAlert] = useState('');
  const [tipoMensaje, setTipoMensaje] = useState('error');
  const [showPassword, setShowPassword] = useState(false);

  const form = useForm({
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
      name: ''
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

    const response = await registerUser(data);

    if (response.success) {
      setTipoMensaje('success');
      setMsgAlert('Usuario registrado con éxito');
      setTimeout(() => {
          navigate('/login');
      }, 1000);
    } else {
      setMsgAlert(response.message);
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
      sx={{ backgroundColor: 'primary.secondary' }}
    >
      <Paper elevation={10} sx={{
        padding: 4,
        borderRadius: 2,
        width: '90%',
        maxWidth: 400,
        backgroundColor: "#fff",
        boxShadow: 3
      }}>
        <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2} justifyContent="center">
          <Grid item>
            <Avatar
              src="https://ferretronica.com/cdn/shop/collections/Elementos_de_visualizacion_pantallas_lcd_display_7_segmentos_matrices_led_modulos_de_visualizacion_led_ferretronica_512x512.png?v=1537792596"
              sx={{ width: 170, height: 170 }}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h5" textAlign="center" fontWeight="bold" fontSize="2rem">
                Registrar nuevo usuario
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2" textAlign="center" sx={{ mt: 2 }}>
              ¿Ya tienes una cuenta? <Link onClick={() => navigate('/login')} sx={{ cursor: 'pointer' }}>Iniciar sesión</Link>
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField
              autoComplete="off"
              error={!!errors.name}
              helperText={errors.name?.message}
              name="name"
              fullWidth
              label="Nombre"
              {...register('name', {
                required: "El nombre es requerido",
              })}
              variant="outlined"
            />
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
                    tabIndex={-1}
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
            <TextField
              error={!!errors.confirmPassword}
              helperText={errors.confirmPassword?.message}
              name="confirmPassword"
              type={showPassword ? 'text' : 'password'}
              InputProps={{
                endAdornment: <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={onClickShowPassword}
                    edge="end"
                    tabIndex={-1}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }}
              label="Confirmar Contraseña"
              {...register('confirmPassword', {
                required: "La confirmación de la contraseña es requerida",
                validate: value => value === form.getValues('password') || "Las contraseñas no coinciden"
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
              sx={{ py: 1, textTransform: 'none', fontWeight: 600, fontSize: '1rem', mt: 2, color: '#FFFFFF' }}
              type="submit"
            >
              Registrarse
            </Button>
          </Grid>
        </Grid>
        </form>
      </Paper>
      <CustomAlert handleClose={handleCloseAlert} mensaje={msgAlert} tipoMensaje={tipoMensaje} open={isOpenAlert} />
      <CustomProgress open={isOpen} />
    </Grid>
  );
};
