import * as React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from '../src/components/Home.js';
import NotFoundPage from '../src/components/NotFoundPage.js'
import AuthProvider from './context/authContext.js';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import SignInSide from './components/SignInPage.js';
import SignUp from './components/SignUpPage.js';
import Album from './components/OrdersPage.js';

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <AuthProvider>
          <Routes>
            {/* public routes */}
            <Route path="/" element={<Home />}> </Route>
            <Route path="*" element= {<NotFoundPage />}> </Route>
            <Route path="/signInPage" element= {<SignInSide />}> </Route>
            <Route path="/signUpPage" element= {<SignUp />}> </Route>
            <Route path="/ordersPage" element= {<Album />}> </Route>
          </Routes>
        </AuthProvider>
      </Container>
    </React.Fragment>
  );
}

export default App;
