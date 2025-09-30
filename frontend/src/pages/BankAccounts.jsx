import React, { useState } from "react";
import PageContainer from "../components/PageConteiner";
import { Box, Button, Typography } from "@mui/material";
import SearchBar from "../components/SearchBar";
import AddIcon from "@mui/icons-material/Add";
import BankAccountDialog from "../components/bankAccount/BankAccountDialog";
import { useAuth } from "../components/context/AuthContext.jsx";
import { api } from "../services/axiosConfig.js";
import { useNotification } from "../components/context/NotificationProvider.jsx";
import CustomItemList from "../components/CustomItemList.jsx";

export default function BankAccounts() {
  const [openAccountDialog, setOpenAccountDialog] = useState(false);
  const [selectedAccount, setSelectedAccount] = useState(null);
  const { user } = useAuth();
  const [bankAccounts, setBankAccounts] = useState([]);
  const { showNotification } = useNotification();

  // abrir dialog de conta bancária
  const handleOpenDialog = (account = null) => {
    setSelectedAccount(account);
    setOpenAccountDialog(true);
  };

  // identificar quando o dialog for fechado
  const handleSave = () => {
    setOpenAccountDialog(false);
    setSelectedAccount(null);
    fetchBankAccounts();
  };
  // identificar quando o dialog for fechado sem alterações
  const handleClose = () => {
    setOpenAccountDialog(false);
    setSelectedAccount(null);
  };

  // buscar contas bancárias
  const fetchBankAccounts = () => {
    api
      .get(`/bank-accounts/${user.id}`, { withCredentials: true })
      .then((response) => {
        setBankAccounts(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar contas bancárias:", error);
        showNotification("Erro ao buscar contas bancárias", "error");
      });
  };

  // carregar contas bancárias ao montar o componente
  React.useEffect(() => {
    fetchBankAccounts();
  }, []);

  return (
    <>
      <PageContainer>
        <Box>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Typography variant="h5" fontWeight="bold">
              Contas Bancárias
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignContent: "center",
              alignItems: "center",
              marginBottom: "15px",
            }}
          >
            <Button
              component="label"
              variant="contained"
              onClick={() => handleOpenDialog(null)}
              tabIndex={-1}
              endIcon={<AddIcon />}
              sx={{ fontWeight: "bold" }}
            >
              Adicionar
            </Button>
          </Box>
          <Box sx={{ marginBottom: "20px" }}>
            <SearchBar />
          </Box>

          <Box>
            {bankAccounts.map((account) => (
              <CustomItemList
                key={account.id}
                title={account.accountName}
                description={account.description}
                createdAt={account.createdAt}
                updatedAt={account}
                onEdit={() => handleOpenDialog(account)}
              />
            ))}
          </Box>
        </Box>
      </PageContainer>
      <BankAccountDialog
        initialData={selectedAccount}
        open={openAccountDialog}
        onClose={handleClose}
        onSave={handleSave}
      />
    </>
  );
}
