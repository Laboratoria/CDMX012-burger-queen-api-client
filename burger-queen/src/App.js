import React, { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './components/Login/Login';
import WaiterPage from './components/Waiter/Waiter';
import AdminPage from './components/Admin/Admin';
import KitchenPage from  './components/Kitchen/Kitchen'
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
            <Route path="/Admin" element={(<ProtectedRoute><AdminPage /></ProtectedRoute>)} />
            <Route path="/Kitchen" element={(<ProtectedRoute><KitchenPage /></ProtectedRoute>)} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
  );
}

export default App;