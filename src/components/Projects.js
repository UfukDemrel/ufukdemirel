import React from 'react'
import music from '../images/music.png'; 
import chat from '../images/chat.png'; 
import shop from '../images/shop.png'; 
import calculator from '../images/calculator.png'; 

function Projects() {
  return (
    <div className='user-bio-div'>
      <div className='user-bio-p'>Projects</div>
      <div className='projects'>

        <a href='https://responsive-mu-bay.vercel.app' target='_blank' rel="noreferrer">
            <div className='pro-box'>
                <div className='pro-title'>Music App</div>
                <img src={music} alt='alt'/>
            </div>
        </a>

        <a href='https://chat-app-eta-opal.vercel.app/' target='_blank' rel="noreferrer">
          <div className='pro-box'>
              <div className='pro-title'>Chat App</div>
              <img src={chat} alt='alt'/>
          </div>
        </a>

        <a href='https://ecommerce-app-five-flax.vercel.app/' target='_blank' rel="noreferrer">
          <div className='pro-box'>
              <div className='pro-title'>Shopping App</div>
              <img src={shop} alt='alt'/>
          </div>
        </a>

        <a href='https://calculator-nine-phi-26.vercel.app/' target='_blank' rel="noreferrer">
          <div className='pro-box'>
              <div className='pro-title'>Calculator App</div>
              <img src={calculator} alt='alt'/>
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