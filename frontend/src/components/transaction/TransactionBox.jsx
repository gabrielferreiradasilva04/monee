import { Box, Typography, Avatar } from "@mui/material";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";

export default function TransactionBox({ title, account, amount, type }) {
  const isIncome = type === "income";
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
          {title[0]}
        </Avatar>
        <Box>
          <Typography variant="body1">{title}</Typography>
          <Typography variant="body2" color="text.secondary">
            {account}
          </Typography>
        </Box>
      </Box>

      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <Typography
          sx={{
            color: isIncome ? "success.main" : "error.main",
            fontWeight: 500,
          }}
        >
          {amount}
        </Typography>
        {isIncome ? (
          <ThumbUpIcon color="success" fontSize="small" />
        ) : (
          <ThumbDownIcon color="error" fontSize="small" />
        )}
      </Box>
    </Box>
  );
}
