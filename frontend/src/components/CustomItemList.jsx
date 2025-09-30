import { Avatar, Box, Button, Divider, Stack, Typography } from "@mui/material";
import React from "react";
import EditIcon from '@mui/icons-material/Edit';
import { Edit } from "@mui/icons-material";

export default function CustomItemList({
  title,
  description,
  createdAt,
  updatedAt,
  onEdit,
  onSave,
  onClose,
}) {
  return (
    <>
      <Box sx={{ margin: 2, display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Avatar
            sx={{
              width: 32,
              height: 32,
            }}
          >
            {title[0]}
          </Avatar>
          <Box>
            <Typography variant="body1">{title}</Typography>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
          </Box>
        </Box>
        <Box sx={{ justifyContent: "end" }}>
          <Button onClick={onEdit}><Edit/></Button>
        </Box>
      </Box>

      <Divider />
    </>
  );
}
