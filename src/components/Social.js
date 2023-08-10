import React, { useState } from "react";
import wander from '../images/wander.gif'; 
import instagram from '../images/instagram.png'; 
import twitter from '../images/twitter.png'; 
import linkedlin from '../images/linkedlin.png'; 
import github from '../images/github.png'; 
import bionluk from '../images/bionluk.png'; 
import udemy from '../images/udemy.png';
import gmail from '../images/gmail.png';
import spotify from '../images/spotify.png';
import sustum from '../images/sustum.mp3';

const Social = () => {

  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = React.createRef();

  const handlePlayButtonClick = () => {
    const audio = audioRef.current;

    if (audio.paused) {
      audio.play();
      setIsPlaying(true);
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="all">
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
            <div class="grid-item color1">
              <img alt='alt' src={instagram}/>
              <p className='title'>ufukdemrel</p>
              <p className='text'>@ufukdemrel</p>
              <button type='submit' className='instagram'>Follow</button>
            </div>
          </a>

          <a href='https://twitter.com/FrontJockey' target='_blank' rel="noreferrer">
            <div class="grid-item color2">
              <img alt='alt' src={twitter}/>
                <p className='title'>ufukdemrel</p>
                <p className='text'>@frontjockey</p>
                <button type='submit' className='twitter'>Follow</button>
            </div>
          </a>

          <a href='https://www.linkedin.com/in/ufuk-demirel-3136b6183/' target='_blank' rel="noreferrer">
            <div class="grid-item color3">
              <img alt='alt' src={linkedlin}/>
                <p className='title'>ufukdemrel</p>
                <p className='text'>@ufukdemrel</p>
                <button type='submit' className='linkedlin'>Follow</button>
            </div>
          </a>

          <a href='https://github.com/UfukDemrel' target='_blank' rel="noreferrer">
            <div class="grid-item">
              <img alt='alt' src={github}/>
                <p className='title'>ufukdemrel</p>
                <p className='text'>@ufukdemrel</p>
                <button type='submit' className='github'>Follow</button>
            </div>
          </a>

          <a href='https://bionluk.com/ufukdemrel' target='_blank' rel="noreferrer">
            <div class="grid-item color5">
              <img src={bionluk} alt="top logo" />
                <p className='title'>ufukdemrel</p>
                <p className='text'>@ufukdemrel</p>
                <button type='submit' className='bionluk'>Follow</button>
            </div>
          </a>

          <a href='https://www.udemy.com/course/uygulama-ve-odevlerle-mssql-egitimi-part-2/learn/lecture/25323008#overview' target='_blank' rel="noreferrer">
            <div class="grid-item color6">
              <img src={udemy} alt="top logo" />
                <p className='title'>ufukdemrel</p>
                <p className='text'>@ufukdemrel</p>
                <button type='submit' className='udemy'>Follow</button>
            </div>
          </a>

          <a href='https://mail.google.com/mail/u/0/?pli=1#inbox' target='_blank' rel="noreferrer">
            <div class="grid-item color7">
              <img src={gmail} alt="top logo" />
                <p className='title'>ufuk demirel</p>
                <p className='text'>@udemirel</p>
                <button type='submit' className='gmail'>Mail</button>
            </div>
          </a>

            <div class="grid-item color8">
              <img src={spotify} alt="top logo" />
                <p className='title'>Sustum</p>
                <p className='text'>Evdeki Saat</p>
                  <audio style={{ display: 'none' }}  ref={audioRef} controls>
                    <source src="horse.ogg" type="audio/ogg"/>
                    <source src={sustum} type="audio/mpeg"/>
                  </audio>
                  <button className="spotify"
                    type="button"
                    onClick={handlePlayButtonClick}
                  >
                    {isPlaying ? "Pause" : "Play"}
                  </button>
            </div>

        </div>
    </div>
  );
};

export default Social;
