import { 
  Button, 
  Dialog, 
  DialogActions, 
  DialogContent, 
  DialogTitle,
  Box,
  Typography,
  Divider,
  useTheme
} from '@mui/material'
import React from 'react'
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorIcon from '@mui/icons-material/Error';
import InfoIcon from '@mui/icons-material/Info';

export default function ConfirmDialog({
  open, 
  title, 
  dialogContent, 
  onConfirm, 
  onCancel,
  type = 'warning', // 'warning', 'success', 'error', 'info'
  confirmText = 'Confirmar',
  cancelText = 'Cancelar',
  confirmColor = 'primary',
  severity
}) {
  const theme = useTheme();

  // Define ícone e cores baseado no tipo
  const getDialogConfig = () => {
    switch (type) {
      case 'success':
        return {
          icon: <CheckCircleIcon />,
          color: theme.palette.success.main,
          bgColor: `${theme.palette.success.main}15`
        }
      case 'error':
        return {
          icon: <ErrorIcon />,
          color: theme.palette.error.main,
          bgColor: `${theme.palette.error.main}15`
        }
      case 'info':
        return {
          icon: <InfoIcon />,
          color: theme.palette.info.main,
          bgColor: `${theme.palette.info.main}15`
        }
      case 'warning':
      default:
        return {
          icon: <WarningAmberIcon />,
          color: theme.palette.warning.main,
          bgColor: `${theme.palette.warning.main}15`
        }
    }
  }

  const dialogConfig = getDialogConfig();

  return (
    <Dialog 
      open={open} 
      onClose={onCancel}
      PaperProps={{
        sx: {
          minWidth: '400px',
          maxWidth: '500px'
        }
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'flex-start',
          gap: 2,
          p: 3,
          pb: 2,
          backgroundColor: dialogConfig.bgColor
        }}
      >
        <Box
          sx={{
            color: dialogConfig.color,
            fontSize: '2rem',
            display: 'flex',
            alignItems: 'center',
            mt: 0.5
          }}
        >
          {dialogConfig.icon}
        </Box>
        
        <Box sx={{ flex: 1 }}>
          <DialogTitle 
            sx={{ 
              p: 0, 
              mb: 1,
              fontSize: '1.25rem',
              fontWeight: 'bold',
              color: 'text.primary'
            }}
          >
            {title}
          </DialogTitle>
          
          <DialogContent 
            sx={{ 
              p: 0,
              color: 'text.secondary',
              lineHeight: 1.5
            }}
          >
            {typeof dialogContent === 'string' ? (
              <Typography variant="body1">
                {dialogContent}
              </Typography>
            ) : (
              dialogContent
            )}
          </DialogContent>
        </Box>
      </Box>

      <Divider />

      <DialogActions 
        sx={{ 
          p: 3,
          pt: 2,
          gap: 1
        }}
      >
        <Button 
          onClick={onCancel}
          variant="outlined"
          sx={{
            fontWeight: 'bold',
            textTransform: 'none',
            px: 3,
            borderColor: 'divider',
            color: 'text.secondary',
            '&:hover': {
              borderColor: 'primary.main',
              backgroundColor: 'action.hover'
            }
          }}
        >
          {cancelText}
        </Button>
        
        <Button 
          onClick={onConfirm}
          variant="contained"
          sx={{
            fontWeight: 'bold',
            textTransform: 'none',
            px: 3,
          }}
        >
          {confirmText}
        </Button>
      </DialogActions>
    </Dialog>
  )
}