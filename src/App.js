import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Menu from "./components/Menu";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/menu" element={<Menu />} />
        {/* <Route path="/menu/order" element={<Order />} />
      <Route path="/kitchen/order/:id" element={<Kitchen />} />
      <Route path="/kitchen/order/List" element={<OrderList />} />
      <Route path="/personal" element={<Personal />} />
      <Route path="/products" element={<Products />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
export default App;
