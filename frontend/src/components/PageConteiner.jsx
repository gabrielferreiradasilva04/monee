import { Box } from "@mui/material";

export default function PageContainer({ children }) {
  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        borderRadius: 2,
        boxShadow: 1,
        p: 3,
        width: "100%",
        maxWidth: "1200px",
        padding: "16px",
      }}
    >
      {children}
    </Box>
  );
}
