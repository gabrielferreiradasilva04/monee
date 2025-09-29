import {
  Box,
  Button,
  Dialog,
  DialogContent,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import React, { useState, useEffect } from "react";
import { api } from "../../services/axiosConfig.js"
import { useNotification } from "../context/NotificationProvider.jsx";

export default function BankAccountDialog({
  initialData,
  open,
  onClose,
  onSave,
}) {
  //notificações
  const { showNotification } = useNotification();
  
  //Controle de atributos do formulário
  const [formData, setFormData] = useState(() => ({
    name: initialData?.name || "",
    description: initialData?.description || "",
    createdAt: initialData?.createdAt || "",
    updatedAt: initialData?.updatedAt || "",
  }));

  //controle de validacao do formulário
  const [formErrors, setFormErrors] = useState({});

  const validateForm = () => {
    let tempErrors = {};

    if (!formData.name.trim()) tempErrors.name = "Preencha o nome da conta";
    if (!formData.description.trim())
      tempErrors.description = "Preencha a descrição";

    setFormErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  useEffect(() => {
    if (!open) {
      setFormErrors({});
      if (!initialData) {
        setFormData({
          name: "",
          description: "",
          createdAt: "",
          updatedAt: "",
        });
      }
    } else if (initialData) {
      setFormData({
        name: initialData.name || "",
        description: initialData.description || "",
        createdAt: initialData.createdAt || "",
        updatedAt: initialData.updatedAt || "",
      });
      setFormErrors({});
    }
  }, [open, initialData]);

  // Manipulador de mudanças nos campos do formulário
  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  // Manipulador de submissão do formulário
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      console.log("Erros de validação:", formErrors);
      return;
    }
    
    //enviar dados para a api e tratar
    await api.post("/bank-accounts", formData , {withCredentials: true})
    .then((response) => {
      showNotification("Conta bancária salva com sucesso", "success");
    })
    .catch((error) => {
      console.error("Erro ao salvar conta bancária:", error);
      const errorMessage = error.response?.data?.message || "Erro ao salvar conta bancária";
      showNotification(errorMessage, "error");
      return;
    });

    //emitir o evento para o componente pai
    onSave(formData);
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogContent>
        <form onSubmit={handleSubmit} noValidate>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 2,
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Contas
            </Typography>
            <IconButton onClick={onClose} size="small">
              <CloseIcon />
            </IconButton>
          </Box>

          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <TextField
              fullWidth
              label="Nome da conta"
              size="small"
              required
              value={formData.name}
              onChange={(e) => handleChange("name", e.target.value)}
              error={!!formErrors.name}
              helperText={formErrors.name}
            />
            <TextField
              fullWidth
              label="Descrição"
              size="small"
              required
              value={formData.description}
              onChange={(e) => handleChange("description", e.target.value)}
              error={!!formErrors.description}
              helperText={formErrors.description}
            />
            <TextField
              fullWidth
              label="Adicionada em"
              size="small"
              value={formData.createdAt}
              disabled
            />
            <TextField
              fullWidth
              label="Atualizada em"
              size="small"
              value={formData.updatedAt}
              disabled
            />
          </Box>

          <Stack
            sx={{ display: "flex", justifyContent: "center", gap: 2, mt: 3 }}
          >
            <Button
              type="submit"
              size="large"
              variant="contained"
              color="primary"
            >
              Salvar
            </Button>
            {initialData && (
              <Button
                type="button"
                size="large"
                variant="contained"
                color="error"
                onClick={() => console.log("Excluir conta", initialData)}
              >
                Excluir
              </Button>
            )}
          </Stack>
        </form>
      </DialogContent>
    </Dialog>
  );
}
