import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import App from './App.jsx'
import './index.css'
import About from './About.jsx';
import Contact from './Contact.jsx';
import Notfound from './Notfound.jsx';
import Payment from './menu/Payment.jsx';
import './mobile.css'
import './print.css'

const MainRouter = () => {
  const [credits, setCredits] = useState(0);
  
  return (
    <Router basename="/">
    <Routes>
        <Route path="/" element={<App />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/payment" element={<Payment setcredits={setCredits} />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </Router>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MainRouter />
  </React.StrictMode>
)