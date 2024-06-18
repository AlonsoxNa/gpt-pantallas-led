import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import dayjs from 'dayjs';

export const DateCustom = ({ label, value, setValue }) => {

  const handleChangeValue = (newValue) => {
    setValue(newValue);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker', 'DatePicker']}>
        <DatePicker
          label={`Selecciona la fecha de ${label}`}
          value={value}
          minDate={dayjs().startOf('day')}
          onChange={handleChangeValue}
          sx={{ bgcolor: 'white' }}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
};