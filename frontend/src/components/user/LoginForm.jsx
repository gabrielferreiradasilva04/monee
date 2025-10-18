import { AccountCircle, Lock, Login } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  Checkbox,
  Divider,
  FormControlLabel,
  FormGroup,
  InputAdornment,
  Link,
  Stack,
  CircularProgress,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useNotification } from "../context/NotificationProvider.jsx";
import React from "react";
import { useAuth } from "../context/AuthContext.jsx";

export default function LoginForm() {
  //vairáiveis de controle de autenticacao
  const { login, user } = useAuth();

  //variáveis para as notificações
  const { showNotification } = useNotification();

  //variáveis de controle para o login
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  //controles de formulário
  const [formErrors, setFormErrors] = useState({});

  const validateForm = () => {
    let tempErrors = {};

    if (!email.trim()) tempErrors.email = "Preencha o e-mail";
    if (!password) tempErrors.password = "Preencha a senha";

    setFormErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!validateForm()) {
      setLoading(false);
      return;
    }

    try {
      await login(email, password);
      navigate("/overview");
    } catch (err) {
      showNotification(
        err.response?.data?.message || "Credenciais inválidas ou desabilitadas",
        "error"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Card
        sx={{
          display: "flex",
          flexDirection: "column",
          alignSelf: "center",
          gap: "40px",
          padding: "60px",
          width: "100%",
          maxWidth: "450px",
          borderRadius: "20px",
        }}
        elevation={12}
      >
        <Typography
          sx={{ fontWeight: "bold", textAlign: "center" }}
          component="h1"
          variant="h4"
          color="secondary"
        >
          Bem vindo de volta!
        </Typography>
        <Divider />
        <Box
          sx={{ display: "flex", flexDirection: "column", gap: "10px" }}
          component="form"
          noValidate
          onSubmit={handleSubmit}
        >
          <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <TextField
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircle />
                    </InputAdornment>
                  ),
                },
              }}
              fullWidth
              label="E-mail"
              placeholder="fulano@dominio.com"
              size="small"
              onChange={(e) => setEmail(e.target.value)}
              error={!!formErrors.email}
              helperText={formErrors.email}
            ></TextField>
            <TextField
              type="password"
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <Lock />
                    </InputAdornment>
                  ),
                },
              }}
              fullWidth
              placeholder="********"
              label="Senha"
              size="small"
              onChange={(e) => setPassword(e.target.value)}
              error={!!formErrors.password}
              helperText={formErrors.password}
            ></TextField>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "end", margin: "0" }}>
            <Link
              color="secondary"
              variant="body1"
              href="/cadastro"
              underline="always"
            >
              Esqueci minha senha
            </Link>
          </Box>
          <Divider />
          <Box>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox />}
                label="Lembre de mim"
              ></FormControlLabel>
            </FormGroup>
          </Box>
          <Stack sx={{ gap: "10px", display: "flex" }}>
            <Button
              color="primary"
              sx={{ borderRadius: "10px" }}
              size="large"
              variant="contained"
              fullWidth
              type="submit"
              disabled={loading}
              startIcon={
                loading ? <CircularProgress size={20} color="inherit" /> : null
              }
            >
              {loading ? "Entrando..." : "Entrar"}
            </Button>
          </Stack>
          <Box sx={{ display: "flex", justifyContent: "center", margin: "0" }}>
            <Link
              color="secondary"
              variant="body1"
              href="/register"
              underline="always"
            >
              Cadastrar-se
            </Link>
          </Box>
        </Box>
      </Card>
    </>
  );
}
