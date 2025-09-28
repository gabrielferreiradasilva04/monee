import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#22C55E', // azul principal
    },
    secondary: {
      main: '#0A1744', // rosa/vinho secundário
    },
    success: {
      main: '#4caf50', // verde para status positivo
    },
    warning: {
      main: '#ff9800', // laranja para alertas
    },
    error: {
      main: '#f44336', // vermelho para erros
    },
    action: {
        main: '#F97316'
    },
    background: {
      default: '#f5f5f5', // fundo da aplicação
      paper: '#ffffff',   // fundo de cards/painéis
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif', // padrão do MUI
  },
});

export default theme;
