import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import RegisterForm from "../components/forms/RegisterForm";

export default function Register() {
  return (
    <>
      <Box>
        <Box
          sx={{
            display: "flex",
            marginBottom: "20px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box sx={{ display: "flex", borderRadius: "30px" }}>
            <img
              src="src/assets/moneeLogo2.png"
              alt="LogoMonee"
              style={{ width: "90px", borderRadius: "15px" }}
            />
          </Box>
        </Box>
        <Container sx={{ display: "flex", justifyContent: "center" }}>
          <RegisterForm />
        </Container>
      </Box>
    </>
  );
}
