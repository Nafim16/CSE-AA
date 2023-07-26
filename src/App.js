
import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './Components/Home/Home';
import LogReg from './Components/LogReg/LogReg';
import Login from './Components/LogReg/Login';
import News from './Components/News/News';
import Registration from './Components/LogReg/Registration';
import PrivateRoute from './routers/PrivateRoute';


function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/news" element={<PrivateRoute> <News></News> </PrivateRoute>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
