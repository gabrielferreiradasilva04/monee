import {
  Box,
  Button,
  Dialog,
  DialogContent,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
  Typography,
  Checkbox,
  Stack,
  Divider,
  Paper,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import CheckIcon from "@mui/icons-material/Check";
import DescriptionIcon from "@mui/icons-material/Description";
import CategoryIcon from "@mui/icons-material/Category";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import RepeatIcon from "@mui/icons-material/Repeat";
import React, { useState } from "react";

export default function TransactionDialog({ open, onClose }) {
  const [transactionType, setTransactionType] = useState("DESPESA");
  const [transactionCategory, setTransactionCategory] = useState("");
  const [bankAccount, setBankAccount] = useState("");
  const [fixed, setFixed] = useState(false);

  const transactionCategories = [
    "Alimentação",
    "Transporte",
    "Moradia",
    "Saúde",
    "Lazer",
  ];
  const bankAccounts = [
    "Conta Corrente",
    "Poupança",
    "Investimentos",
    "Carteira",
  ];

  return (
    <Dialog 
      open={open} 
      onClose={onClose} 
      maxWidth="sm" 
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: 1,
        }
      }}
    >
      {/* Header */}
      <Box
        sx={{
          p: 2.5,
          backgroundColor: "primary.main",
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Box>
            <Typography variant="h6" sx={{ fontWeight: "bold", color: "white" }} gutterBottom>
              Novo Lançamento
            </Typography>
            <Typography variant="body2" sx={{ color: "white", opacity: 0.9 }}>
              Adicione uma nova transação financeira
            </Typography>
          </Box>
          <IconButton 
            onClick={onClose} 
            size="small"
            sx={{ 
              color: 'white',
              '&:hover': { 
                backgroundColor: 'rgba(255,255,255,0.1)' 
              } 
            }}
          >
            <CloseIcon />
          </IconButton>
        </Box>
      </Box>

      <DialogContent sx={{ p: 0 }}>
        <Box component="form" onSubmit={null} sx={{ p: 3 }}>
          {/* Tipo de Transação */}
          <Paper 
            variant="outlined" 
            sx={{ 
              p: 2.5, 
              mb: 3,
              backgroundColor: 'background.default'
            }}
          >
            <FormControl component="fieldset" sx={{ width: "100%" }}>
              <FormLabel 
                component="legend" 
                sx={{ 
                  mb: 2, 
                  fontWeight: 'bold',
                  color: 'text.primary'
                }}
              >
                Tipo de Transação
              </FormLabel>
              <RadioGroup
                row
                value={transactionType}
                onChange={(e) => setTransactionType(e.target.value)}
                sx={{ justifyContent: 'space-between' }}
              >
                <FormControlLabel
                  value="RECEITA"
                  control={<Radio color="success" />}
                  label={
                    <Typography 
                      variant="body1" 
                      color={transactionType === "RECEITA" ? "success.main" : "text.primary"}
                      fontWeight={transactionType === "RECEITA" ? "bold" : "normal"}
                    >
                      Receita
                    </Typography>
                  }
                  sx={{ flex: 1 }}
                />
                <FormControlLabel
                  value="DESPESA"
                  control={<Radio color="error" />}
                  label={
                    <Typography 
                      variant="body1" 
                      color={transactionType === "DESPESA" ? "error.main" : "text.primary"}
                      fontWeight={transactionType === "DESPESA" ? "bold" : "normal"}
                    >
                      Despesa
                    </Typography>
                  }
                  sx={{ flex: 1 }}
                />
              </RadioGroup>
            </FormControl>
          </Paper>

          {/* Campos do Formulário */}
          <Stack spacing={3}>
            {/* Descrição */}
            <TextField
              fullWidth
              multiline
              rows={2}
              label="Descrição"
              size="medium"
              InputProps={{
                startAdornment: (
                  <DescriptionIcon color="primary" sx={{ mr: 1, opacity: 0.7 }} />
                ),
              }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: 1,
                }
              }}
            />

            <Grid container spacing={2}>
              {/* Categoria */}
              <Grid size={{ xs: 12, sm: 6 }}>
                <FormControl fullWidth size="medium">
                  <InputLabel>Categoria</InputLabel>
                  <Select
                    value={transactionCategory}
                    label="Categoria"
                    onChange={(e) => setTransactionCategory(e.target.value)}
                    startAdornment={
                      <CategoryIcon color="primary" sx={{ mr: 1, opacity: 0.7 }} />
                    }
                    sx={{
                      borderRadius: 1,
                    }}
                  >
                    {transactionCategories.map((cat) => (
                      <MenuItem key={cat} value={cat}>
                        {cat}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>

              {/* Valor */}
              <Grid size={{ xs: 12, sm: 6 }}>
                <TextField 
                  fullWidth 
                  type="number" 
                  label="Valor" 
                  size="medium"
                  InputProps={{
                    startAdornment: (
                      <AttachMoneyIcon color="primary" sx={{ mr: 1, opacity: 0.7 }} />
                    ),
                  }}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: 1,
                    }
                  }}
                />
              </Grid>

              {/* Conta Bancária */}
              <Grid size={{ xs: 12, sm: 6 }}>
                <FormControl fullWidth size="medium">
                  <InputLabel>Conta Bancária</InputLabel>
                  <Select
                    value={bankAccount}
                    label="Conta Bancária"
                    onChange={(e) => setBankAccount(e.target.value)}
                    startAdornment={
                      <AccountBalanceIcon color="primary" sx={{ mr: 1, opacity: 0.7 }} />
                    }
                    sx={{
                      borderRadius: 1,
                    }}
                  >
                    {bankAccounts.map((account) => (
                      <MenuItem key={account} value={account}>
                        {account}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>

              {/* Data */}
              <Grid size={{ xs: 12, sm: 6 }}>
                <TextField
                  fullWidth
                  label="Data"
                  type="date"
                  size="medium"
                  disabled
                  value={new Date().toISOString().split("T")[0]}
                  InputProps={{
                    startAdornment: (
                      <CalendarTodayIcon color="disabled" sx={{ mr: 1 }} />
                    ),
                  }}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: 1,
                      backgroundColor: 'action.hover'
                    }
                  }}
                />
              </Grid>
            </Grid>

            {/* Checkbox Fixa */}
            <FormControlLabel
              control={
                <Checkbox
                  checked={fixed}
                  onChange={(e) => setFixed(e.target.checked)}
                  icon={<RepeatIcon />}
                  checkedIcon={<RepeatIcon />}
                  color="primary"
                />
              }
              label={
                <Typography variant="body1" fontWeight="medium">
                  Transação Fixa
                </Typography>
              }
              sx={{ 
                alignSelf: 'flex-start',
                mt: 1 
              }}
            />
          </Stack>

          <Divider sx={{ my: 3 }} />

          {/* Botões de Ação */}
          <Stack 
            direction="row" 
            spacing={2} 
            justifyContent="flex-end"
          >
            <Button
              onClick={onClose}
              variant="outlined"
              sx={{ 
                borderRadius: 1,
                fontWeight: 'bold',
                textTransform: 'none',
                px: 3
              }}
            >
              Cancelar
            </Button>
            <Button
              type="submit"
              variant="contained"
              startIcon={<CheckIcon />}
              sx={{ 
                borderRadius: 1,
                fontWeight: 'bold',
                textTransform: 'none',
                px: 3
              }}
            >
              Salvar
            </Button>
          </Stack>
        </Box>
      </DialogContent>
    </Dialog>
  );
}