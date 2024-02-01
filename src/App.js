import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Navigate, Routes } from 'react-router-dom';
import './App.css';
import Menu from './Menu';
import Social from './components/Social';
import User from './components/User';
import Skills from './components/Skills';
import './components/User.css';
import './components/Social.css';
import './components/Skills.css';
import './components/Projects.css';
import Header from './Header';
import Projects from './components/Projects';

function App() {
  // İlk useEffect ile ana sayfa yönlendirmesi
  useEffect(() => {
    if (window.location.pathname === '/') {
      window.location.replace('/website');
    }
  }, []);

  const [loading, setLoading] = useState(true);

  // İkinci useEffect ile simüle edilmiş API isteği
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div>
      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div className="app container-fluid homepage-slider-container">
          <div className='wrapper'>
            <Header />
            <Router>
              <Routes>
                {/* Ana sayfayı yönlendirme */}
                <Route path="/" element={<Navigate to="/website" />} />
                <Route path="/website" element={<User />} />
                <Route path="/social" element={<Social />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/projects" element={<Projects />} />
              </Routes>
              <Menu />
            </Router>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
