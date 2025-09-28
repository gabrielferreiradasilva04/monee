import React from 'react';
import { Box, Typography, Button, Container, Paper } from '@mui/material';
import { Home as HomeIcon, SearchOff as SearchOffIcon } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        py: 4
      }}
    >
      <Container maxWidth="md">
        <Paper
          elevation={10}
          sx={{
            p: 5,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            borderRadius: 3,
            background: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(10px)'
          }}
        >
          <SearchOffIcon
            sx={{
              fontSize: 100,
              color: 'primary.main',
              mb: 2
            }}
          />
          
          <Typography
            variant="h1"
            component="h1"
            sx={{
              fontSize: { xs: '4rem', md: '6rem' },
              fontWeight: 'bold',
              color: 'primary.main',
              mb: 1,
              textShadow: '2px 2px 4px rgba(0,0,0,0.1)'
            }}
          >
            404
          </Typography>
          
          <Typography
            variant="h4"
            component="h2"
            sx={{
              fontWeight: 'bold',
              color: 'secondary.main',
              mb: 3
            }}
          >
            Página não encontrada
          </Typography>
          
          <Typography
            variant="body1"
            sx={{
              color: 'text.secondary',
              maxWidth: '500px',
              mb: 4
            }}
          >
            Desculpe, a página que você está procurando não existe ou foi movida.
            Verifique o URL ou retorne à página inicial do nosso módulo OpenFinance.
          </Typography>
          
          <Box
            sx={{
              display: 'flex',
              gap: 2,
              flexWrap: 'wrap',
              justifyContent: 'center'
            }}
          >
            <Button
              variant="contained"
              size="large"
              startIcon={<HomeIcon />}
              onClick={handleGoHome}
              sx={{
                px: 4,
                py: 1,
                borderRadius: 2,
                fontWeight: 'bold',
                background: `linear-gradient(45deg, ${theme.palette.primary.main} 0%, #1a9c4d 100%)`,
                '&:hover': {
                  background: `linear-gradient(45deg, #1a9c4d 0%, ${theme.palette.primary.main} 100%)`,
                  transform: 'translateY(-2px)',
                  boxShadow: 4
                },
                transition: 'all 0.3s ease'
              }}
            >
              Página Inicial
            </Button>
            
            <Button
              variant="outlined"
              size="large"
              sx={{
                px: 4,
                py: 1,
                borderRadius: 2,
                fontWeight: 'bold',
                color: 'secondary.main',
                borderColor: 'secondary.main',
                '&:hover': {
                  backgroundColor: 'secondary.main',
                  color: 'white',
                  transform: 'translateY(-2px)',
                  boxShadow: 4
                },
                transition: 'all 0.3s ease'
              }}
            >
              Suporte
            </Button>
          </Box>
          
          <Box
            sx={{
              mt: 5,
              display: 'flex',
              alignItems: 'center',
              color: 'primary.main'
            }}
          >
            <Typography variant="body2" sx={{ fontStyle: 'italic' }}>
              OpenFinance • Conectando seu futuro financeiro
            </Typography>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default NotFound;