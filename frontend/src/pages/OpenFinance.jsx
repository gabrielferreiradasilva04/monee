import React from 'react';
import { 
  Box, 
  Typography, 
  Container, 
  Card, 
  CardContent, 
  Button,
  Stack,
  useTheme,
  useMediaQuery
} from '@mui/material';
import PageContainer from '../components/PageConteiner';
import { 
  AccountBalance, 
  Timeline, 
  Security, 
  TrendingUp,
  LockClock,
  NotificationsActive
} from '@mui/icons-material';

export default function OpenFinance() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const features = [
    {
      icon: <AccountBalance sx={{ fontSize: 40 }} />,
      title: 'Conecte suas Contas',
      description: 'Integração segura com instituições financeiras'
    },
    {
      icon: <Timeline sx={{ fontSize: 40 }} />,
      title: 'Análise Completa',
      description: 'Visualize todos seus gastos e investimentos'
    },
    {
      icon: <Security sx={{ fontSize: 40 }} />,
      title: 'Segurança Total',
      description: 'Seus dados protegidos com criptografia'
    },
    {
      icon: <TrendingUp sx={{ fontSize: 40 }} />,
      title: 'Insights Inteligentes',
      description: 'Recomendações personalizadas para você'
    }
  ];

  return (
    <PageContainer>
      <Container maxWidth="lg">
        <Box
          sx={{
            minHeight: '80vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            py: 8,
            px: 4,
          }}
        >
          {/* Header Section */}
          <Box sx={{ mb: 6 }}>
            <LockClock 
              sx={{ 
                fontSize: 80, 
                mb: 3,
                color: theme.palette.primary.main
              }} 
            />
            
            <Typography 
              variant="h2" 
              component="h1"
              fontWeight="bold"
              gutterBottom
              sx={{
                fontSize: isMobile ? '2.5rem' : '3.5rem',
                background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
                mb: 2
              }}
            >
              Open Finance
            </Typography>
            
            <Typography 
              variant="h5"
              color="text.secondary"
              sx={{ 
                mb: 4,
                maxWidth: '600px',
                fontSize: isMobile ? '1.2rem' : '1.5rem'
              }}
            >
              Revolucionando a forma como você controla sua vida financeira
            </Typography>
          </Box>

          {/* Main Card */}
          <Card
            sx={{
              background: `linear-gradient(135deg, ${theme.palette.primary.light}15, ${theme.palette.secondary.light}15)`,
              border: `1px solid ${theme.palette.primary.light}30`,
              borderRadius: 3,
              p: 4,
              mb: 6,
              maxWidth: '500px',
              width: '100%'
            }}
          >
            <CardContent>
              <NotificationsActive 
                sx={{ 
                  fontSize: 50, 
                  color: theme.palette.primary.main,
                  mb: 2
                }} 
              />
              
              <Typography 
                variant="h4" 
                component="h2"
                fontWeight="bold"
                gutterBottom
                color="primary"
              >
                Em Breve
              </Typography>
              
              <Typography 
                variant="body1"
                color="text.secondary"
                sx={{ 
                  mb: 3,
                  lineHeight: 1.6
                }}
              >
                Estamos trabalhando duro para trazer uma experiência completa de Open Finance. 
                Esta funcionalidade estará disponível em breve com integrações seguras e análises avançadas.
              </Typography>
              
              <Button
                variant="contained"
                size="large"
                disabled
                sx={{
                  background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                  color: 'white',
                  fontWeight: 'bold',
                  py: 1.5,
                  px: 4,
                  '&:disabled': {
                    background: theme.palette.grey[300],
                    color: theme.palette.grey[500]
                  }
                }}
              >
                Módulo em Desenvolvimento
              </Button>
            </CardContent>
          </Card>

          {/* Features Section */}
          <Box sx={{ width: '100%', textAlign: 'center' }}>
            <Typography 
              variant="h4" 
              component="h3"
              fontWeight="bold"
              color="primary"
              sx={{ mb: 4 }}
            >
              O que você poderá fazer
            </Typography>

            <Stack
              direction={isMobile ? 'column' : 'row'}
              spacing={3}
              justifyContent="center"
              alignItems={isMobile ? 'center' : 'stretch'}
              sx={{ maxWidth: '1000px', mx: 'auto' }}
            >
              {features.map((feature, index) => (
                <Card
                  key={index}
                  sx={{
                    background: 'white',
                    border: `1px solid ${theme.palette.primary.light}30`,
                    borderRadius: 2,
                    p: 3,
                    flex: 1,
                    minWidth: isMobile ? '100%' : '250px',
                    maxWidth: isMobile ? '100%' : '280px',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: `0 8px 25px ${theme.palette.primary.light}40`,
                      border: `1px solid ${theme.palette.primary.main}30`,
                    }
                  }}
                >
                  <CardContent sx={{ textAlign: 'center' }}>
                    <Box sx={{ color: theme.palette.primary.main, mb: 2 }}>
                      {feature.icon}
                    </Box>
                    <Typography variant="h6" component="h4" gutterBottom fontWeight="bold" color="primary">
                      {feature.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {feature.description}
                    </Typography>
                  </CardContent>
                </Card>
              ))}
            </Stack>
          </Box>

          {/* Footer Section */}
          <Box
            sx={{
              mt: 6,
              p: 3,
              background: `linear-gradient(135deg, ${theme.palette.primary.light}15, ${theme.palette.secondary.light}15)`,
              borderRadius: 2,
              border: `1px solid ${theme.palette.primary.light}30`,
              textAlign: 'center'
            }}
          >
            <Typography variant="body1" color="text.secondary">
              <strong>Previsão de lançamento:</strong> Primeiro trimestre de 2027
            </Typography>
          </Box>
        </Box>
      </Container>
    </PageContainer>
  );
}