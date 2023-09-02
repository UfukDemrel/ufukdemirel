import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
  useEffect(() => {
    window.location.pathname === '/' && window.location.replace('/website');
  }, []);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simüle edilmiş bir API isteği
    setTimeout(() => {
      // API'den veri alındığında
      setLoading(false); // Yükleme tamamlandı
    }, 1000); // 1 saniye sonra veri gelir gibi düşünelim

  }, []);

  return (
    <div>
  {loading ? (
    <div className="loading">Loading&#8230;</div>
  ) : (
    <div className="app container-fluid homepage-slider-container">
    <div className='wrapper'>
      <Header/>
      <Router>
        <Switch>
          <Route path="/website" component={User} />
          <Route path="/social" component={Social} />
          <Route path="/skills" component={Skills} />
          <Route path="/projects" component={Projects} />
        </Switch>
        <Menu/> 
      </Router>
    </div>
  </div>
  )}
</div>
  );
}

export default App;
