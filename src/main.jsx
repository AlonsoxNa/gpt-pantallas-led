import React from 'react';
import ReactDOM from 'react-dom/client';
import TableroApp from './TableroApp.jsx';
import './index.css';

// Fuente de roboto para mui
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


ReactDOM.createRoot( document.getElementById( 'root' ) ).render(
  <React.StrictMode>
    <TableroApp />
  </React.StrictMode>,
);
