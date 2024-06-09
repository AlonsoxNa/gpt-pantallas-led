import { FormControl, Grid, InputLabel, MenuItem, Select } from '@mui/material';
import { RelojCustom } from './RelojCustom';
import { useMensajeStore } from '../../store/mensaje.store';

export const MensajeProgramadoForm = () => {

  const { data, setDias, setHoraInicio, setHoraFin } = useMensajeStore();

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
            value={ data.dias }
            label="Selecciona los días"
            defaultValue={ data.dias }
            onChange={ handleChangeDias }
          >
            <MenuItem value={ "Todos los días" }>Todos los días</MenuItem>
            <MenuItem value={ "Lunes a viernes" }>Lunes a viernes</MenuItem>
            <MenuItem value={ "Sábado y Domingo" }>Sábado y Domingo</MenuItem>
          </Select>
        </FormControl>

      </Grid>
      <Grid item xs={ 12 }>
        <RelojCustom label={ "inicio" } value={ data.horaInicio } setValue={ setHoraInicio } />
      </Grid>
      <Grid item xs={ 12 }>
        <RelojCustom label={ "fin" } value={ data.horaFin } setValue={ setHoraFin } />
      </Grid>
    </>
  );
};