import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import './index.css';
import {ThemeProvider} from '@mui/material';
import {theme} from './theme-customization';
import App from './App';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
