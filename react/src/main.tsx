import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import "./index.css";
import App from "./App.tsx";
import Dashboard from "./pages/DashboardHome.tsx";
import DashboardLayout from "./layout/DashboardLayout.tsx";
import TicketManagement from "./pages/TicketManagement.tsx";
import Signup from "./pages/Signup.tsx";
import Login from "./pages/Login.tsx";
import AppFooter from "./components/layouts/footer.tsx";
import ProtectedRoute from "./components/layouts/ProtectedRoute.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<AppFooter />}>
          <Route path="/" element={<App />} />

          <Route path="auth/login" element={<Login />} />
          <Route path="auth/signup" element={<Signup />} />

          <Route element={<DashboardLayout />}>
            <Route
              path="dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="tickets"
              element={
                <ProtectedRoute>
                  <TicketManagement />
                </ProtectedRoute>
              }
            />
          </Route>

          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
