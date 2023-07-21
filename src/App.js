
import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './Components/Home/Home';
import LogReg from './Components/LogReg/LogReg';
import Login from './Components/LogReg/Login';



function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/registration" element={<LogReg />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
