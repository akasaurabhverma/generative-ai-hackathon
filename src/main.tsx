import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import './index.css';
import {ThemeProvider} from '@mui/material';
import {theme} from './theme-customization';
import App from './App';
import {SnackbarProvider} from 'notistack';
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <SnackbarProvider
        maxSnack={3}
        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
        autoHideDuration={3000}
        transitionDuration={{enter: 200, exit: 200}}
      >
        <App />
      </SnackbarProvider>
    </ThemeProvider>
  </React.StrictMode>
);
