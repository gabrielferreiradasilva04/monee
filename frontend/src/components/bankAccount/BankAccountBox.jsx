import { Avatar, Box, Button, Divider } from "@mui/material";
import React from "react";

export default function BankAccountBox({ account }) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        p: 2,
        borderBottom: "1px solid #eee",
      }}
    >
      <Box>
        <Avatar
          sx={{
            width: 32,
            height: 32,
          }}
        >
          {account.accountName[0]}
        </Avatar>
      </Box>
      <span>{account.accountName}</span>
      <span>{account.description}</span>
      <span>{account.createdAt}</span>
      <span>{account.updatedAt}</span>
      <Button>Editar</Button>
      <Divider />
    </Box>
  );
}
