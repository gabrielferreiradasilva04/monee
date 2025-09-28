import React, { createContext, useContext, useState } from "react";
import { Snackbar, Alert } from "@mui/material";

const NotificationContext = createContext();

export const useNotification = () => useContext(NotificationContext);

export function NotificationProvider({ children }) {
  const [notification, setNotification] = useState({
    open: false,
    message: "",
    severity: "info",
  });

  const showNotification = (message, severity = "info") => {
    setNotification({ open: true, message, severity });
  };

  const handleClose = () => {
    setNotification((prev) => ({ ...prev, open: false }));
  };

  return (
    <NotificationContext.Provider value={{ showNotification }}>
      {children}
      <Snackbar
        open={notification.open}
        autoHideDuration={4000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert onClose={handleClose} severity={notification.severity} variant="filled">
          {notification.message}
        </Alert>
      </Snackbar>
    </NotificationContext.Provider>
  );
}
