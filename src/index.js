import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import App from './components/App';
import './index.css';

// создаём тему
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // синий
    },
    secondary: {
      main: '#9c27b0', // фиолетовый
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);
