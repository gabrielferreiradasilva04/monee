// import dayjs from "dayjs";
// import "dayjs/locale/pt-br";
// import TransactionHeader from "../components/transaction/TransactionHeader";
// import { Box, Button, Divider, Icon, IconButton, Typography } from "@mui/material";
// import PageContainer from "../components/PageConteiner";
// import SearchBar from "../components/SearchBar";
// import AddIcon from "@mui/icons-material/Add";
// import TransactionBox from "../components/transaction/TransactionBox";
// import TransactionSummary from "../components/transaction/TransactionSummary";
// import { useState } from "react";
// import TransactionDialog from "../components/transaction/TransactionDialog";
// dayjs.locale("pt-br");
// export default function Transactions() {
//   //variáveis de controle do dialog de transações
//   const [isOpenDialogTransactions, setIsOpenDialogTransactions] = useState(false);


//   const toggleDialogTransactions = () =>{
//     setIsOpenDialogTransactions((prev) => !prev)
//   }

//   const transactions = [
//     {
//       id: 1,
//       title: "Salário",
//       account: "Nubank",
//       amount: "1500,00",
//       type: "income",
//     },
//     {
//       id: 2,
//       title: "Mercado",
//       account: "Nubank",
//       amount: "-600,00",
//       type: "expense",
//     },
//     {
//       id: 3,
//       title: "Assinaturas",
//       account: "Nubank",
//       amount: "-30,00",
//       type: "expense",
//     },
//     {
//       id: 4,
//       title: "Assinaturas",
//       account: "Nubank",
//       amount: "-30,00",
//       type: "expense",
//     },
//     {
//       id: 5,
//       title: "Assinaturas",
//       account: "Nubank",
//       amount: "-30,00",
//       type: "expense",
//     },
//     {
//       id: 6,
//       title: "Assinaturas",
//       account: "Nubank",
//       amount: "-30,00",
//       type: "expense",
//     },
//   ];
//   return (
//     <>
//       <PageContainer>
//         <Box>
//           <Box>
//             <TransactionHeader></TransactionHeader>
//             <Box
//               sx={{
//                 display: "flex",
//                 alignContent: "center",
//                 alignItems: "center",
//                 marginBottom: "15px",
//               }}
//             >
//               <Button
//                 component="label"
//                 variant="contained"
//                 tabIndex={-1}
//                 endIcon={<AddIcon />}
//                 sx={{ fontWeight: "bold" }}
//                 onClick={toggleDialogTransactions}
//               >
//                 Lançamentos
//               </Button>
//             </Box>
//           </Box>
//           <Box sx={{ marginBottom: "20px" }}>
//             <SearchBar></SearchBar>
//           </Box>
//           <Box
//             sx={{
//               maxHeight: "400px", // limite de altura
//               overflowY: "auto", // scroll vertical
//               border: "1px solid #eee",
//               borderRadius: 2,
//               bgcolor: "background.paper",
//             }}
//           >
//             {transactions.map((tx) => (
//               <TransactionBox
//                 key={tx.id}
//                 title={tx.title}
//                 account={tx.account}
//                 amount={tx.amount}
//                 type={tx.type}
//               />
//             ))}
//           </Box>
//           <Divider sx={{margin:"15px"}}/>
//           <Box>
//             <TransactionSummary/>
//           </Box>

//         </Box>
//       </PageContainer>
//       <TransactionDialog open={isOpenDialogTransactions} onClose={toggleDialogTransactions} />
//     </>
//   );
// }
import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import TransactionHeader from "../components/transaction/TransactionHeader";
import { 
  Box, 
  Button, 
  Divider, 
  Typography,
  Paper,
  Stack
} from "@mui/material";
import PageContainer from "../components/PageConteiner";
import SearchBar from "../components/SearchBar";
import AddIcon from "@mui/icons-material/Add";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import TransactionBox from "../components/transaction/TransactionBox";
import TransactionSummary from "../components/transaction/TransactionSummary";
import { useState } from "react";
import TransactionDialog from "../components/transaction/TransactionDialog";

dayjs.locale("pt-br");

export default function Transactions() {
  //variáveis de controle do dialog de transações
  const [isOpenDialogTransactions, setIsOpenDialogTransactions] = useState(false);

  const toggleDialogTransactions = () => {
    setIsOpenDialogTransactions((prev) => !prev)
  }

  const transactions = [
    {
      id: 1,
      title: "Salário",
      account: "Nubank",
      amount: "1500,00",
      type: "income",
    },
    {
      id: 2,
      title: "Mercado",
      account: "Nubank",
      amount: "-600,00",
      type: "expense",
    },
    {
      id: 3,
      title: "Assinaturas",
      account: "Nubank",
      amount: "-30,00",
      type: "expense",
    },
    {
      id: 4,
      title: "Assinaturas",
      account: "Nubank",
      amount: "-30,00",
      type: "expense",
    },
    {
      id: 5,
      title: "Assinaturas",
      account: "Nubank",
      amount: "-30,00",
      type: "expense",
    },
    {
      id: 6,
      title: "Assinaturas",
      account: "Nubank",
      amount: "-30,00",
      type: "expense",
    },
  ];

  // Calcular totais para mostrar no header
  const totalIncome = transactions
    .filter(tx => tx.type === "income")
    .reduce((sum, tx) => sum + parseFloat(tx.amount.replace(',', '.')), 0);

  const totalExpenses = transactions
    .filter(tx => tx.type === "expense")
    .reduce((sum, tx) => sum + Math.abs(parseFloat(tx.amount.replace(',', '.'))), 0);

  return (
    <>
      <PageContainer>
        <Box sx={{ p: 1 }}>
          {/* Header Section */}
          <Box sx={{ mb: 4 }}>
            <TransactionHeader />
            
            {/* Quick Stats */}
            <Paper 
              elevation={0}
              sx={{ 
                p: 3, 
                mb: 3,
                background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
                border: '1px solid',
                borderColor: 'divider',
                borderRadius: 2
              }}
            >
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3} justifyContent="space-between">
                <Box sx={{ textAlign: { xs: 'center', sm: 'left' } }}>
                  <Typography variant="h4" fontWeight="bold" color="primary.main" gutterBottom>
                    R$ {(totalIncome - totalExpenses).toFixed(2).replace('.', ',')}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Saldo Total
                  </Typography>
                </Box>
                
                <Stack direction="row" spacing={4}>
                  <Box sx={{ textAlign: { xs: 'center', sm: 'left' } }}>
                    <Stack direction="row" alignItems="center" spacing={1}>
                      <TrendingUpIcon sx={{ color: 'success.main', fontSize: 20 }} />
                      <Typography variant="h6" fontWeight="bold" color="success.main">
                        R$ {totalIncome.toFixed(2).replace('.', ',')}
                      </Typography>
                    </Stack>
                    <Typography variant="body2" color="text.secondary">
                      Receitas
                    </Typography>
                  </Box>
                  
                  <Box sx={{ textAlign: { xs: 'center', sm: 'left' } }}>
                    <Stack direction="row" alignItems="center" spacing={1}>
                      <TrendingDownIcon sx={{ color: 'error.main', fontSize: 20 }} />
                      <Typography variant="h6" fontWeight="bold" color="error.main">
                        R$ {totalExpenses.toFixed(2).replace('.', ',')}
                      </Typography>
                    </Stack>
                    <Typography variant="body2" color="text.secondary">
                      Despesas
                    </Typography>
                  </Box>
                </Stack>
              </Stack>
            </Paper>

            {/* Actions Bar */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: 'wrap',
                gap: 2,
                marginBottom: "20px",
              }}
            >
              <Button
                component="label"
                variant="contained"
                tabIndex={-1}
                endIcon={<AddIcon />}
                sx={{ 
                  fontWeight: "bold",
                  minWidth: '160px'
                }}
                onClick={toggleDialogTransactions}
              >
                Novo Lançamento
              </Button>
              
              <Box sx={{ flex: 1, maxWidth: '400px', minWidth: '250px' }}>
                <SearchBar />
              </Box>
            </Box>
          </Box>

          {/* Transactions List */}
          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" fontWeight="bold" color="primary.main" gutterBottom>
              Últimas Transações
            </Typography>
            
            <Paper 
              elevation={0}
              sx={{ 
                border: "1px solid",
                borderColor: "divider",
                borderRadius: 2,
                overflow: "hidden",
                bgcolor: "background.paper",
              }}
            >
              <Box
                sx={{
                  maxHeight: "400px",
                  overflowY: "auto",
                  '&::-webkit-scrollbar': {
                    width: '8px',
                  },
                  '&::-webkit-scrollbar-track': {
                    background: '#f1f1f1',
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
                {transactions.map((tx) => (
                  <TransactionBox
                    key={tx.id}
                    title={tx.title}
                    account={tx.account}
                    amount={tx.amount}
                    type={tx.type}
                  />
                ))}
                
                {transactions.length === 0 && (
                  <Box sx={{ textAlign: 'center', py: 6 }}>
                    <Typography variant="body1" color="text.secondary">
                      Nenhuma transação encontrada
                    </Typography>
                    <Button 
                      variant="text" 
                      onClick={toggleDialogTransactions}
                      sx={{ mt: 1 }}
                    >
                      Adicionar primeira transação
                    </Button>
                  </Box>
                )}
              </Box>
            </Paper>
          </Box>

          {/* Summary Section */}
          <Box>
            <Typography variant="h6" fontWeight="bold" color="primary.main" gutterBottom>
              Resumo Financeiro
            </Typography>
            <Paper 
              elevation={0}
              sx={{ 
                p: 3,
                border: '1px solid',
                borderColor: 'divider',
                borderRadius: 2,
                background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)'
              }}
            >
              <TransactionSummary />
            </Paper>
          </Box>
        </Box>
      </PageContainer>
      
      <TransactionDialog open={isOpenDialogTransactions} onClose={toggleDialogTransactions} />
    </>
  );
}