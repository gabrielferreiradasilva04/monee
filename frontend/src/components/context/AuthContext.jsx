import React, { createContext, useContext, useState, useEffect } from "react";
import { api } from "../../services/axiosConfig.js";
import { useNotification } from "./NotificationProvider.jsx";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const { showNotification } = useNotification();

  //guardar dados do usuário
  const [user, setUser] = useState(null);

  useEffect(() => {
    //verificar se o usuário está autenticado
    api
      .get("/auth/verify-auth", { withCredentials: true })
      .then((res) => {
        setIsAuthenticated(true);
        return api.get("/auth/me", { withCredentials: true });
      })
      .then((res) => {
        setUser(res.data);
        console.log(res.data);
      })
      .catch(() => {
        setIsAuthenticated(false);
        setUser(null);
      })
      .finally(() => setLoading(false));
  }, []);

  const login = async (email, password) => {
    try {
      const { data } = await api.post(
        "/auth/login",
        { email, password },
        { withCredentials: true }
      );
      setUser(data);
      setIsAuthenticated(true);
      return true;
    } catch (err) {
      setUser(null);
      setIsAuthenticated(false);
      throw err;
    }
  };

  const logout = async () => {
    try {
      api.post("/auth/logout", {}, { withCredentials: true });
      setIsAuthenticated(false);
      setUser(null);
    } catch (error) {
      showNotification("Erro no processo de logout. Entre em contato conosco");
    }
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, login, logout, loading, user }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
