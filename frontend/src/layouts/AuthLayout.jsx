import React from "react";
import { Box, Divider } from "@mui/material";
import { motion } from "framer-motion";
import { Outlet, useLocation } from "react-router-dom";
import AppFooter from "../components/AppFooter";

export default function AuthLayout() {
  const location = useLocation();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundImage: "url('/images/login_background.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          padding: 2,
        }}
      >
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "tween", restDelta: 0.5 }}
          style={{ width: "100%", maxWidth: "600px" }}
        >
          <Outlet />
        </motion.div>
      </Box>

      <Box sx={{ width: "100%" }}>
        <Divider sx={{ opacity: 0.5 }} />
        <AppFooter />
      </Box>
    </Box>
  );
}
