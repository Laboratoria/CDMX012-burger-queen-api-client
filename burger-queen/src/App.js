import React, { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './components/Login';
import './App.css';

function App() {
  return (
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginPage />} />
          </Routes>
      </BrowserRouter>
  );
}

export default App;
