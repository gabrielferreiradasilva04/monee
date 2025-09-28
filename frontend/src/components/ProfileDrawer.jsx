import {
  Box,
  Button,
  Drawer,
  IconButton,
  Tooltip,
  Typography,
} from "@mui/material";
import React from "react";
import ProfileForm from "./forms/ProfileForm";
import LogoutIcon from "@mui/icons-material/Logout";
import { useAuth } from "../components/context/AuthContext.jsx";

export default function ProfileDrawer({ open, onClose, user }) {
  const { logout } = useAuth();

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          width: 500,
          p: 3,
          backgroundColor: "background.paper",
        },
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
        <Typography variant="h6" sx={{ fontWeight: "bold" }} gutterBottom>
          Meu Perfil Monee
        </Typography>
        <Tooltip title="Logout">
          <IconButton
            size="big"
            onClick={() => {
              logout();
            }}
          >
            <LogoutIcon sx={{ color: "red" }} />
          </IconButton>
        </Tooltip>
      </Box>

      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <ProfileForm user={user} />
        <Button
          variant="contained"
          sx={{
            color: "white",
            fontWeight: "bold",
            textTransform: "none",
            borderRadius: "8px",
            mt: 1
          }}
          onClick={onClose}
        >
          Fechar
        </Button>
      </Box>
    </Drawer>
  );
}
