// RegisterForm.jsx (atualizado)
import React from "react";
import {
  Box,
  Button,
  Card,
  Checkbox,
  Divider,
  FormControlLabel,
  FormGroup,
  CircularProgress,
  TextField,
  Link,
  Typography,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useState } from "react";
import { useNotification } from "../context/NotificationProvider.jsx";
import { api } from "../../services/axiosConfig.js";
import { PatternFormat } from "react-number-format";
import { useNavigate } from "react-router-dom";
import TermosCondicoesDialog from "../TermosCondicoesDialog.jsx"; // Importe o componente

export default function RegisterForm() {
  //Variáveis para a notificação
  const { showNotification } = useNotification();

  //controles do formulario
  const [passwordError, setPasswordError] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordRep, setShowPasswordRep] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false); // Estado para controlar o Dialog

  //navegação
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRep, setPasswordRep] = useState("");
  const [phone, setPhone] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const userRole = "COMMON";

  const validateForm = () => {
    let tempErrors = {};

    if (!name.trim()) tempErrors.name = "Nome é obrigatório";
    if (!email.trim()) tempErrors.email = "E-Mail é obrigatório";
    if (!phone.trim()) tempErrors.phone = "Telefone é obrigatório";
    if (!password.trim()) tempErrors.password = "Senha é obrigatório";
    if (!passwordRep.trim())
      tempErrors.passwordRep = "Repetir senha é obrigatório";
    if (!termsAccepted) tempErrors.terms = "Obrigatório concordar para seguir";

    setFormErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const passwordValidation = (firstPassword, secondPassword) => {
    if (firstPassword !== secondPassword) {
      showNotification("As senhas não conferem", "warning");
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    if (!validateForm() || !passwordValidation(password, passwordRep)) {
      setLoading(false);
      return;
    }

    api
      .post(
        "/auth/register",
        { name, email, password, phone, userRole },
        { withCredentials: true }
      )
      .then((response) => {
        showNotification(
          "Cadastro realizado com sucesso! Você será redirecionado",
          "success"
        );

        setTimeout(() => {
          navigate("/login");
        }, 3000);
      })
      .catch((err) => {
        showNotification(
          err.response?.data?.message ||
            "Erro interno do servidor, verifique sua conexão",
          "error"
        );
      })
      .finally(() => setLoading(false));
  };

  const handleOpenDialog = () => {
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  return (
    <>
      <Card
        sx={{
          display: "flex",
          flexDirection: "column",
          alignSelf: "center",
          gap: "15px",
          padding: "60px",
          width: "100%",
          maxWidth: "500px",
          borderRadius: "20px",
        }}
        elevation={4}
      >
        <Typography
          sx={{ fontWeight: "bold", textAlign: "center" }}
          component="h1"
          variant="h4"
          color="secondary"
        >
          Seja Bem Vindo!
        </Typography>
        <Divider />
        <Box
          sx={{ display: "flex", flexDirection: "column", gap: "10px" }}
          component="form"
          noValidate
          onSubmit={handleSubmit}
        >
          <Box sx={{ display: "flex", flexDirection: "column", gap: "15px" }}>
            <TextField
              id="reg-name"
              fullWidth
              size="small"
              label="Nome"
              onChange={(e) => setName(e.target.value)}
              error={!!formErrors.name}
              helperText={formErrors.name}
            ></TextField>

            <TextField
              id="reg-mail"
              fullWidth
              size="small"
              label="E-mail"
              type="email"
              error={!!formErrors.email}
              helperText={formErrors.email}
              onChange={(e) => setEmail(e.target.value)}
            ></TextField>

            <PatternFormat
              format="(##) #####-####"
              mask="_"
              value={phone}
              onValueChange={(values) => setPhone(values.value)}
              customInput={TextField}
              label="Telefone"
              fullWidth
              size="small"
              error={!!formErrors.phone}
              helperText={formErrors.phone}
            />

            <TextField
              id="reg-password"
              fullWidth
              size="small"
              label="Senha"
              type={showPassword ? "text" : "password"}
              onChange={(e) => setPassword(e.target.value)}
              error={!!formErrors.password}
              helperText={formErrors.password}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowPassword(!showPassword)}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            ></TextField>
            
            <TextField
              id="reg-passwordrep"
              fullWidth
              size="small"
              label="Confirmar senha"
              type={showPasswordRep ? "text" : "password"}
              onChange={(e) => setPasswordRep(e.target.value)}
              error={!!formErrors.passwordRep}
              helperText={formErrors.passwordRep}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowPasswordRep(!showPasswordRep)}
                      edge="end"
                    >
                      {showPasswordRep ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            ></TextField>
            
            <Box>
              <FormGroup
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={termsAccepted}
                      onChange={(e) => setTermsAccepted(e.target.checked)}
                    />
                  }
                  label="Eu concordo com os"
                />
                <Link 
                  component="button" 
                  type="button"
                  onClick={handleOpenDialog}
                  sx={{ cursor: 'pointer' }}
                >
                  termos e condições
                </Link>
              </FormGroup>
              {formErrors.terms && (
                <Typography variant="body2" color="error" sx={{ ml: 1 }}>
                  {formErrors.terms}
                </Typography>
              )}

              <FormGroup>
                <FormControlLabel
                  control={<Checkbox />}
                  label="Quero receber e-mails com atualizações"
                ></FormControlLabel>
              </FormGroup>
            </Box>
            <Divider />
            <Box sx={{ display: "block", justifyContent: "center" }}>
              <Button
                color="primary"
                sx={{ borderRadius: "10px" }}
                size="large"
                variant="contained"
                fullWidth
                type="submit"
                disabled={loading}
                startIcon={
                  loading ? (
                    <CircularProgress size={20} color="inherit" />
                  ) : null
                }
              >
                {loading ? "Cadastrando" : "Confirmar cadastro"}
              </Button>
              <Box
                sx={{ display: "flex", justifyContent: "center", margin: "0" }}
              >
                <Link
                  color="secondary"
                  variant="body1"
                  href="/login"
                  underline="always"
                >
                  Já possuo uma conta
                </Link>
              </Box>
            </Box>
          </Box>
        </Box>
      </Card>

      {/* Dialog dos Termos e Condições */}
      <TermosCondicoesDialog 
        open={dialogOpen} 
        onClose={handleCloseDialog} 
      />
    </>
  );
}