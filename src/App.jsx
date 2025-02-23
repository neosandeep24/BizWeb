// App.js
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import Layout from "./Layout";
import Login from "./Login";
import { Dashboard } from "./components/Dashboard";
import {Transactions} from "./components/Transactions";
import { Schedules } from "./components/Schedules";
import { Users } from "./components/Users";
import {Settings} from "./components/Settings";
import { Help } from "./components/Help";
import {Contact} from "./components/Contact";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("isAuthenticated") === "true"
  );

  // Auth handler to be passed to Login component
  const handleLogin = () => {
    localStorage.setItem("isAuthenticated", "true");
    setIsAuthenticated(true);
  };

  // Protected Route wrapper component
  const ProtectedRoute = ({ children }) => {
    if (!isAuthenticated) {
      return <Navigate to="/login" replace />;
    }
    return children;
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* Public route for login */}
          <Route 
            path="/login" 
            element={
              isAuthenticated ? 
                <Navigate to="/" replace /> : 
                <Login onLogin={handleLogin} />
            } 
          />

          {/* Protected routes */}
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Layout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Dashboard />} />
            <Route path="transactions" element={<Transactions />} />
            <Route path="schedules" element={<Schedules />} />
            <Route path="users" element={<Users />} />
            <Route path="settings" element={<Settings />} />
            <Route path="help" element={<Help />} />
            <Route path="contact" element={<Contact />} />

          </Route>

          {/* Catch all route */}
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;