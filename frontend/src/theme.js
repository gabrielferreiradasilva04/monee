import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#22C55E',
    },
    secondary: {
      main: '#0A1744', 
    },
    success: {
      main: '#4caf50', 
    },
    warning: {
      main: '#ff9800', 
    },
    error: {
      main: '#f44336', 
    },
    action: {
        main: '#F97316'
    },
    background: {
      default: '#f5f5f5', 
      paper: '#ffffff',   
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif', 
  },
});

export default theme;
