import React, { useState } from "react";
import PageContainer from "../components/PageConteiner";
import { Box, Button, Typography } from "@mui/material";
import SearchBar from "../components/SearchBar";
import AddIcon from "@mui/icons-material/Add";
import BankAccountDialog from "../components/bankAccount/BankAccountDialog";

export default function BankAccounts() {
  const [openAccountDialog, setOpenAccountDialog] = useState(false);
  const [selectedAccount, setSelectedAccount] = useState(null);

  const handleOpenDialog = (account = null) => {
    setSelectedAccount(account);
    setOpenAccountDialog(true);
  };

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
            <span>pesquisas</span>
          </Box>
        </Box>
      </PageContainer>
      <BankAccountDialog
        initialData={selectedAccount}
        open={openAccountDialog}
        onClose={() => setOpenAccountDialog(false)}
        onSave={(data) => {
          console.log("Salvar conta:", data);
          setOpenAccountDialog(false);
        }}
      />
    </>
  );
}
