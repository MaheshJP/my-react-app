import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home.jsx';
import About from '../pages/About.jsx';
import Contact from '../pages/Contact.jsx';
import Authlayout from '../layout/Authlayout.jsx';
import LoginPage from '../pages/Login.jsx';
import Signup from '../pages/Signup.jsx';
import Dashboard from '../layout/Dashboard.jsx';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Authlayout />}>
        <Route path="login" element={<LoginPage />} />
        <Route path="signup" element={<Signup />} />
      </Route>
      <Route path="/dashboard" element={<Dashboard />}>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  )
}  
export default AppRoutes;