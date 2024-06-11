import { Button, Checkbox, FormControl, FormControlLabel, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { animaciones } from '../../assets/data/animaciones';
import { MensajeProgramadoForm } from '../../components/shared/MensajeProgramadoForm';
import { useMensajeStore } from '../../store/mensaje.store';

export const CambiarMensajePantalla = () => {

  const location = useLocation();
  const pantalla = location.state.pantalla;

  const { data, setMensaje, setAnimacion: onChangeAnimacion, setProgramado } = useMensajeStore();

  const handleChangeAnimacion = ( event ) => {
    onChangeAnimacion( event.target.value );
  };

  const handleChangeMensaje = () => {
    console.log( data );
  };

  return (
    <>
      <Grid container gap={ 4 }>
        <Grid item xs={ 12 }>
          <Typography variant="h4" textAlign="center" component="h4" style={{ fontFamily: '"Tahoma", sans-serif', fontSize: '2rem', fontWeight: 'bold' }}>Pantalla <br /> { pantalla.ubicacion } - { pantalla.sala }</Typography>
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
            sx={ { bgcolor: 'white', borderColor: '#3f78e9',
              borderWidth: '2px',
              borderStyle: 'solid',
              borderRadius: '5px', } }
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
            <Button variant="contained" sx={ { textTransform: 'none' } } style={{ fontFamily: '"Tahoma", sans-serif', fontSize: '1rem'}} onClick={ handleChangeMensaje } >Agregar mensaje</Button>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};