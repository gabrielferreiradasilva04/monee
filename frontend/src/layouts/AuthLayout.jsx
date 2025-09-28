import React from "react";
import { Box, Divider } from "@mui/material";
import { motion } from "framer-motion";
import { Outlet } from "react-router-dom";
import AppFooter from "../components/AppFooter";

export default function AuthLayout() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          width: "100%",
          padding: "16px",
          marginTop: "80px",
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
      <Divider />
      <AppFooter />
    </>
  );
}
