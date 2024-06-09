import { FormControl, Grid, InputLabel, MenuItem, Select } from '@mui/material';
import { useState } from 'react';
import { RelojCustom } from './RelojCustom';
import dayjs from 'dayjs';

export const MensajeProgramadoForm = () => {

  const [ dias, setDias ] = useState( "Todos los días" );

  const [ horaInicio, setHoraInicio ] = useState( dayjs( '2024-06-08T12:00' ) );
  const [ horaFin, setHoraFin ] = useState( dayjs( '2024-06-08T12:00' ) );

  const handleChangeDias = ( e ) => {
    setDias( e.target.value );
  };

  return (
    <>
      <Grid item xs={ 12 }>
        <FormControl fullWidth sx={ { bgcolor: 'white' } }>
          <InputLabel id="demo-simple-select-label">Selecciona los días</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={ dias }
            label="Selecciona los días"
            defaultValue="Todos los días"
            onChange={ handleChangeDias }
          >
            <MenuItem value={ "Todos los días" }>Todos los días</MenuItem>
            <MenuItem value={ "Lunes a viernes" }>Lunes a viernes</MenuItem>
            <MenuItem value={ "Sábado y Domingo" }>Sábado y Domingo</MenuItem>
          </Select>
        </FormControl>

      </Grid>
      <Grid item xs={ 12 }>
        <RelojCustom label={ "inicio" } value={ horaInicio } setValue={ setHoraInicio } />

      </Grid>
      <Grid item xs={ 12 }>
        <RelojCustom label={ "fin" } value={ horaFin } setValue={ setHoraFin } />
      </Grid>
    </>
  );
};