import { Grid, TextField, Typography, Checkbox, FormControlLabel, Button, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { MensajeProgramadoForm } from '../../components/shared/MensajeProgramadoForm';
import { animaciones } from '../../assets/data/animaciones';

export const CambiarMensajePantalla = () => {

  const location = useLocation();
  const pantalla = location.state.pantalla;

  const [ animacion, setAnimacion ] = useState( "" );

  const [ checked, setChecked ] = useState( false );

  const handleChangeTipoMensaje = ( event ) => {
    setChecked( event.target.checked );
  };

  const handleChangeAnimacion = ( event ) => {
    setAnimacion( event.target.value );
  };

  return (
    <>
      <Grid container gap={ 4 }>
        <Grid item xs={ 12 }>
          <Typography variant="h4" textAlign="center" component="h4">Pantalla <br /> { pantalla.ubicacion } - { pantalla.sala }</Typography>
        </Grid>
        <Grid item xs={ 12 }>
          <TextField
            variant="outlined"
            multiline
            rows={ 8 }
            fullWidth
            defaultValue={ pantalla.mensaje }
            sx={ { bgcolor: 'white' } }
          />
        </Grid>
        <Grid item xs={ 12 }>
          <FormControlLabel
            control={
              <Checkbox checked={ checked } onChange={ handleChangeTipoMensaje } />
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
              value={ animacion }
              label="Selecciona animación"
              onChange={ handleChangeAnimacion }
            >
              { animaciones.map( ( animacion ) => (
                <MenuItem key={ animacion.id } value={ animacion.id }>{ animacion.nombre }</MenuItem>
              ) ) }
            </Select>
          </FormControl>
        </Grid>
        { checked && (
          <MensajeProgramadoForm />
        ) }

        <Grid item xs={ 12 }>
          <Grid container justifyContent="center">
            <Button variant="contained" color="primary" sx={ { textTransform: 'none' } }>Agregar mensaje</Button>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};