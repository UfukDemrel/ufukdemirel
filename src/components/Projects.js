import React from 'react'
import music from '../images/music.png'; 
import chat from '../images/chat.png'; 

function Projects() {
  return (
    <div className='user-bio-div'>
      <div className='user-bio-p'>Projects</div>
      <div className='projects'>

        <a href='https://responsive-mu-bay.vercel.app' target='_blank' rel="noreferrer">
            <div className='pro-box'>
                <div className='pro-title'>WAWE MUSİC WEBSİTE</div>
                <img src={music} alt='alt'/>
            </div>
        </a>

        <a href='https://chat-app-eta-opal.vercel.app/' target='_blank' rel="noreferrer">
          <div className='pro-box'>
              <div className='pro-title'>Chat App</div>
              <img src={chat} alt='alt'/>
          </div>
        </a>
 
      {/* 
        <div className='pro-box'>
            <div className='pro-title'>WAWE MUSİC WEBSİTE</div>
            <img src={music} alt='alt'/>
        </div> */}

      </div>
    </div>
  )
}

export default Projects;