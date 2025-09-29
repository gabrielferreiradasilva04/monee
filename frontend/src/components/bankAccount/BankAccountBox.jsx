import React from "react";

export default function BankAccountBox({accountName, description, createdAt, updatedAt}) {
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
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <Avatar
          sx={{
            bgcolor: isIncome ? "primary.main" : "error.main",
            width: 32,
            height: 32,
          }}
        >
          {accountName[0]}
        </Avatar>
        <Box>
          <Typography variant="body1">{accountName}</Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </Box>
        <Box>
            <Typography variant="body2" color="text.secondary">
            {createdAt}
          </Typography>
        </Box>
        <Box>
            <Typography variant="body2" color="text.secondary">
            {updatedAt}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
