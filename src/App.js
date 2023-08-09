
import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './Components/Home/Home';
import LogReg from './Components/LogReg/LogReg';
import Login from './Components/LogReg/Login';
import News from './Components/News/News';
import Registration from './Components/LogReg/Registration';
import PrivateRoute from './routers/PrivateRoute';
import Stories from './Components/Stories/Stories';
import Businesses from './Components/Businesses/Businesses';
import Job from './Components/Job/Job';
import Committee from './Components/Committee/Committee';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Profile from './Components/Profile/Profile';
import Articles from './Components/Articles/Articles';
import Error from './Components/Error/Error';
import SuperAdmin from './Components/Admins/SuperAdmin/SuperAdmin';


function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Error />} />
          <Route path="/" element={<Home />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/news" element={<PrivateRoute> <News></News> </PrivateRoute>} />
          <Route path="/stories" element={<Stories />} />
          <Route path="/businesses" element={<Businesses />} />
          <Route path="/job" element={<Job />} />
          <Route path="/committee" element={<Committee />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/profile" element={<PrivateRoute> <Profile></Profile> </PrivateRoute>} />
          <Route path="/superadmin" element={<PrivateRoute> <SuperAdmin></SuperAdmin> </PrivateRoute>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
