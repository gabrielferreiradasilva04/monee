import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  Stack,
  Paper,
  Chip,
} from "@mui/material";
import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import PageContainer from "../components/PageConteiner";

export default function Overview() {
  const lineChartRef = useRef(null);
  const doughnutChartRef = useRef(null);
  const barChartRef = useRef(null);

  // Dados mockados
  const kpiData = {
    totalBalance: 12500,
    monthlyIncome: 5800,
    monthlyExpenses: 4300,
    savingsRate: 25.8,
  };

  const recentTransactions = [
    {
      id: 1,
      description: "Salário",
      amount: 5800,
      type: "income",
      date: "15/11/2023",
    },
    {
      id: 2,
      description: "Aluguel",
      amount: -1200,
      type: "expense",
      date: "10/11/2023",
    },
    {
      id: 3,
      description: "Mercado",
      amount: -450,
      type: "expense",
      date: "08/11/2023",
    },
    {
      id: 4,
      description: "Freelance",
      amount: 1200,
      type: "income",
      date: "05/11/2023",
    },
  ];

  useEffect(() => {
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
  }, []);

  return (
    <PageContainer>
      <Box sx={{ width: "100%", maxWidth: "1200px", padding: 2 }}>
        {/* KPIs Cards - Linha Superior */}
        <Grid container spacing={2} sx={{ mb: 3 }}>
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
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

          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
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

          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
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

          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Card sx={{ height: "100%" }}>
              <CardContent>
                <Typography
                  color="textSecondary"
                  gutterBottom
                  variant="overline"
                >
                  Economia
                </Typography>
                <Typography variant="h5" fontWeight="bold" color="info.main">
                  {kpiData.savingsRate}%
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

        {/* Segunda Linha */}
        <Grid container spacing={2} sx={{ mb: 2 }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom fontWeight="bold">
                  Saldo Mensal
                </Typography>
                <Box sx={{ height: 200 }}>
                  <canvas ref={barChartRef} />
                </Box>
              </CardContent>
            </Card>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Card sx={{ height: "100%" }}>
              <CardContent>
                <Typography variant="h6" gutterBottom fontWeight="bold">
                  Transações Recentes
                </Typography>
                <Stack spacing={1.5}>
                  {recentTransactions.map((transaction) => (
                    <Paper
                      key={transaction.id}
                      variant="outlined"
                      sx={{ p: 1.5 }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <Box>
                          <Typography variant="body2" fontWeight="medium">
                            {transaction.description}
                          </Typography>
                          <Typography variant="caption" color="textSecondary">
                            {transaction.date}
                          </Typography>
                        </Box>
                        <Box sx={{ textAlign: "right" }}>
                          <Typography
                            variant="body1"
                            color={
                              transaction.type === "income"
                                ? "success.main"
                                : "error.main"
                            }
                            fontWeight="bold"
                          >
                            {transaction.amount > 0 ? "+" : ""}
                            {transaction.amount.toLocaleString("pt-BR", {
                              style: "currency",
                              currency: "BRL",
                            })}
                          </Typography>
                        </Box>
                      </Box>
                    </Paper>
                  ))}
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Resumo Simples */}
        <Grid container spacing={2}>
          <Grid size={{ xs: 12 }}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom fontWeight="bold">
                  Resumo do Mês
                </Typography>
                <Grid container spacing={3}>
                  <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                    <Typography variant="body2" color="textSecondary">
                      Receita Total
                    </Typography>
                    <Typography
                      variant="h6"
                      fontWeight="bold"
                      color="success.main"
                    >
                      R$ 5.800
                    </Typography>
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                    <Typography variant="body2" color="textSecondary">
                      Despesa Total
                    </Typography>
                    <Typography
                      variant="h6"
                      fontWeight="bold"
                      color="error.main"
                    >
                      R$ 4.300
                    </Typography>
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                    <Typography variant="body2" color="textSecondary">
                      Saldo
                    </Typography>
                    <Typography
                      variant="h6"
                      fontWeight="bold"
                      color="primary.main"
                    >
                      R$ 1.500
                    </Typography>
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                    <Typography variant="body2" color="textSecondary">
                      Economia
                    </Typography>
                    <Typography
                      variant="h6"
                      fontWeight="bold"
                      color="info.main"
                    >
                      25.8%
                    </Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </PageContainer>
  );
}
