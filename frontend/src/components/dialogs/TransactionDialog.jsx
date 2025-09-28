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
  OutlinedInput,
  Chip,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import CheckIcon from "@mui/icons-material/Check";
import React, { useState } from "react";

export default function TransactionDialog({ open, onClose }) {
  const [transactionType, setTransactionType] = useState("DESPESA");
  const [transactionCategory, setTransactionCategory] = useState("");
  const [bankAccount, setBankAccount] = useState("");
  const [fixed, setFixed] = useState(false);

  const transactionCategories = ["Alimentação", "Transporte", "Moradia", "Saúde", "Lazer"];
  const bankAccounts = [
    "Conta Corrente",
    "Poupança",
    "Investimentos",
    "Carteira",
  ];

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogContent sx={{ p: 3 }} 
      component="form"
      onSubmit={null}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 2,
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Lançamentos
          </Typography>
          <IconButton onClick={onClose} size="small">
            <CloseIcon />
          </IconButton>
        </Box>

        <FormControl component="fieldset" sx={{ mb: 3, width: "100%" }}>
          <FormLabel component="legend">Tipo de Transação</FormLabel>
          <RadioGroup
            row
            value={transactionType}
            onChange={(e) => setTransactionType(e.target.value)}
          >
            <FormControlLabel
              value="RECEITA"
              control={<Radio />}
              label="Receita"
            />
            <FormControlLabel value="DESPESA" control={<Radio />} label="Despesa" />
          </RadioGroup>
        </FormControl>

        <Grid container spacing={2}>
          <Grid size={{ xs: 12 }}>
            <TextField
              fullWidth
              multiline
              rows={2}
              label="Descrição"
              size="small"
            />
          </Grid>

          <Grid size={{ xs: 6 }}>
            <FormControl fullWidth size="small">
              <InputLabel>Categoria</InputLabel>
              <Select
                value={transactionCategory}
                label="Categoria"
                onChange={(e) => setCategoria(e.target.value)}
              >
                {transactionCategories.map((cat) => (
                  <MenuItem key={cat} value={cat}>
                    {cat}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

          <Grid size={{ xs: 6 }}>
            <TextField
              fullWidth
              type="number"
              label="Valor"
              size="small"
            />
          </Grid>

          <Grid size={{ xs: 6 }}>
            <FormControl fullWidth size="small">
              <InputLabel>Conta Bancária</InputLabel>
              <Select
                value={bankAccount}
                label="Conta Bancária"
                onChange={(e) => setBankAccount(e.target.value)}
              >
                {bankAccounts.map((account) => (
                  <MenuItem key={account} value={account}>
                    {account}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

          <Grid size={{ xs: 6 }}>
            <TextField
              fullWidth
              label="Data"
              type="date"
              size="small"
              disabled  
              value={new Date().toISOString().split("T")[0]}
            />
          </Grid>

          <Grid size={{ xs: 6 }} sx={{ display: "flex", alignItems: "center" }}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={fixed}
                  onChange={(e) => setFixed(e.target.checked)}
                />
              }
              label="Fixa"
            />
          </Grid>
        </Grid>
        <Box
          sx={{ display: "flex", justifyContent: "center", gap: 2, mt: 3 }}
        >
          <Button type="submit" size="large" variant="contained" color="primary">
            <CheckIcon />
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
}
