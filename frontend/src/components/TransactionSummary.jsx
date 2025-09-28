import { Box, Divider, Typography } from "@mui/material";
import React from "react";

export default function TransactionSummary() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <Box sx={{marginBottom:"5px"}}>
        <Typography variant="h7" sx={{ fontWeight: "bold" }}>
          Resumo das movimentações
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "end",
        }}
      >
        <Typography>Total de entradas</Typography>
        <Typography>150,00</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "end",
        }}
      >
        <Typography>Total de saídas</Typography>
        <Typography>155,00</Typography>
      </Box>
      <Divider sx={{margin:"15px"}}/>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "end",
        }}
      >
        <Typography>Saldo final</Typography>
        <Typography>-5,00</Typography>
      </Box>
    </Box>
  );
}
