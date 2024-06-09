import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

export const RelojCustom = ( { label, value, setValue } ) => {



  const handleChangeValue = ( newValue ) => {
    const formattedTime = newValue.format( 'HH:mm' );
    console.log( formattedTime );
    setValue( newValue );
  };

  return (
    <LocalizationProvider dateAdapter={ AdapterDayjs }>
      <DemoContainer components={ [ 'TimePicker' ] }>
        <TimePicker
          label={ `Selecciona la hora de ${ label }` }
          value={ value }
          onChange={ handleChangeValue }
        />
      </DemoContainer>
    </LocalizationProvider>
  );
};