import './App.css';
import {
  Routes,
  Route,
} from "react-router-dom";
import {Login} from './components/screenComponents/Login'
import { Orders } from './components/screenComponents/Orders';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Orders" element={<Orders/>} />
      </Routes>
    </div>
  );
}

export default App;
