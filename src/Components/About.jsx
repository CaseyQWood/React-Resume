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
          This is just a longer stretch of fake text that will be later 
          filled with the personal outline of my self. probably take from my resume 
        </p>
      </div>

    </div>
  )
}