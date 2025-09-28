import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../components/context/AuthContext";

export default function ProtectedRoute({ children }) {
  const { isAuthenticated, loading } = useAuth();

  if (loading) return <p>Carregando...</p>; // spinner opcional

  if (!isAuthenticated) return <Navigate to="/login" replace />;

  return children;
}