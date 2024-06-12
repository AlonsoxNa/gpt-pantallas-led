import { Button, Checkbox, FormControl, FormControlLabel, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { animaciones } from '../../assets/data/animaciones';
import { MensajeProgramadoForm } from '../../components/shared/MensajeProgramadoForm';
import { CustomAlert } from '../../components/ui/CustomAlert';
import { CustomProgress } from '../../components/ui/CustomProgress';
import { enviarMensajeDefecto } from '../../services/pantallasService';
import { useMensajeStore } from '../../store/mensaje.store';
import { validarCampos } from '../../utils/validarCamposMensaje';

export const CambiarMensajePantalla = () => {

  const location = useLocation();
  const pantalla = location.state.pantalla;

  const [ isLoading, setIsLoading ] = useState( false );

  // Alertas
  const [ isOpenAlert, setIsOpenAlert ] = useState( false );
  const [ msgAlert, setMsgAlert ] = useState( '' );
  const [ tipoMensaje, setTipoMensaje ] = useState( 'error' );

  const { data, setMensaje, setAnimacion: onChangeAnimacion, setProgramado } = useMensajeStore();

  const handleCloseAlert = () => {
    setIsOpenAlert( false );
  };

  const handleChangeAnimacion = ( event ) => {
    onChangeAnimacion( event.target.value );
  };

  const handleChangeMensaje = async () => {
    setIsLoading( true );

    const error = validarCampos( data );

    if ( error.length > 0 ) {
      setMsgAlert( error );
      setTipoMensaje( 'error' );
      setIsOpenAlert( true );
      setIsLoading( false );
      return;
    }

    if ( !data.programado ) {

      const response = await enviarMensajeDefecto( pantalla.id, data.mensaje, data.animacion );

      if ( response.success ) {
        setTipoMensaje( 'success' );
      } else {
        setTipoMensaje( 'error' );
      }
      setMsgAlert( response.message );
    }
    setIsOpenAlert( true );
    setIsLoading( false );
  };

  return (
    <>
      <Grid container gap={ 4 }>
        <Grid item xs={ 12 }>
          <Typography variant="h4" textAlign="center" component="h4">Pantalla: <br /> { pantalla.nombre } </Typography>
        </Grid>
        <Grid item xs={ 12 }>
          <TextField
            variant="outlined"
            multiline
            rows={ 6 }
            fullWidth
            value={ data.mensaje }
            placeholder="Ingresa tu mensaje..."
            onChange={ setMensaje }
            sx={ { bgcolor: 'white' } }
          />
        </Grid>
        <Grid item xs={ 12 }>
          <FormControlLabel
            control={
              <Checkbox checked={ data.programado } onChange={ setProgramado } />
            }
            label="Programar mensaje"
          />
        </Grid>
        <Grid item xs={ 12 }>
          <FormControl fullWidth sx={ { bgcolor: 'white' } }>
            <InputLabel id="demo-simple-select-label">Selecciona animación</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={ data.animacion }
              label="Selecciona animación"
              onChange={ handleChangeAnimacion }
              defaultValue={ data.animacion }
            >
              { animaciones.map( ( animacion ) => (
                <MenuItem key={ animacion.id } value={ animacion.id }>{ animacion.nombre }</MenuItem>
              ) ) }
            </Select>
          </FormControl>
        </Grid>
        { data.programado && (
          <MensajeProgramadoForm />
        ) }

        <Grid item xs={ 12 }>
          <Grid container justifyContent="center">
            <Button variant="contained" color="primary" sx={ { textTransform: 'none' } } onClick={ handleChangeMensaje } >Agregar mensaje</Button>
          </Grid>
        </Grid>
      </Grid>
      <CustomAlert handleClose={ handleCloseAlert } mensaje={ msgAlert } tipoMensaje={ tipoMensaje } open={ isOpenAlert } />
      <CustomProgress open={ isLoading } />

    </>
  );
};