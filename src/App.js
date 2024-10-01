import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import OurWork from './components/OurWork';
import Services from './components/Services';
import Contact from './components/Contact';
import TermsConditions from './components/TermsConditions';
import PrivacyPolicy from './components/PrivacyPolicy';
import ReturnsPolicy from './components/ReturnsPolicy';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/ourwork" element={<OurWork />} />
        <Route path="/services" element={<Services/>} />
        {/* <Route path="/ourwork" element={<div>Our Work Page</div>} /> */}
        <Route path="/contact" element={<Contact/>} />
        <Route path="/terms" element={<TermsConditions />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/returns" element={<ReturnsPolicy />} />

      </Routes>
    </Router>
  );
}

export default App;
