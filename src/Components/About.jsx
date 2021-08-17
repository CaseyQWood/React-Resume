import React from 'react'
import profile from '../images/black-white-profile.jpg'

export default function About() {

  return (
    <div className='about__container'>

      <div className='about__profile-img'>
        <img src={profile} alt='profile'></img>
      </div>

      <div className='about__description'>
        <p>
        Addicted to learning and pushing to improve. I am some one who is always eager to pick up a new skill and always willing to adapt to challenges. In my spare time I typically spend my time tinkering on projects, playing warhammer or video games 
        </p>
      </div>

    </div>
  )
}