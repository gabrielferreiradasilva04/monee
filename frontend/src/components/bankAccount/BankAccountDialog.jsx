import {
  Box,
  Button,
  Dialog,
  DialogContent,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import React, { useState, useEffect } from "react";

export default function BankAccountDialog({
  initialData,
  open,
  onClose,
  onSave,
}) {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    createdAt: "",
    updatedAt: "",
  });

  useEffect(() => {
    if (initialData) {
      setFormData({
        name: initialData.name || "",
        description: initialData.description || "",
        createdAt: initialData.createdAt || "",
        updatedAt: initialData.updatedAt || "",
      });
    } else {
      setFormData({ name: "", description: "", createdAt: "", updatedAt: "" });
    }
  }, [initialData]);

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.description) {
      alert("Nome da conta e descrição são obrigatórios!");
      return;
    }
    onSave(formData);
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogContent component="form" onSubmit={handleSubmit}>
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
            type="text"
            label="Nome da conta"
            size="small"
            required
            value={formData.name}
            onChange={(e) => handleChange("name", e.target.value)}
          />
          <TextField
            fullWidth
            type="text"
            label="Descrição"
            size="small"
            required
            value={formData.description}
            onChange={(e) => handleChange("description", e.target.value)}
          />
          <TextField
            fullWidth
            type="text"
            label="Adicionada em"
            size="small"
            value={formData.createdAt}
            onChange={(e) => handleChange("createdAt", e.target.value)}
            disabled
          />
          <TextField
            fullWidth
            type="text"
            label="Atualizada em"
            size="small"
            value={formData.updatedAt}
            onChange={(e) => handleChange("updatedAt", e.target.value)}
            disabled
          />
        </Box>

        <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mt: 3 }}>
          <Button type="submit" size="large" variant="contained" color="primary">
            Salvar
          </Button>
          {initialData && (
            <Button
              type="button"
              size="large"
              variant="contained"
              color="error"
              onClick={() => {
                console.log("Excluir conta", initialData);
              }}
            >
              Excluir
            </Button>
          )}
        </Box>
      </DialogContent>
    </Dialog>
  );
}
