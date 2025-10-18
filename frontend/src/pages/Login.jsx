import React from "react";
import { Box, Button, Container, Typography, IconButton } from "@mui/material";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import { useNavigate } from "react-router-dom";
import LoginForm from "../components/user/LoginForm";

function Login() {
  const navigate = useNavigate();
  return (
    <>
      <Box>
        <Box
          sx={{
            display: "flex",
            marginBottom: "20px",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Box sx={{ display: "flex", borderRadius: "30px"}}>
            <img
              src="src/assets/moneeLogo2.png"
              alt="LogoMonee"
              style={{ width: "90px", borderRadius: "15px" }}
            />
          </Box>
        </Box>
        <Container sx={{ display: "flex", justifyContent: "center"}}>
          <LoginForm />
        </Container>
      </Box>
    </>
  );
}

export default Login;
