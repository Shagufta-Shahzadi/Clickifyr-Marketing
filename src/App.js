import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Pages import - Currently available pages
import Home from './Pages/Home';
import Aboutus from './Pages/Aboutus';
import Services from './Pages/Services';
import Internships from './Pages/Internships';
import Courses from './Pages/Courses'; 
import ContactUs from './Pages/ContactUs';
import ServiceDetail from './Pages/ServiceDetail';

function App() {
  // 🎯 DEFAULT PAGE SETTING - Change this to set your default page
  const DEFAULT_PAGE = '/Home'; // Options: '/home', '/about'

  return (
    <Router>
      <div className="App">
        <Routes>
          {/* ✅ Default redirect - Root path redirects to your chosen default page */}
          <Route path="/" element={<Navigate to={DEFAULT_PAGE} replace />} />
          
          {/* ✅ Available page routes */}
          <Route path="/home" element={<Home />} />
          <Route path="/Aboutus" element={<Aboutus />} />
          <Route path="/services" element={<Services />} />
          <Route path="/internships" element={<Internships />} />
          <Route path="/courses" element={<Courses />} /> 
          <Route path="/ContactUs" element={<ContactUs />} />
          
          {/* ✅ CORRECTED: Dynamic service detail route with parameter */}
          <Route path="/service/:serviceName" element={<ServiceDetail />} />
          
          {/* ✅ Fallback route - Any unknown route redirects to default page */}
          <Route path="*" element={<Navigate to={DEFAULT_PAGE} replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;