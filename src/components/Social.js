import React from 'react';
import wander from '../images/wander.gif'; 
import instagram from '../images/instagram.png'; 
import twitter from '../images/twitter.png'; 
import linkedlin from '../images/linkedlin.png'; 
import github from '../images/github.png'; 
import bionluk from '../images/bionluk.png'; 
import udemy from '../images/udemy.png';
import gmail from '../images/gmail.png';

const Social = () => {
  return (
    <div style={{ display: 'flex' }}>
      <div className='user-bio-div'>
        <div className='user-bio-p'>Social</div>
        <a href='https://www.instagram.com/wanderscenic/' target='_blank' rel="noreferrer">
          <div className='one-grid'>
            <img alt='alt' src={wander}/>
          </div>
        </a>
      </div>

      <div class="grid-container">
          <a href='https://www.instagram.com/wanderscenic/' target='_blank' rel="noreferrer">
            <div class="grid-item">
              <img alt='alt' src={instagram}/>
              <p className='title'>ufukdemrel</p>
              <p className='text'>@ufukdemrel</p>
            </div>
          </a>

          <a href='https://twitter.com/FrontJockey' target='_blank' rel="noreferrer">
            <div class="grid-item">
              <img alt='alt' src={twitter}/>
                <p className='title'>ufukdemrel</p>
                <p className='text'>@frontjockey</p>
            </div>
          </a>

          <a href='https://www.linkedin.com/in/ufuk-demirel-3136b6183/' target='_blank' rel="noreferrer">
            <div class="grid-item">
              <img alt='alt' src={linkedlin}/>
                <p className='title'>ufukdemrel</p>
                <p className='text'>@ufukdemrel</p>
            </div>
          </a>

          <a href='https://github.com/UfukDemrel' target='_blank' rel="noreferrer">
            <div class="grid-item">
              <img alt='alt' src={github}/>
                <p className='title'>ufukdemrel</p>
                <p className='text'>@ufukdemrel</p>
            </div>
          </a>

          <a href='https://bionluk.com/ufukdemrel' target='_blank' rel="noreferrer">
            <div class="grid-item">
              <img src={bionluk} alt="top logo" />
                <p className='title'>ufukdemrel</p>
                <p className='text'>@ufukdemrel</p>
            </div>
          </a>

          <a href='https://www.udemy.com/course/uygulama-ve-odevlerle-mssql-egitimi-part-2/learn/lecture/25323008#overview' target='_blank' rel="noreferrer">
            <div class="grid-item">
              <img src={udemy} alt="top logo" />
                <p className='title'>ufukdemrel</p>
                <p className='text'>@ufukdemrel</p>
            </div>
          </a>

          <a href='https://mail.google.com/mail/u/0/?pli=1#inbox' target='_blank' rel="noreferrer">
            <div class="grid-item">
              <img src={gmail} alt="top logo" />
                <p className='title'>ufuk demirel</p>
                <p className='text'>@udemirel</p>
            </div>
          </a>

          <a href='https://www.instagram.com/wanderscenic/' target='_blank' rel="noreferrer">
            <div class="grid-item">
              <img src="https://i.imgur.com/jkwFqfX.png" alt="top logo" />
                <p className='title'>ufukdemrel</p>
                <p className='text'>@ufukdemrel</p>
            </div>
          </a>

        </div>
    </div>
  );
};

export default Social;
