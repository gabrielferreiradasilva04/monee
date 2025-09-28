import React from "react";
import Appbar from "../components/Appbar";
import { Box, Divider } from "@mui/material";
import { motion } from "framer-motion";
import { Outlet } from "react-router-dom";
import AppFooter from "../components/AppFooter";

export default function MainLayout() {
  return (
    <>
      <Appbar />

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          minHeight: "calc(100vh - 64px - 64px)", 
          mt: "30px", 
          px: 2, 
        }}
      >
        <Outlet />
      </Box>

      <AppFooter />
    </>
  );
}
