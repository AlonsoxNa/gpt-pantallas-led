import { AppTheme } from './theme';
import { AppRouter } from './routers/AppRouter';
import { BrowserRouter } from 'react-router-dom';

const TableroApp = () => {
  return (
    <AppTheme>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </AppTheme>
  );
};
export default TableroApp;