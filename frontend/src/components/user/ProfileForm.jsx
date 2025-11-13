// import { Box, Button, Divider, TextField } from "@mui/material";
// import React from "react";

// export default function ProfileForm({user}) {
//   const handleSubmit = () => {};
//   return (
//     <>
//       <Box
//         sx={{ display: "flex", flexDirection: "column", gap: "10px" }}
//         component="form"
//         noValidate
//         onSubmit={handleSubmit}
//       >
//         <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
//           <TextField
//             id="profile-name"
//             fullWidth
//             size="small"
//             label="Nome"
//             disabled
//             value={user.name}
//           ></TextField>
//           <TextField
//             id="profile-email"
//             fullWidth
//             size="small"
//             label="E-mail"
//             disabled
//             value={user.email}
//           ></TextField>
//           <TextField
//             id="profile-phone"
//             fullWidth
//             size="small"
//             label="Telefone / Celular"
//             disabled
//             value={user.phone}
//           ></TextField>
//           <Divider />
//           <Button
//             variant="contained"
//             sx={{
//               color: "white",
//               fontWeight: "bold",
//               textTransform: "none",
//               borderRadius: "8px"
//             }}
//           >
//             Salvar Alterações
//           </Button>
//         </Box>
//       </Box>
//     </>
//   );
// }

// ProfileForm.jsx
import { 
  Box, 
  Button, 
  Divider, 
  TextField,
  Typography,
  Paper
} from "@mui/material";
import React, { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Cancel";

export default function ProfileForm({ user }) {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: user?.phone || ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você implementaria a lógica de atualização
    console.log('Dados atualizados:', formData);
    setIsEditing(false);
    // Mostrar mensagem de sucesso
  };

  const handleCancel = () => {
    setFormData({
      name: user?.name || '',
      email: user?.email || '',
      phone: user?.phone || ''
    });
    setIsEditing(false);
  };

  const handleChange = (field) => (e) => {
    setFormData(prev => ({
      ...prev,
      [field]: e.target.value
    }));
  };

  return (
    <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
      {/* Header do Form */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h6" sx={{ fontWeight: "bold", color: "primary.main" }}>
          Informações Pessoais
        </Typography>
        {!isEditing && (
          <Button
            startIcon={<EditIcon />}
            onClick={() => setIsEditing(true)}
            variant="outlined"
            size="small"
            sx={{ 
              textTransform: 'none',
              borderRadius: '20px'
            }}
          >
            Editar
          </Button>
        )}
      </Box>

      <Box
        sx={{ display: "flex", flexDirection: "column", gap: "16px" }}
        component="form"
        noValidate
        onSubmit={handleSubmit}
      >
        <Paper 
          elevation={0} 
          sx={{ 
            p: 3, 
            border: '1px solid',
            borderColor: 'divider',
            borderRadius: 2,
            backgroundColor: 'background.default'
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <TextField
              id="profile-name"
              fullWidth
              size="small"
              label="Nome completo"
              disabled={!isEditing}
              value={formData.name}
              onChange={handleChange('name')}
              InputProps={{
                sx: { borderRadius: 1 }
              }}
            />
            
            <TextField
              id="profile-email"
              fullWidth
              size="small"
              label="E-mail"
              type="email"
              disabled={!isEditing}
              value={formData.email}
              onChange={handleChange('email')}
              InputProps={{
                sx: { borderRadius: 1 }
              }}
            />
            
            <TextField
              id="profile-phone"
              fullWidth
              size="small"
              label="Telefone / Celular"
              disabled={!isEditing}
              value={formData.phone}
              onChange={handleChange('phone')}
              InputProps={{
                sx: { borderRadius: 1 }
              }}
            />
          </Box>
        </Paper>

        {isEditing && (
          <>
            <Divider />
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Button
                fullWidth
                variant="outlined"
                startIcon={<CancelIcon />}
                onClick={handleCancel}
                sx={{
                  fontWeight: "bold",
                  textTransform: "none",
                  borderRadius: "8px",
                  py: 1
                }}
              >
                Cancelar
              </Button>
              <Button
                fullWidth
                type="submit"
                variant="contained"
                startIcon={<SaveIcon />}
                sx={{
                  fontWeight: "bold",
                  textTransform: "none",
                  borderRadius: "8px",
                  py: 1,
                  background: 'linear-gradient(135deg, #2E7D32 0%, #1B5E20 100%)'
                }}
              >
                Salvar Alterações
              </Button>
            </Box>
          </>
        )}
      </Box>
    </Box>
  );
}