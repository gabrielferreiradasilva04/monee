import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material'
import React from 'react'

export default function ConfirmDialog({open, title, dialogContent, onConfirm, onCancel}) {
  return (
    <Dialog open={open}>
        <DialogTitle>
            {title}
        </DialogTitle>
        <DialogContent>
            {dialogContent}
        </DialogContent>
        <DialogActions>
            <Button onClick={onConfirm} >Confirmar</Button>
            <Button onClick={onCancel}>Cancelar</Button>
        </DialogActions>
    </Dialog>
  )
}
