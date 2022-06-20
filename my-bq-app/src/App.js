import * as React from 'react';
import { Routes, Route } from "react-router-dom";
import NotFoundPage from '../src/components/NotFoundPage.js'
import AuthProvider from './context/authContext.js';
import CssBaseline from '@mui/material/CssBaseline';
import SignInSide from './components/SignInPage.js';
import BreakfastPage from './components/BreakfastPage.js';
import LunchPage from './components/LunchPage.js';
import SummaryCheckoutPage from './components/SummaryCheckoutPage.js';
import KitchenPage from './components/KitchenPage.js';
import OrdersReadyPage from './components/OrdersReadyPage.js';
import AdminPage from './components/AdminPage.js';

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
        <AuthProvider>
          <Routes>
            {/* public routes */}
            <Route path="*" element= {<NotFoundPage />}> </Route>
            <Route path="/signInPage" element= {<SignInSide />}> </Route>
            <Route path="/breakfastPage" element= {<BreakfastPage />}> </Route>
            <Route path="/lunchPage" element= {<LunchPage />}> </Route>
            <Route path="/summaryCheckoutPage" element= {<SummaryCheckoutPage />}> </Route>
            <Route path="/kitchenPage" element= {<KitchenPage />}> </Route>
            <Route path="/ordersReadyPage" element= {<OrdersReadyPage />}> </Route>
            <Route path="/adminPage" element= {<AdminPage />}> </Route>
          </Routes>
        </AuthProvider>
    </React.Fragment>
  );
}

export default App;
