import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/home';
import Blogs from './components/Blogs/Blogs';
import AboutUs from './components/About-us/Aboutus';
import ContactUs from './components/Contact-us/Contactus';
import { Navigate } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="*" element={<Navigate to="/home" />} />

        </Routes>

      </div>
    </Router>
  );
}

export default App;
