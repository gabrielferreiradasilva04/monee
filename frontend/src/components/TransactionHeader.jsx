import React, { useState } from "react";
import { IconButton, Typography, Box } from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";

dayjs.locale("pt-br");
export default function TransactionHeader() {
  const [currentDate, setCurrentDate] = useState(dayjs());

  const handlePrevMonth = () => {
    setCurrentDate((prev) => prev.subtract(1, "month"));
  };

  const handleNextMonth = () => {
    setCurrentDate((prev) => prev.add(1, "month"));
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      gap={2}
      sx={{ mb: 2 }}
    >
      <IconButton onClick={handlePrevMonth}>
        <ArrowBack />
      </IconButton>

      <Typography sx={{color:"#837f7f"}} variant="body">{currentDate.format("MMMM YYYY")}</Typography>

      <IconButton onClick={handleNextMonth}>
        <ArrowForward />
      </IconButton>
    </Box>
  );
}
