import React from 'react'
import profile from '../images/black-white-profile.jpg'

export default function About() {

  return (
    <div id='about__page' className='about__container'>

      <h2>About Me:</h2>

      <div className='about__body'>

      <div className='about__profile-img'>
        <img src={profile} alt='profile'></img>
      </div>

      <div className='about__description'>
        <p>
        Addicted to learning and pushing to improve. I am some one who is always eager to pick up a new skill and always willing to adapt to challenges. In my spare time I typically spend my time tinkering on projects, playing warhammer or video games 
        </p>
      </div>

      </div>
    </div>
  )
}