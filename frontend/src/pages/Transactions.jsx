import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import TransactionHeader from "../components/transaction/TransactionHeader";
import { 
  Box, 
  Button, 
  Divider, 
  Typography,
  Paper,
  Stack,
  Grid,
  Chip,
  Avatar,
  Pagination,
  Select,
  MenuItem,
  FormControl,
  InputLabel
} from "@mui/material";
import PageContainer from "../components/PageConteiner";
import SearchBar from "../components/SearchBar";
import AddIcon from "@mui/icons-material/Add";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import TransactionBox from "../components/transaction/TransactionBox";
import { useState } from "react";
import TransactionDialog from "../components/transaction/TransactionDialog";

dayjs.locale("pt-br");

export default function Transactions() {
  //variáveis de controle do dialog de transações
  const [isOpenDialogTransactions, setIsOpenDialogTransactions] = useState(false);

  // Estados para paginação
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  const toggleDialogTransactions = () => {
    setIsOpenDialogTransactions((prev) => !prev)
  }

  // Dados simulados com mais transações para demonstrar paginação
  const allTransactions = [
    {
      id: 1,
      title: "Salário",
      account: "",
      amount: "1500,00",
      type: "income",
      category: "Salário",
      date: "2024-01-15"
    },
    {
      id: 2,
      title: "Mercado",
      account: "",
      amount: "-600,00",
      type: "expense",
      category: "Alimentação",
      date: "2024-01-14"
    },
    {
      id: 3,
      title: "Aluguel",
      account: "",
      amount: "-1200,00",
      type: "expense",
      category: "Moradia",
      date: "2024-01-10"
    },
    {
      id: 4,
      title: "Freelance",
      account: "",
      amount: "800,00",
      type: "income",
      category: "Trabalho",
      date: "2024-01-08"
    },
    {
      id: 5,
      title: "Academia",
      account: "",
      amount: "-89,90",
      type: "expense",
      category: "Saúde",
      date: "2024-01-05"
    },
    {
      id: 6,
      title: "Streaming",
      account: "",
      amount: "-45,90",
      type: "expense",
      category: "Entretenimento",
      date: "2024-01-03"
    },
    {
      id: 7,
      title: "Gasolina",
      account: "",
      amount: "-200,00",
      type: "expense",
      category: "Transporte",
      date: "2024-01-02"
    },
    {
      id: 8,
      title: "Restaurante",
      account: "",
      amount: "-85,00",
      type: "expense",
      category: "",
      date: "2024-01-01"
    },
    {
      id: 9,
      title: "Bônus",
      account: "",
      amount: "300,00",
      type: "income",
      category: "Salário",
      date: "2023-12-30"
    },
    {
      id: 10,
      title: "Presentes",
      account: "",
      amount: "-150,00",
      type: "expense",
      category: "Outros",
      date: "2023-12-28"
    },
    {
      id: 11,
      title: "Consulta Médica",
      account: "",
      amount: "-120,00",
      type: "expense",
      category: "Saúde",
      date: "2023-12-25"
    },
    {
      id: 12,
      title: "Venda de Item",
      account: "",
      amount: "250,00",
      type: "income",
      category: "Vendas",
      date: "2023-12-20"
    }
  ];

  // Calcular totais para mostrar no header (considerando todas as transações)
  const totalIncome = allTransactions
    .filter(tx => tx.type === "income")
    .reduce((sum, tx) => sum + parseFloat(tx.amount.replace(',', '.')), 0);

  const totalExpenses = allTransactions
    .filter(tx => tx.type === "expense")
    .reduce((sum, tx) => sum + Math.abs(parseFloat(tx.amount.replace(',', '.'))), 0);

  const balance = totalIncome - totalExpenses;

  // Lógica de paginação
  const totalItems = allTransactions.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  
  // Calcular transações da página atual
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentTransactions = allTransactions.slice(startIndex, endIndex);

  // Função para mudar página
  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  // Função para mudar itens por página
  const handleItemsPerPageChange = (event) => {
    setItemsPerPage(event.target.value);
    setCurrentPage(1); // Reset para primeira página
  };

  return (
    <>
      <PageContainer>
        <Box sx={{ p: 1 }}>
          {/* Header Section */}
          <Box sx={{ mb: 4 }}>
            <TransactionHeader />
            
            {/* Quick Stats - Aprimorado */}
            <Paper 
              sx={{ 
                p: 4, 
                mb: 4,
                background: 'linear-gradient(135deg, #22C55E 0%, #16A34A 100%)',
                color: 'white',
                borderRadius: 3,
                boxShadow: '0 8px 32px rgba(34, 197, 94, 0.2)'
              }}
            >
              <Stack direction={{ xs: 'column', md: 'row' }} spacing={3} justifyContent="space-between" alignItems="center">
                <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
                  <Typography variant="h3" fontWeight="bold" gutterBottom>
                    R$ {balance.toFixed(2).replace('.', ',')}
                  </Typography>
                  <Typography variant="h6" sx={{ opacity: 0.9 }}>
                    Saldo Disponível
                  </Typography>
                </Box>
                
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={4}>
                  <Box sx={{ textAlign: { xs: 'center', sm: 'left' } }}>
                    <Stack direction="row" alignItems="center" spacing={1} justifyContent={{ xs: 'center', sm: 'flex-start' }}>
                      <Avatar sx={{ width: 40, height: 40, bgcolor: 'rgba(255,255,255,0.2)' }}>
                        <TrendingUpIcon />
                      </Avatar>
                      <Box>
                        <Typography variant="h5" fontWeight="bold">
                          R$ {totalIncome.toFixed(2).replace('.', ',')}
                        </Typography>
                        <Typography variant="body2" sx={{ opacity: 0.9 }}>
                          Receitas
                        </Typography>
                      </Box>
                    </Stack>
                  </Box>
                  
                  <Box sx={{ textAlign: { xs: 'center', sm: 'left' } }}>
                    <Stack direction="row" alignItems="center" spacing={1} justifyContent={{ xs: 'center', sm: 'flex-start' }}>
                      <Avatar sx={{ width: 40, height: 40, bgcolor: 'rgba(255,255,255,0.2)' }}>
                        <TrendingDownIcon />
                      </Avatar>
                      <Box>
                        <Typography variant="h5" fontWeight="bold">
                          R$ {totalExpenses.toFixed(2).replace('.', ',')}
                        </Typography>
                        <Typography variant="body2" sx={{ opacity: 0.9 }}>
                          Despesas
                        </Typography>
                      </Box>
                    </Stack>
                  </Box>
                </Stack>
              </Stack>
            </Paper>

            {/* Actions Bar - Aprimorado */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: 'wrap',
                gap: 2,
                marginBottom: 3,
              }}
            >
              <Button
                component="label"
                variant="contained"
                tabIndex={-1}
                startIcon={<AddIcon />}
                sx={{ 
                  fontWeight: "bold",
                  minWidth: '200px',
                  py: 1.5,
                  background: 'linear-gradient(45deg, #22C55E, #10B981)',
                  '&:hover': {
                    background: 'linear-gradient(45deg, #16A34A, #059669)',
                  },
                  borderRadius: 2
                }}
                onClick={toggleDialogTransactions}
              >
                Novo Lançamento
              </Button>
            </Box>
          </Box>

          {/* Transactions List - Aprimorado */}
          <Box sx={{ mb: 4 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
              <Typography variant="h5" fontWeight="bold" color="primary.main">
                Últimas Transações
              </Typography>
              
              {/* Controles de Paginação - Topo */}
              <Stack direction="row" spacing={2} alignItems="center">
                <Typography variant="body2" color="text.secondary">
                  {startIndex + 1}-{Math.min(endIndex, totalItems)} de {totalItems}
                </Typography>
                
                <FormControl size="small" sx={{ minWidth: 120 }}>
                  <InputLabel>Itens por página</InputLabel>
                  <Select
                    value={itemsPerPage}
                    label="Itens por página"
                    onChange={handleItemsPerPageChange}
                  >
                    <MenuItem value={5}>5</MenuItem>
                    <MenuItem value={10}>10</MenuItem>
                    <MenuItem value={20}>20</MenuItem>
                  </Select>
                </FormControl>
              </Stack>
            </Box>
            
            <Paper 
              sx={{ 
                border: "1px solid",
                borderColor: "divider",
                borderRadius: 3,
                overflow: "hidden",
                bgcolor: "background.paper",
                boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                mb: 2
              }}
            >
              {/* Header da Lista */}
              <Box sx={{ p: 2, bgcolor: 'grey.50', borderBottom: '1px solid', borderColor: 'divider' }}>
                <Grid container spacing={2} alignItems="center">
                  <Grid size={{ xs: 5 }}>
                    <Typography variant="body2" fontWeight="bold" color="text.secondary">
                      DESCRIÇÃO
                    </Typography>
                  </Grid>
                  <Grid size={{ xs: 3 }}>
                    <Typography variant="body2" fontWeight="bold" color="text.secondary">
                      CATEGORIA
                    </Typography>
                  </Grid>
                  <Grid size={{ xs: 2 }}>
                    <Typography variant="body2" fontWeight="bold" color="text.secondary">
                      CONTA
                    </Typography>
                  </Grid>
                  <Grid size={{ xs: 2 }} sx={{ textAlign: 'right' }}>
                    <Typography variant="body2" fontWeight="bold" color="text.secondary">
                      VALOR
                    </Typography>
                  </Grid>
                </Grid>
              </Box>

              <Box
                sx={{
                  maxHeight: "500px",
                  overflowY: "auto",
                  '&::-webkit-scrollbar': {
                    width: '8px',
                  },
                  '&::-webkit-scrollbar-track': {
                    background: '#f1f1f1',
                    borderRadius: '0 0 12px 0',
                  },
                  '&::-webkit-scrollbar-thumb': {
                    background: '#c1c1c1',
                    borderRadius: '4px',
                  },
                  '&::-webkit-scrollbar-thumb:hover': {
                    background: '#a8a8a8',
                  }
                }}
              >
                {currentTransactions.map((tx) => (
                  <Box key={tx.id}>
                    <TransactionBox
                      title={tx.title}
                      account={tx.account}
                      amount={tx.amount}
                      type={tx.type}
                      category={tx.category}
                      date={tx.date}
                    />
                    <Divider />
                  </Box>
                ))}
                
                {currentTransactions.length === 0 && (
                  <Box sx={{ textAlign: 'center', py: 6 }}>
                    <Typography variant="h6" color="text.secondary" gutterBottom>
                      Nenhuma transação encontrada
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                      Comece adicionando sua primeira transação
                    </Typography>
                    <Button 
                      variant="contained" 
                      onClick={toggleDialogTransactions}
                      startIcon={<AddIcon />}
                      sx={{
                        background: 'linear-gradient(45deg, #22C55E, #10B981)',
                        '&:hover': {
                          background: 'linear-gradient(45deg, #16A34A, #059669)',
                        },
                      }}
                    >
                      Adicionar Transação
                    </Button>
                  </Box>
                )}
              </Box>
            </Paper>

            {/* Paginação - Rodapé */}
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 2 }}>
              <Typography variant="body2" color="text.secondary">
                Mostrando {startIndex + 1}-{Math.min(endIndex, totalItems)} de {totalItems} transações
              </Typography>
              
              <Pagination 
                count={totalPages} 
                page={currentPage} 
                onChange={handlePageChange}
                color="primary"
                showFirstButton 
                showLastButton
                sx={{
                  '& .MuiPaginationItem-root': {
                    borderRadius: 2,
                  },
                  '& .MuiPaginationItem-page.Mui-selected': {
                    backgroundColor: '#22C55E',
                    color: 'white',
                    '&:hover': {
                      backgroundColor: '#16A34A',
                    }
                  }
                }}
              />
            </Box>
          </Box>
        </Box>
      </PageContainer>
      
      <TransactionDialog open={isOpenDialogTransactions} onClose={toggleDialogTransactions} />
    </>
  );
}