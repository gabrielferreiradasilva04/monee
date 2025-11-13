import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  Chip,
  Stack,
  LinearProgress,
  Paper,
} from "@mui/material";
import {
  TrendingUp,
  TrendingDown,
  CalendarToday,
  AttachMoney,
} from "@mui/icons-material";
import PageContainer from "../components/PageConteiner";

export default function FinancialGoal() {
  // Dados mockados baseados na estrutura fornecida
  const financialGoals = [
    {
      id: 1,
      title: "Reserva de Emergência",
      description: "Criar reserva para 6 meses de despesas",
      deadline: "2024-06-30T23:59:59",
      amount: 15000,
      goalType: "DESPESA",
    },
    {
      id: 2,
      title: "Investimento em Ações",
      description: "Aportar mensalmente em fundo de ações",
      deadline: "2024-12-31T23:59:59",
      amount: 5000,
      goalType: "RECEITA",
    },
    {
      id: 3,
      title: "Quitar Cartão de Crédito",
      description: "Eliminar dívidas do cartão até o final do ano",
      deadline: "2024-12-31T23:59:59",
      amount: 3000,
      goalType: "DESPESA",
    },
    {
      id: 4,
      title: "Fundo para Viagem",
      description: "Economizar para viagem internacional",
      deadline: "2024-08-15T23:59:59",
      amount: 8000,
      goalType: "DESPESA",
    },
    {
      id: 5,
      title: "Renda Extra",
      description: "Gerar renda extra com freelances",
      deadline: "2024-09-30T23:59:59",
      amount: 2000,
      goalType: "RECEITA",
    },
  ];

  // Função para calcular dias restantes
  const getDaysRemaining = (deadline) => {
    const today = new Date();
    const targetDate = new Date(deadline);
    const diffTime = targetDate - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? diffDays : 0;
  };

  // Função para calcular progresso (mockado)
  const getProgress = (goal) => {
    // Valores mockados para demonstração
    const mockProgress = {
      1: 65, // 65% concluído
      2: 30, // 30% concluído
      3: 45, // 45% concluído
      4: 20, // 20% concluído
      5: 75, // 75% concluído
    };
    return mockProgress[goal.id] || 0;
  };

  // Função para formatar data
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("pt-BR");
  };

  return (
    <PageContainer>
      <Box sx={{ width: "100%", maxWidth: "1200px", padding: 2 }}>
        {/* Header */}
        <Box sx={{ mb: 4, textAlign: "center" }}>
          <Typography
            variant="h4"
            component="h1"
            fontWeight="bold"
            color="primary.main"
            gutterBottom
          >
            Metas Financeiras
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Acompanhe suas metas e objetivos financeiros
          </Typography>
        </Box>

        {/* Grid de Metas */}
        <Grid container spacing={3}>
          {financialGoals.map((goal) => (
            <Grid key={goal.id} size={{ xs: 12, md: 6, lg: 4 }}>
              <Card
                sx={{
                  height: "100%",
                  transition: "transform 0.2s, box-shadow 0.2s",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: 4,
                  },
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  {/* Header da Meta */}
                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="flex-start"
                    sx={{ mb: 2 }}
                  >
                    <Typography
                      variant="h6"
                      component="h2"
                      fontWeight="bold"
                      sx={{ flex: 1 }}
                    >
                      {goal.title}
                    </Typography>
                    <Chip
                      icon={
                        goal.goalType === "RECEITA" ? (
                          <TrendingUp />
                        ) : (
                          <TrendingDown />
                        )
                      }
                      label={
                        goal.goalType === "RECEITA" ? "Receita" : "Despesa"
                      }
                      color={goal.goalType === "RECEITA" ? "success" : "error"}
                      size="small"
                      variant="outlined"
                    />
                  </Stack>

                  {/* Descrição */}
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 3 }}
                  >
                    {goal.description}
                  </Typography>

                  {/* Valor da Meta */}
                  <Paper
                    variant="outlined"
                    sx={{
                      p: 2,
                      mb: 2,
                      backgroundColor: "background.default",
                    }}
                  >
                    <Stack direction="row" alignItems="center" spacing={1}>
                      <AttachMoney color="primary" />
                      <Typography
                        variant="h6"
                        fontWeight="bold"
                        color="primary.main"
                      >
                        R$ {goal.amount.toLocaleString("pt-BR")}
                      </Typography>
                    </Stack>
                  </Paper>

                  {/* Progresso */}
                  <Box sx={{ mb: 3 }}>
                    <Stack
                      direction="row"
                      justifyContent="space-between"
                      sx={{ mb: 1 }}
                    >
                      <Typography variant="body2" color="text.secondary">
                        Progresso
                      </Typography>
                      <Typography variant="body2" fontWeight="bold">
                        {getProgress(goal)}%
                      </Typography>
                    </Stack>
                    <LinearProgress
                      variant="determinate"
                      value={getProgress(goal)}
                      color={goal.goalType === "RECEITA" ? "success" : "error"}
                      sx={{
                        height: 8,
                        borderRadius: 4,
                        backgroundColor: "grey.200",
                      }}
                    />
                  </Box>

                  {/* Prazo e Dias Restantes */}
                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    sx={{
                      pt: 2,
                      borderTop: "1px solid",
                      borderColor: "divider",
                    }}
                  >
                    <Stack direction="row" alignItems="center" spacing={1}>
                      <CalendarToday fontSize="small" color="action" />
                      <Typography variant="body2" color="text.secondary">
                        {formatDate(goal.deadline)}
                      </Typography>
                    </Stack>

                    <Chip
                      label={`${getDaysRemaining(goal.deadline)} dias`}
                      color={
                        getDaysRemaining(goal.deadline) < 30
                          ? "error"
                          : "primary"
                      }
                      variant="filled"
                      size="small"
                    />
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Mensagem quando não há metas */}
        {financialGoals.length === 0 && (
          <Paper
            sx={{
              p: 6,
              textAlign: "center",
              backgroundColor: "grey.50",
            }}
          >
            <Typography variant="h6" color="text.secondary" gutterBottom>
              Nenhuma meta financeira cadastrada
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Comece criando sua primeira meta financeira
            </Typography>
          </Paper>
        )}
      </Box>
    </PageContainer>
  );
}
