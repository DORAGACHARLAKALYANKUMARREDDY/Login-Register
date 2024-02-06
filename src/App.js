import logo from './logo.svg';
import './App.css';
import {Route,BrowserRouter as Router,Routes } from 'react-router-dom'
import About from './templates/AboutUs/About.jsx';
import Contact from './templates/Contact/Contact.jsx';
import Home from './templates/Home/Home.jsx';
import Navbar from './templates/NavBar/Navbar.jsx';
import Login from "./templates/LoginPage/Login.jsx"
import Registration from './templates/LoginPage/RegistrationPage.jsx';
import UserDetails from './userDetails.jsx';

function App() {
  return (
             
        <div>
          <Navbar/>
        <Router> 
          <Routes>
            <Route path="/" exact element={<Login/>}/>
            <Route path="/userDetails" element={<UserDetails/>}/>
            <Route path="/home"  element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path='/registration' element={<Registration/>}/>
          </Routes>
       </Router>
        </div>
        
  );
}

export default App;
