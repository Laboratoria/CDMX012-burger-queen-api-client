import React, { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './components/Login';
import WaiterPage from './components/Waiter';
import './App.css';
import { AuthProvider } from './context/AutProvider';
import { ProtectedRoute } from './components/ProtectedRouter/ProtectedRouter';

function App() {
  return (
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/Waiter" element={(<ProtectedRoute><WaiterPage /></ProtectedRoute>)} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
  );
}

export default App;
