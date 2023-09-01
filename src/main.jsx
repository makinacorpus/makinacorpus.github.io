import React from 'react';
import ReactDOM from 'react-dom/client';

import {
  createTheme,
  CssBaseline,
  responsiveFontSizes,
  ThemeProvider,
} from '@mui/material';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import App from './App';

const queryClient = new QueryClient();

const theme = responsiveFontSizes(createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          borderTop: '5px solid #d0dd2a',
        },
      },
    },
  },
  palette: {
    primary: {
      main: '#adb31b',
    },
    background: {
      default: '#fafafa',
    },
  },
}));

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>,
);
