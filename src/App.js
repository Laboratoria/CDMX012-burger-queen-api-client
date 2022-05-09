import './App.css';
import { BrowserRouter } from "react-router-dom";
import { AppRouter } from './routers/AppRouter'


function App() {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>

  );
}

export default App;
