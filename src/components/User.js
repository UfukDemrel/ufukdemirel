import React from 'react'
import profileImage from '../images/profile.jpg'; 

function User() {
  return (
      <div>
          <div className='user-bio-div'>
              <div className='user-bio-p drop-in'>Hello!</div>
              <div className='img-text'>
                <img src={profileImage} className='user-bio-img grow rounded-full md:rounded-2xl' alt="alt"/>
                <p className='user-bio-text drop-in-2'>l'm' a Web & Shopify Developer shaping the web with code and design.</p>
              </div>
              {/* <div className='quetes'>
                <img src='tırnak.png' alt='alt'/>
                <p>If we stop here and go no further, why have we come this far?</p>
              </div> */}
          </div>
      </div>
  )
}

export default User;
