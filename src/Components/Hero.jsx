import React from 'react'
import '../App.scss'
import _scrollTo from '../helperFunctions/scrollTo'

export default function Hero() {

  return (
    <div id='home__page' className='hero__container'>


      <div className='main'>
        
        <div id="animation-5" class="animation">
          <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
            <defs>
              <clipPath id="mask-bottom-right">
                <rect class="clip-path" x="70%" y="0" width="30%" height="100%"/>
              </clipPath>
              <clipPath id="mask-top">
                <rect class="clip-path" x="0" y="0" width="100%" height="100%"/>
              </clipPath>
              <clipPath id="mask-bottom-left">
                <rect class="clip-path" x="75%" y="0" width="30%" height="100%"/>
              </clipPath>
            </defs>
            
            <line class="bottom-right" x1="70%" y1="100%" x2="100%" y2="100%"/>
            <line class="right" x1="100%" y1="0" x2="100%" y2="100%"/>
            <line class="top" x1="0" y1="0" x2="100%" y2="0"/>
            <line class="left" x1="0" y1="0" x2="0" y2="100%"/>
            <line class="bottom-left" x1="0" y1="100%" x2="30%" y2="100%"/>
          </svg>
          <div class="white bold arimo mask">
            <div>Casey Wood</div>
          </div>
          <div class="white mask">
            <div>Web Developer</div>
          </div>
        </div>

      <h2>Fresh out of Lighthouse Labs looking for great opportunities in the Vancouver area! Always very hungry to learn new tech and keep up with the bleeding edge. My drive comes heavily from my curiosity and love for a challenge.</h2>
      
      <div class="box" onClick={() => _scrollTo("#about__page")} >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>



    </div>
  )
}