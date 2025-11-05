import React from 'react'
import shop from '../images/shop.png';
import translate from '../images/translate.jpg';
import dropzone from '../images/dropzone.jpg';
import editor from '../images/editor.jpg';
import portfolio from '../images/portfolio.jpg';
import speech from '../images/speech.jpg';
import english from '../images/english.png';

function Projects() {
  return (
    <div className='user-bio-div'>
      <div className='user-bio-p'>PROJECTS</div>
      <div className='projects'>

        <a href='https://grammer-zeta.vercel.app/' target='_blank' rel="noreferrer">
          <div className='pro-box'>
              <img src={english} alt='alt'/>
          </div>
        </a>

        <a href='https://www.youtube.com/watch?v=8koPfnC1qvU' target='_blank' rel="noreferrer">
          <div className='pro-box'>
              <img src={translate} alt='alt'/>
          </div>
        </a>

        <a href='https://www.youtube.com/watch?v=KSd3YNeXWak' target='_blank' rel="noreferrer">
          <div className='pro-box'>
              <img src={dropzone} alt='alt'/>
          </div>
        </a>

        <a href='https://www.youtube.com/watch?v=ZCFJDKjYfTg' target='_blank' rel="noreferrer">
            <div className='pro-box'>
                <img src={speech} alt='alt'/>
            </div>
        </a>

        <a href='https://www.youtube.com/watch?v=Nia7R65XGTg' target='_blank' rel="noreferrer">
          <div className='pro-box'>
              <img src={editor} alt='alt'/>
          </div>
        </a>

        <a href='https://www.youtube.com/watch?v=r_WGBSofS0Q' target='_blank' rel="noreferrer">
          <div className='pro-box'>
              <img src={portfolio} alt='alt'/>
          </div>
        </a>

      <a href='https://ecommerce-app-five-flax.vercel.app/' target='_blank' rel="noreferrer">
          <div className='pro-box'>
              <img src={shop} alt='alt'/>
          </div>
        </a>

      </div>
    </div>
  )
}

export default Projects;