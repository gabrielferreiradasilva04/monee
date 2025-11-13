// import {
//   Box,
//   Button,
//   Drawer,
//   IconButton,
//   Tooltip,
//   Typography,
// } from "@mui/material";
// import React from "react";
// import ProfileForm from "./user/ProfileForm.jsx";
// import LogoutIcon from "@mui/icons-material/Logout";
// import { useAuth } from "../components/context/AuthContext.jsx";

// export default function ProfileDrawer({ open, onClose, user }) {
//   const { logout } = useAuth();

//   return (
//     <Drawer
//       anchor="right"
//       open={open}
//       onClose={onClose}
//       PaperProps={{
//         sx: {
//           width: 500,
//           p: 3,
//           backgroundColor: "background.paper",
//         },
//       }}
//     >
//       <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
//         <Typography variant="h6" sx={{ fontWeight: "bold" }} gutterBottom>
//           Meu Perfil Monee
//         </Typography>
//         <Tooltip title="Logout">
//           <IconButton
//             size="big"
//             onClick={() => {
//               logout();
//             }}
//           >
//             <LogoutIcon sx={{ color: "red" }} />
//           </IconButton>
//         </Tooltip>
//       </Box>

//       <Box sx={{ display: "flex", flexDirection: "column" }}>
//         <ProfileForm user={user} />
//         <Button
//           variant="contained"
//           sx={{
//             color: "white",
//             fontWeight: "bold",
//             textTransform: "none",
//             borderRadius: "8px",
//             mt: 1
//           }}
//           onClick={onClose}
//         >
//           Fechar
//         </Button>
//       </Box>
//     </Drawer>
//   );
// }
import {
  Box,
  Button,
  Drawer,
  IconButton,
  Tooltip,
  Typography,
  Avatar,
  Divider,
} from "@mui/material";
import React from "react";
import ProfileForm from "./user/ProfileForm.jsx";
import LogoutIcon from "@mui/icons-material/Logout";
import CloseIcon from "@mui/icons-material/Close";
import { useAuth } from "../components/context/AuthContext.jsx";

export default function ProfileDrawer({ open, onClose, user }) {
  const { logout } = useAuth();

  const getInitials = (name) => {
    return name
      ? name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2)
      : 'U';
  };

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          width: 420,
          backgroundColor: "background.paper",
          backgroundImage: 'linear-gradient(135deg, #f5f7fa 0%, #e4edf5 100%)',
        },
      }}
    >
      {/* Header */}
      <Box 
        sx={{ 
          p: 3, 
          pb: 2,
          background: 'linear-gradient(135deg, #2E7D32 0%, #1B5E20 100%)',
          color: 'white',
          position: 'relative'
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", mb: 2 }}>
          <Box>
            <Typography variant="h5" sx={{ fontWeight: "bold" }} gutterBottom>
              Meu Perfil
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.9 }}>
              Gerencie suas informações
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', gap: 1 }}>
            <Tooltip title="Sair">
              <IconButton
                size="small"
                onClick={logout}
                sx={{ 
                  color: 'white',
                  '&:hover': { 
                    backgroundColor: 'rgba(255,255,255,0.1)' 
                  } 
                }}
              >
                <LogoutIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Fechar">
              <IconButton
                size="small"
                onClick={onClose}
                sx={{ 
                  color: 'white',
                  '&:hover': { 
                    backgroundColor: 'rgba(255,255,255,0.1)' 
                  } 
                }}
              >
                <CloseIcon />
              </IconButton>
            </Tooltip>
          </Box>
        </Box>

        {/* User Avatar Section */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mt: 2 }}>
          <Avatar
            sx={{
              width: 64,
              height: 64,
              backgroundColor: 'rgba(255,255,255,0.2)',
              border: '3px solid rgba(255,255,255,0.3)',
              fontSize: '1.5rem',
              fontWeight: 'bold'
            }}
          >
            {getInitials(user?.name)}
          </Avatar>
          <Box>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              {user?.name || 'Usuário'}
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.9 }}>
              {user?.email || 'user@example.com'}
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Content */}
      <Box sx={{ p: 3, flex: 1, display: 'flex', flexDirection: 'column' }}>
        <ProfileForm user={user} />
        
        <Box sx={{ mt: 'auto', pt: 2 }}>
          <Divider sx={{ my: 2 }} />
          <Button
            fullWidth
            variant="outlined"
            onClick={onClose}
            sx={{
              fontWeight: "bold",
              textTransform: "none",
              borderRadius: "8px",
              py: 1
            }}
          >
            Fechar
          </Button>
        </Box>
      </Box>
    </Drawer>
  );
}
