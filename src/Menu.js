import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';
import home from './images/home.png'; 
import social from './images/social.png'; 
import skills from './images/skills.png'; 
import pro from './images/pro.png'; 
import cv from './images/cv.png'; 

function Menu() {

  const [visible, setVisible] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [visible3, setVisible3] = useState(false);
  const [visible4, setVisible4] = useState(false);
  const [visible5, setVisible5] = useState(false);

  return (
    <div className="card card-1 align-right">

      <div className="img-card1" style={visible ? { display: 'flex' } : { display: 'none' }}>Home</div>
      <Link to="/website">
      <div className="menu-img">
        <img
          className="home"
          src={home}
          alt="alt"
          onMouseOver={() => setVisible(true)}
          onMouseOut={() => setVisible(false)}
        />
      </div>
      </Link>
        
      <div className="img-card2" style={visible2 ? { display: 'flex' } : { display: 'none' }}>Social</div>  
      <Link to="/social"> 
        <div className="menu-img">
          <img
            className="home"
            src={social}
            alt="alt"
            onMouseOver={() => setVisible2(true)}
            onMouseOut={() => setVisible2(false)}
          />
          
        </div>
      </Link> 

      <div className="img-card3" style={visible3 ? { display: 'flex' } : { display: 'none' }}>Skills</div>
      <Link to="/skills">
      <div className="menu-img">
        <img
          className="home"
          src={skills}
          alt="alt"
          onMouseOver={() => setVisible3(true)}
          onMouseOut={() => setVisible3(false)}
        />
      </div>
      </Link> 

      <div className="img-card5" style={visible5 ? { display: 'flex' } : { display: 'none' }}>Projects</div>
      <Link to="/projects">
      <div className="menu-img">
        <img
          className="home"
          src={pro}
          alt="alt"
          onMouseOver={() => setVisible5(true)}
          onMouseOut={() => setVisible5(false)}
        />
      </div>
      </Link>
      
      <div className="img-card4" style={visible4 ? { display: 'flex' } : { display: 'none' }}>CV</div>
      <div className="menu-img">
        <a href='https://drive.google.com/file/d/1PwWL91Jq7r45JNi1dzwvD2q3rrOFBuD-/view?usp=drive_link' rel="noreferrer" target='_blank'>
        <img
          className="home"
          src={cv}
          alt="alt"
          onMouseOver={() => setVisible4(true)}
          onMouseOut={() => setVisible4(false)}
        />
        </a>
      </div>
    </div>
  );
}

export default Menu;
