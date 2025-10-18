import {
  Box,
  Button,
  Dialog,
  DialogContent,
  Divider,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import React, { useState, useEffect } from "react";
import { api } from "../../services/axiosConfig.js";
import { useNotification } from "../context/NotificationProvider.jsx";
import { useAuth } from "../context/AuthContext.jsx";
import ConfirmDialog from "../ConfirmDialog.jsx";

export default function BankAccountDialog({
  initialData,
  open,
  onClose,
  onSave,
}) {
  //notificações
  const { showNotification } = useNotification();
  const { user } = useAuth();
  const [openConfirmDialog, setOpenConfirmDialog] = useState(false);

  //manipular o dialogo de confirmação de exclusão
  const handleOpenConfirmDialog = () => {
    setOpenConfirmDialog(true);
  };

  const handleCancelDialog = () => {
    setOpenConfirmDialog(false);
  };

  const handleConfirmDialog = () => {
    setOpenConfirmDialog(false);
    deleteBankAccount();
  };

  //Controle de atributos do formulário
  const [formData, setFormData] = useState(() => ({
    id: initialData?.id || "",
    accountName: initialData?.accountName || "",
    description: initialData?.description || "",
    createdAt: initialData?.createdAt || "",
    updatedAt: initialData?.updatedAt || "",
  }));

  //resetar o formulário quando o dialog for aberto ou fechado
  useEffect(() => {
    if (!open) {
      setFormErrors({});
      if (!initialData) {
        setFormData({
          id: "",
          accountName: "",
          description: "",
          createdAt: "",
          updatedAt: "",
        });
      }
    } else if (initialData) {
      setFormData({
        id: initialData.id || "",
        accountName: initialData.accountName || "",
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

  //controle de validacao do formulário
  const [formErrors, setFormErrors] = useState({});

  const validateForm = () => {
    let tempErrors = {};

    if (!formData.accountName.trim())
      tempErrors.accountName = "Preencha o nome da conta";
    if (!formData.description.trim())
      tempErrors.description = "Preencha a descrição";

    setFormErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  // enviar formulário
  const submitBankAccount = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }

    const payload = {
      accountName: formData.accountName,
      description: formData.description,
      icon: "",
      color: "",
    };

    try {
      if (initialData) {
        await api
          .put(`/bank-accounts/${initialData.id}`, payload, {
            withCredentials: true,
          })
          .then((response) => {
            showNotification(
              "Conta bancária atualizada com sucesso",
              "success"
            );
          });
      } else {
        await api
          .post(`/bank-accounts/${user.id}`, payload, { withCredentials: true })
          .then((response) => {
            showNotification("Conta bancária criada com sucesso", "success");
          });
      }
      onSave();
    } catch (error) {
      console.error("Erro ao salvar conta bancária:", error);
      const errorMessage =
        error.response?.data?.message || "Erro ao salvar conta bancária";
      showNotification(errorMessage, "error");
    }
  };

  const deleteBankAccount = async () => {
    try {
      await api.delete(`/bank-accounts/${initialData.id}`, {
        withCredentials: true,
      });
      showNotification("Conta excluída com sucesso!");
      onSave();
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || "Erro ao excluir a conta bancária";
      showNotification(errorMessage, "error");
    }
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <Box
        sx={{
          padding: 1,
          alignItems: "center",
          backgroundColor: "primary.main",
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6" sx={{ fontWeight: "bold", color: "white" }}>
            Gerenciar Conta
          </Typography>
          <IconButton onClick={onClose} size="small">
            <CloseIcon />
          </IconButton>
        </Box>
      </Box>
      <DialogContent>
        <form onSubmit={submitBankAccount} noValidate>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <TextField
              fullWidth
              label="Nome da conta"
              size="small"
              required
              value={formData.accountName}
              onChange={(e) => handleChange("accountName", e.target.value)}
              error={!!formErrors.accountName}
              helperText={formErrors.accountName}
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
          <Divider sx={{ margin: 2 }} />
          <Stack
            direction="row"
            spacing={1}
            justifyContent="flex-end"
            sx={{ mt: 3 }}
          >
            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="small"
              sx={{ minWidth: 100 }}
            >
              Salvar
            </Button>
            {initialData && (
              <Button
                type="button"
                variant="contained"
                color="error"
                size="small"
                sx={{ minWidth: 100 }}
                onClick={handleOpenConfirmDialog}
              >
                Excluir
              </Button>
            )}
          </Stack>
        </form>
      </DialogContent>
      <ConfirmDialog
        open={openConfirmDialog}
        title={"Exclusão de Conta Bancária"}
        dialogContent={`Deseja realmente excluir a conta bancária${
          initialData?.accountName ? `: ${initialData.accountName}` : ""
        }?`}
        onConfirm={handleConfirmDialog}
        onCancel={handleCancelDialog}
      />
    </Dialog>
  );
}
