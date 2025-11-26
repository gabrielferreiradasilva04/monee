import React, { useState } from "react";
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
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  MenuItem,
  Avatar,
  Container,
  IconButton,
  Tooltip,
  Divider,
  Alert,
} from "@mui/material";
import {
  TrendingUp,
  TrendingDown,
  CalendarToday,
  AttachMoney,
  Add,
  Edit,
  Delete,
  Savings,
  Flight,
  School,
  Home,
  CarRental,
  HealthAndSafety,
  ShoppingBag,
  CheckCircle,
} from "@mui/icons-material";
import PageContainer from "../components/PageConteiner";

export default function FinancialGoal() {
  // Estados para controle
  const [financialGoals, setFinancialGoals] = useState([
    {
      id: 1,
      title: "Reserva de Emergência",
      description: "Criar reserva para 6 meses de despesas essenciais",
      dueDate: "2024-06-30",
      amount: 15000,
      financialGoalType: "DESPESA",
      progress: 65,
      category: "emergency",
      createdAt: "2024-01-15",
    },
    {
      id: 2,
      title: "Investimento em Ações",
      description: "Aportar mensalmente em fundo de ações diversificado",
      dueDate: "2024-12-31",
      amount: 5000,
      financialGoalType: "RECEITA",
      progress: 30,
      category: "investment",
      createdAt: "2024-01-10",
    },
    {
      id: 3,
      title: "Quitar Cartão de Crédito",
      description: "Eliminar dívidas do cartão até o final do ano",
      dueDate: "2024-12-31",
      amount: 3000,
      financialGoalType: "DESPESA",
      progress: 45,
      category: "debt",
      createdAt: "2024-01-20",
    },
    {
      id: 4,
      title: "Fundo para Viagem",
      description: "Economizar para viagem internacional à Europa",
      dueDate: "2024-08-15",
      amount: 8000,
      financialGoalType: "DESPESA",
      progress: 20,
      category: "travel",
      createdAt: "2024-01-05",
    },
    {
      id: 5,
      title: "Renda Extra",
      description: "Gerar renda extra com freelances e projetos",
      dueDate: "2024-09-30",
      amount: 2000,
      financialGoalType: "RECEITA",
      progress: 75,
      category: "income",
      createdAt: "2024-01-12",
    },
    {
      id: 6,
      title: "Curso de Especialização",
      description: "Investir em curso para desenvolvimento profissional",
      dueDate: "2024-07-30",
      amount: 2500,
      financialGoalType: "DESPESA",
      progress: 90,
      category: "education",
      createdAt: "2024-01-08",
    },
  ]);

  const [createDialogOpen, setCreateDialogOpen] = useState(false);
  const [newGoal, setNewGoal] = useState({
    title: "",
    description: "",
    dueDate: "",
    amount: "",
    financialGoalType: "DESPESA",
    category: "other",
  });

  // Categorias disponíveis
  const categories = [
    {
      value: "emergency",
      label: "Reserva de Emergência",
      icon: <Savings />,
      color: "#EF4444",
    },
    {
      value: "investment",
      label: "Investimentos",
      icon: <TrendingUp />,
      color: "#10B981",
    },
    { value: "travel", label: "Viagem", icon: <Flight />, color: "#8B5CF6" },
    {
      value: "education",
      label: "Educação",
      icon: <School />,
      color: "#3B82F6",
    },
    { value: "home", label: "Casa", icon: <Home />, color: "#F59E0B" },
    {
      value: "vehicle",
      label: "Veículo",
      icon: <CarRental />,
      color: "#6366F1",
    },
    {
      value: "health",
      label: "Saúde",
      icon: <HealthAndSafety />,
      color: "#EC4899",
    },
    {
      value: "shopping",
      label: "Compras",
      icon: <ShoppingBag />,
      color: "#06B6D4",
    },
    {
      value: "other",
      label: "Outros",
      icon: <AttachMoney />,
      color: "#6B7280",
    },
  ];

  // Tipos de meta
  const goalTypes = [
    { value: "DESPESA", label: "Despesa" },
    { value: "RECEITA", label: "Receita" },
  ];

  // Função para calcular dias restantes
  const getDaysRemaining = (dueDate) => {
    const today = new Date();
    const targetDate = new Date(dueDate);
    const diffTime = targetDate - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? diffDays : 0;
  };

  // Função para formatar data
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("pt-BR");
  };

  // Função para formatar valor monetário
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(amount);
  };

  // Função para obter ícone da categoria
  const getCategoryIcon = (category) => {
    const cat = categories.find((c) => c.value === category);
    return cat ? cat.icon : <AttachMoney />;
  };

  // Função para obter cor da categoria
  const getCategoryColor = (category) => {
    const cat = categories.find((c) => c.value === category);
    return cat ? cat.color : "#6B7280";
  };

  // Função para obter label da categoria
  const getCategoryLabel = (category) => {
    const cat = categories.find((c) => c.value === category);
    return cat ? cat.label : "Outros";
  };

  // Função para abrir dialog de criação
  const handleOpenCreateDialog = () => {
    setNewGoal({
      title: "",
      description: "",
      dueDate: "",
      amount: "",
      financialGoalType: "DESPESA",
      category: "other",
    });
    setCreateDialogOpen(true);
  };

  // Função para fechar dialog de criação
  const handleCloseCreateDialog = () => {
    setCreateDialogOpen(false);
  };

  // Função para criar nova meta
  const handleCreateGoal = () => {
    if (
      !newGoal.title ||
      !newGoal.description ||
      !newGoal.dueDate ||
      !newGoal.amount
    ) {
      alert("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    const goal = {
      id: Date.now(),
      title: newGoal.title,
      description: newGoal.description,
      dueDate: newGoal.dueDate,
      amount: parseFloat(newGoal.amount),
      financialGoalType: newGoal.financialGoalType,
      category: newGoal.category,
      progress: 0,
      createdAt: new Date().toISOString().split("T")[0],
    };

    setFinancialGoals((prev) => [goal, ...prev]);
    handleCloseCreateDialog();
  };

  // Função para deletar meta
  const handleDeleteGoal = (id) => {
    if (window.confirm("Tem certeza que deseja excluir esta meta?")) {
      setFinancialGoals((prev) => prev.filter((goal) => goal.id !== id));
    }
  };

  // Calcular estatísticas (apenas as duas primeiras)
  const totalGoals = financialGoals.length;
  const completedGoals = financialGoals.filter(
    (goal) => goal.progress === 100
  ).length;

  return (
    <PageContainer>
      <Box sx={{ py: 4 }}>
        {/* Header Aprimorado */}
        <Paper
          sx={{
            p: 4,
            mb: 4,
            background: "linear-gradient(135deg, #22C55E 0%, #16A34A 100%)",
            color: "white",
            borderRadius: 3,
            boxShadow: "0 8px 32px rgba(34, 197, 94, 0.2)",
          }}
        >
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={3}
            alignItems="center"
            justifyContent="space-between"
          >
            <Box>
              <Typography variant="h3" fontWeight="bold" gutterBottom>
                Metas Financeiras
              </Typography>
              <Typography variant="h6" sx={{ opacity: 0.9 }}>
                Acompanhe e gerencie seus objetivos financeiros
              </Typography>
            </Box>

            <Button
              variant="contained"
              startIcon={<Add />}
              onClick={handleOpenCreateDialog}
              sx={{
                backgroundColor: "rgba(255,255,255,0.2)",
                color: "white",
                border: "1px solid rgba(255,255,255,0.3)",
                "&:hover": {
                  backgroundColor: "rgba(255,255,255,0.3)",
                },
                px: 4,
                py: 1.5,
                borderRadius: 2,
              }}
            >
              Nova Meta
            </Button>
          </Stack>
        </Paper>

        {/* Estatísticas Rápidas - Apenas os dois primeiros cards */}
        <Grid container spacing={3} sx={{ mb: 4 }}>
          <Grid size={{ xs: 12, sm: 6 }}>
            <Card
              sx={{ borderRadius: 3, boxShadow: "0 4px 20px rgba(0,0,0,0.08)" }}
            >
              <CardContent sx={{ textAlign: "center", p: 3 }}>
                <Typography
                  variant="h4"
                  fontWeight="bold"
                  color="#22C55E"
                  gutterBottom
                >
                  {totalGoals}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Metas Ativas
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
            <Card
              sx={{ borderRadius: 3, boxShadow: "0 4px 20px rgba(0,0,0,0.08)" }}
            >
              <CardContent sx={{ textAlign: "center", p: 3 }}>
                <Typography
                  variant="h4"
                  fontWeight="bold"
                  color="#10B981"
                  gutterBottom
                >
                  {completedGoals}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Concluídas
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Grid de Metas Aprimorado */}
        <Grid container spacing={3}>
          {financialGoals.map((goal) => (
            <Grid key={goal.id} size={{ xs: 12, md: 6, lg: 4 }}>
              <Card
                sx={{
                  height: "100%",
                  borderRadius: 3,
                  boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                  transition: "all 0.3s ease-in-out",
                  border: `1px solid ${getCategoryColor(goal.category)}20`,
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: `0 12px 40px ${getCategoryColor(
                      goal.category
                    )}40`,
                  },
                }}
              >
                <CardContent sx={{ p: 3, position: "relative" }}>
                  {/* Header com Categoria */}
                  <Stack
                    direction="row"
                    alignItems="center"
                    spacing={2}
                    sx={{ mb: 2 }}
                  >
                    <Avatar
                      sx={{
                        bgcolor: `${getCategoryColor(goal.category)}20`,
                        color: getCategoryColor(goal.category),
                        width: 48,
                        height: 48,
                      }}
                    >
                      {getCategoryIcon(goal.category)}
                    </Avatar>
                    <Box sx={{ flex: 1 }}>
                      <Typography variant="h6" fontWeight="bold" noWrap>
                        {goal.title}
                      </Typography>
                      <Chip
                        label={getCategoryLabel(goal.category)}
                        size="small"
                        sx={{
                          backgroundColor: `${getCategoryColor(
                            goal.category
                          )}20`,
                          color: getCategoryColor(goal.category),
                          fontWeight: "medium",
                        }}
                      />
                    </Box>

                    {/* Ações Rápidas */}
                    <Stack direction="row" spacing={0.5}>
                      <Tooltip title="Editar">
                        <IconButton size="small">
                          <Edit fontSize="small" />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Excluir">
                        <IconButton
                          size="small"
                          color="error"
                          onClick={() => handleDeleteGoal(goal.id)}
                        >
                          <Delete fontSize="small" />
                        </IconButton>
                      </Tooltip>
                    </Stack>
                  </Stack>

                  {/* Descrição */}
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      mb: 3,
                      minHeight: 40,
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}
                  >
                    {goal.description}
                  </Typography>

                  {/* Valor e Tipo */}
                  <Paper
                    variant="outlined"
                    sx={{
                      p: 2,
                      mb: 3,
                      backgroundColor: "background.default",
                      borderRadius: 2,
                      borderLeft: `4px solid ${getCategoryColor(
                        goal.category
                      )}`,
                    }}
                  >
                    <Stack
                      direction="row"
                      justifyContent="space-between"
                      alignItems="center"
                    >
                      <Stack direction="row" alignItems="center" spacing={1}>
                        <AttachMoney
                          sx={{
                            color:
                              goal.financialGoalType === "RECEITA"
                                ? "#10B981"
                                : "#EF4444",
                          }}
                        />
                        <Typography
                          variant="h6"
                          fontWeight="bold"
                          color={
                            goal.financialGoalType === "RECEITA"
                              ? "#10B981"
                              : "#EF4444"
                          }
                        >
                          {formatCurrency(goal.amount)}
                        </Typography>
                      </Stack>
                      <Chip
                        icon={
                          goal.financialGoalType === "RECEITA" ? (
                            <TrendingUp />
                          ) : (
                            <TrendingDown />
                          )
                        }
                        label={
                          goal.financialGoalType === "RECEITA"
                            ? "Receita"
                            : "Despesa"
                        }
                        color={
                          goal.financialGoalType === "RECEITA"
                            ? "success"
                            : "error"
                        }
                        size="small"
                        variant="outlined"
                      />
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
                      <Stack direction="row" alignItems="center" spacing={1}>
                        {goal.progress === 100 && (
                          <CheckCircle
                            sx={{ color: "#10B981", fontSize: 16 }}
                          />
                        )}
                        <Typography variant="body2" fontWeight="bold">
                          {goal.progress}%
                        </Typography>
                      </Stack>
                    </Stack>
                    <LinearProgress
                      variant="determinate"
                      value={goal.progress}
                      sx={{
                        height: 8,
                        borderRadius: 4,
                        backgroundColor: "grey.200",
                        "& .MuiLinearProgress-bar": {
                          backgroundColor:
                            goal.progress === 100
                              ? "#10B981"
                              : getCategoryColor(goal.category),
                          borderRadius: 4,
                        },
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
                        {formatDate(goal.dueDate)}
                      </Typography>
                    </Stack>

                    <Chip
                      label={`${getDaysRemaining(goal.dueDate)} dias`}
                      color={
                        getDaysRemaining(goal.dueDate) < 30
                          ? "error"
                          : getDaysRemaining(goal.dueDate) < 90
                          ? "warning"
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
              borderRadius: 3,
            }}
          >
            <Savings sx={{ fontSize: 64, color: "grey.400", mb: 2 }} />
            <Typography variant="h5" color="text.secondary" gutterBottom>
              Nenhuma meta financeira cadastrada
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
              Comece criando sua primeira meta financeira para organizar seus
              objetivos
            </Typography>
            <Button
              variant="contained"
              startIcon={<Add />}
              onClick={handleOpenCreateDialog}
              sx={{
                backgroundColor: "#22C55E",
                "&:hover": {
                  backgroundColor: "#16A34A",
                },
              }}
            >
              Criar Primeira Meta
            </Button>
          </Paper>
        )}

        {/* Dialog de Criação de Meta - CORRIGIDO */}
        <Dialog
          open={createDialogOpen}
          onClose={handleCloseCreateDialog}
          maxWidth="sm"
          fullWidth
          PaperProps={{
            sx: { borderRadius: 3 },
          }}
        >
          <DialogTitle
            sx={{
              backgroundColor: "#22C55E",
              color: "white",
              borderTopLeftRadius: 3,
              borderTopRightRadius: 3,
            }}
          >
            <Typography variant="h6" fontWeight="bold" component="div">
              Nova Meta Financeira
            </Typography>
          </DialogTitle>

          <DialogContent sx={{ mt: 2 }}>
            <Stack spacing={3}>
              <TextField
                label="Título da Meta"
                value={newGoal.title}
                onChange={(e) =>
                  setNewGoal({ ...newGoal, title: e.target.value })
                }
                fullWidth
                required
              />

              <TextField
                label="Descrição"
                value={newGoal.description}
                onChange={(e) =>
                  setNewGoal({ ...newGoal, description: e.target.value })
                }
                fullWidth
                multiline
                rows={3}
                required
              />

              <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                <TextField
                  label="Valor"
                  type="number"
                  value={newGoal.amount}
                  onChange={(e) =>
                    setNewGoal({ ...newGoal, amount: e.target.value })
                  }
                  fullWidth
                  required
                  InputProps={{
                    startAdornment: (
                      <AttachMoney color="action" sx={{ mr: 1 }} />
                    ),
                  }}
                />

                <TextField
                  label="Data Limite"
                  type="date"
                  value={newGoal.dueDate}
                  onChange={(e) =>
                    setNewGoal({ ...newGoal, dueDate: e.target.value })
                  }
                  fullWidth
                  required
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Stack>

              <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                <TextField
                  select
                  label="Tipo"
                  value={newGoal.financialGoalType}
                  onChange={(e) =>
                    setNewGoal({
                      ...newGoal,
                      financialGoalType: e.target.value,
                    })
                  }
                  fullWidth
                >
                  {goalTypes.map((type) => (
                    <MenuItem key={type.value} value={type.value}>
                      {type.label}
                    </MenuItem>
                  ))}
                </TextField>

                <TextField
                  select
                  label="Categoria"
                  value={newGoal.category}
                  onChange={(e) =>
                    setNewGoal({ ...newGoal, category: e.target.value })
                  }
                  fullWidth
                >
                  {categories.map((category) => (
                    <MenuItem key={category.value} value={category.value}>
                      <Stack direction="row" alignItems="center" spacing={1}>
                        <Box sx={{ color: category.color }}>
                          {category.icon}
                        </Box>
                        <Typography>{category.label}</Typography>
                      </Stack>
                    </MenuItem>
                  ))}
                </TextField>
              </Stack>
            </Stack>
          </DialogContent>

          <DialogActions sx={{ p: 3 }}>
            <Button onClick={handleCloseCreateDialog} sx={{ color: "#6B7280" }}>
              Cancelar
            </Button>
            <Button
              variant="contained"
              onClick={handleCreateGoal}
              startIcon={<Add />}
              sx={{
                backgroundColor: "#22C55E",
                "&:hover": {
                  backgroundColor: "#16A34A",
                },
              }}
            >
              Criar Meta
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </PageContainer>
  );
}
