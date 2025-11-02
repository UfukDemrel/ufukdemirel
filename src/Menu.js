import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';
import home from './images/home.png'; 
import social from './images/social.png'; 
import skills from './images/skills.png'; 
import pro from './images/pro.png'; 
import cv from './images/cv.png'; 

function Menu() {
  const [hoverIndex, setHoverIndex] = useState(null);

  const menuItems = [
    { icon: home, label: 'HOME', path: '/' },
    { icon: social, label: 'SOCİAL', path: '/social' },
    { icon: skills, label: 'SKİLLS', path: '/skills' },
    { icon: pro, label: 'PROJECTS', path: '/projects' },
    { icon: cv, label: 'CV', path: 'https://drive.google.com/file/d/1PwWL91Jq7r45JNi1dzwvD2q3rrOFBuD-/view?usp=drive_link' },
  ];

  return (
    <div className="menu-container">
      {menuItems.map((item, index) => (
        <Link
          key={index}
          to={item.path}
          className={`menu-item ${hoverIndex === index ? 'active' : ''}`}
          onMouseEnter={() => setHoverIndex(index)}
          onMouseLeave={() => setHoverIndex(null)}
        >
          <img src={item.icon} alt={item.label} />
          <span className="label">{item.label}</span>
        </Link>
      ))}
    </div>
  );
}

export default Menu;
