import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  Stack,
  Paper,
  Chip,
  CircularProgress,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";
import PageContainer from "../components/PageConteiner";

export default function Overview() {
  const lineChartRef = useRef(null);
  const doughnutChartRef = useRef(null);
  const barChartRef = useRef(null);
  const [loading, setLoading] = useState(true);

  // Dados mockados
  const kpiData = {
    totalBalance: 358.20,
    monthlyIncome: 2850,
    monthlyExpenses: 2480.80,
    savingsRate: 25.8,
  };

  useEffect(() => {
    // Simular loading de 3 segundos
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (loading) return;

    // Gráfico de Linha - Receitas vs Despesas
    if (lineChartRef.current) {
      new Chart(lineChartRef.current, {
        type: "line",
        data: {
          labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun"],
          datasets: [
            {
              label: "Receitas",
              data: [3200, 4500, 3800, 5200, 4100, 4800],
              borderColor: "#2E7D32",
              backgroundColor: "rgba(46, 125, 50, 0.1)",
              tension: 0.4,
              fill: true,
            },
            {
              label: "Despesas",
              data: [2800, 3200, 3500, 3100, 3800, 4200],
              borderColor: "#D32F2F",
              backgroundColor: "rgba(211, 47, 47, 0.1)",
              tension: 0.4,
              fill: true,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: "top",
            },
          },
        },
      });
    }

    // Gráfico de Rosca - Categorias de Gastos
    if (doughnutChartRef.current) {
      new Chart(doughnutChartRef.current, {
        type: "doughnut",
        data: {
          labels: ["Moradia", "Alimentação", "Transporte", "Lazer", "Outros"],
          datasets: [
            {
              data: [35, 20, 15, 10, 20],
              backgroundColor: [
                "#2E7D32",
                "#4CAF50",
                "#66BB6A",
                "#81C784",
                "#A5D6A7",
              ],
              borderWidth: 0,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: "bottom",
            },
          },
        },
      });
    }

    // Gráfico de Barras - Saldo Mensal
    if (barChartRef.current) {
      new Chart(barChartRef.current, {
        type: "bar",
        data: {
          labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun"],
          datasets: [
            {
              label: "Saldo Mensal",
              data: [400, 1300, 300, 2100, 300, 600],
              backgroundColor: "#2196F3",
              borderRadius: 4,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false,
            },
          },
        },
      });
    }
  }, [loading]);

  if (loading) {
    return (
      <PageContainer>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "50vh",
          }}
        >
          <Stack spacing={2} alignItems="center">
            <CircularProgress size={60} />
            <Typography variant="h6" color="textSecondary">
              Carregando dados...
            </Typography>
          </Stack>
        </Box>
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <Box sx={{ width: "100%", maxWidth: "1200px", padding: 2 }}>
        {/* KPIs Cards - Linha Superior */}
        <Grid container spacing={2} sx={{ mb: 3 }} justifyContent="center">
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <Card sx={{ height: "100%" }}>
              <CardContent>
                <Typography
                  color="textSecondary"
                  gutterBottom
                  variant="overline"
                >
                  Saldo Total
                </Typography>
                <Typography variant="h5" fontWeight="bold" color="primary.main">
                  R$ {kpiData.totalBalance.toLocaleString("pt-BR")}
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <Card sx={{ height: "100%" }}>
              <CardContent>
                <Typography
                  color="textSecondary"
                  gutterBottom
                  variant="overline"
                >
                  Receitas
                </Typography>
                <Typography variant="h5" fontWeight="bold" color="success.main">
                  R$ {kpiData.monthlyIncome.toLocaleString("pt-BR")}
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <Card sx={{ height: "100%" }}>
              <CardContent>
                <Typography
                  color="textSecondary"
                  gutterBottom
                  variant="overline"
                >
                  Despesas
                </Typography>
                <Typography variant="h5" fontWeight="bold" color="error.main">
                  R$ {kpiData.monthlyExpenses.toLocaleString("pt-BR")}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Gráficos Principais */}
        <Grid container spacing={2} sx={{ mb: 2 }}>
          <Grid size={{ xs: 12, lg: 8 }}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom fontWeight="bold">
                  Receitas vs Despesas
                </Typography>
                <Box sx={{ height: 250 }}>
                  <canvas ref={lineChartRef} />
                </Box>
              </CardContent>
            </Card>
          </Grid>

          <Grid size={{ xs: 12, lg: 4 }}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom fontWeight="bold">
                  Gastos por Categoria
                </Typography>
                <Box sx={{ height: 250 }}>
                  <canvas ref={doughnutChartRef} />
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Gráfico de Barras ocupando toda a parte de baixo */}
        <Grid container spacing={2}>
          <Grid size={{ xs: 12 }}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom fontWeight="bold">
                  Saldo Mensal
                </Typography>
                <Box sx={{ height: 300 }}>
                  <canvas ref={barChartRef} />
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </PageContainer>
  );
}