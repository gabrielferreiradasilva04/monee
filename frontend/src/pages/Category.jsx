import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Container,
  Button,
  Stack,
  useTheme,
  Paper,
} from "@mui/material";
import {
  Category as CategoryIcon,
  Construction,
  Schedule,
  NotificationsActive,
} from "@mui/icons-material";
import PageContainer from "../components/PageConteiner";

export default function Category() {
  const theme = useTheme();

  const features = [
    {
      icon: <CategoryIcon sx={{ fontSize: 40 }} />,
      title: "Organização por Categorias",
      description: "Classifique suas transações por categorias personalizadas",
    },
    {
      icon: <Schedule sx={{ fontSize: 40 }} />,
      title: "Análise Detalhada",
      description:
        "Visualize gastos e receitas por categoria ao longo do tempo",
    },
    {
      icon: <NotificationsActive sx={{ fontSize: 40 }} />,
      title: "Controle Inteligente",
      description: "Defina limites de gastos por categoria e receba alertas",
    },
  ];

  return (
    <PageContainer>
      <Container maxWidth="lg">
        <Box
          sx={{
            minHeight: "80vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            py: 8,
            px: 2,
          }}
        >
          {/* Header Section */}
          <Box sx={{ textAlign: "center", mb: 6 }}>
            <Construction
              sx={{
                fontSize: 80,
                mb: 3,
                color: theme.palette.primary.main,
              }}
            />

            <Typography
              variant="h2"
              component="h1"
              fontWeight="bold"
              gutterBottom
              sx={{
                fontSize: { xs: "2.5rem", md: "3.5rem" },
                background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                color: "transparent",
                mb: 2,
              }}
            >
              Categorias
            </Typography>

            <Typography
              variant="h5"
              color="text.secondary"
              sx={{
                mb: 4,
                maxWidth: "600px",
              }}
            >
              Organize suas finanças de forma inteligente com nosso sistema de
              categorização
            </Typography>
          </Box>

          {/* Main Message Card */}
          <Card
            sx={{
              background: `linear-gradient(135deg, ${theme.palette.primary.light}15, ${theme.palette.secondary.light}15)`,
              border: `1px solid ${theme.palette.primary.light}30`,
              borderRadius: 2,
              p: 4,
              mb: 6,
              maxWidth: "500px",
              width: "100%",
            }}
          >
            <CardContent sx={{ textAlign: "center" }}>
              <Schedule
                sx={{
                  fontSize: 50,
                  color: theme.palette.primary.main,
                  mb: 2,
                }}
              />

              <Typography
                variant="h4"
                component="h2"
                fontWeight="bold"
                gutterBottom
                color="primary"
              >
                Em Desenvolvimento
              </Typography>

              <Typography
                variant="body1"
                color="text.secondary"
                sx={{
                  mb: 3,
                  lineHeight: 1.6,
                }}
              >
                Estamos trabalhando na criação de um sistema completo de
                categorização para melhorar sua experiência no controle
                financeiro. Esta funcionalidade estará disponível em breve!
              </Typography>

              <Button
                variant="contained"
                size="large"
                disabled
                sx={{
                  background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                  color: "white",
                  fontWeight: "bold",
                  py: 1.5,
                  px: 4,
                  "&:disabled": {
                    background: theme.palette.grey[300],
                    color: theme.palette.grey[500],
                  },
                }}
              >
                Em Breve
              </Button>
            </CardContent>
          </Card>

          {/* Features Section */}
          <Box sx={{ width: "100%", textAlign: "center" }}>
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
              direction={{ xs: "column", md: "row" }}
              spacing={3}
              justifyContent="center"
              sx={{ maxWidth: "1000px", mx: "auto" }}
            >
              {features.map((feature, index) => (
                <Card
                  key={index}
                  sx={{
                    background: "white",
                    border: `1px solid ${theme.palette.primary.light}30`,
                    borderRadius: 2,
                    p: 3,
                    flex: 1,
                    minWidth: { xs: "100%", md: "280px" },
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-4px)",
                      boxShadow: `0 8px 25px ${theme.palette.primary.light}40`,
                    },
                  }}
                >
                  <CardContent sx={{ textAlign: "center" }}>
                    <Box sx={{ color: theme.palette.primary.main, mb: 2 }}>
                      {feature.icon}
                    </Box>
                    <Typography
                      variant="h6"
                      component="h4"
                      gutterBottom
                      fontWeight="bold"
                      color="primary"
                    >
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

          {/* Footer Info */}
          <Paper
            sx={{
              mt: 6,
              p: 3,
              background: `linear-gradient(135deg, ${theme.palette.primary.light}15, ${theme.palette.secondary.light}15)`,
              borderRadius: 2,
              border: `1px solid ${theme.palette.primary.light}30`,
              textAlign: "center",
            }}
          >
            <Typography variant="body1" color="text.secondary">
              <strong>Previsão de lançamento:</strong> Primeiro trimestre de
              2024
            </Typography>
          </Paper>
        </Box>
      </Container>
    </PageContainer>
  );
}
