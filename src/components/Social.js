import React from 'react';
import wander from '../images/wander.gif'; 

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
          <div class="grid-item">
            <img src="https://i.imgur.com/jkwFqfX.png" alt="top logo" />
            <p>Odin 1</p>
          </div>
          <div class="grid-item">
            <p>Odin 2</p>
            <img src="https://i.imgur.com/jkwFqfX.png" alt="top logo" />
          </div>
          <div class="grid-item">
            <p>Odin 3</p>
            <img src="https://i.imgur.com/jkwFqfX.png" alt="top logo" />
          </div>
          <div class="grid-item">
            <p>Odin 4</p>
            <img src="https://i.imgur.com/jkwFqfX.png" alt="top logo" />
          </div>
          <div class="grid-item">
            <p>Odin 5</p>
            <img src="https://i.imgur.com/jkwFqfX.png" alt="top logo" />
          </div>
          <div class="grid-item">
            <p>Odin 6</p>
            <img src="https://i.imgur.com/jkwFqfX.png" alt="top logo" />
          </div>
          <div class="grid-item">
            <p>Odin 7</p>
            <img src="https://i.imgur.com/jkwFqfX.png" alt="top logo" />
          </div>
          <div class="grid-item">
            <p>Odin 8</p>
            <img src="https://i.imgur.com/jkwFqfX.png" alt="top logo" />
          </div>
        </div>
    </div>
  );
};

export default Social;
