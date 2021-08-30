import React from 'react'
import profile from '../images/black-white-profile.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, } from '@fortawesome/free-brands-svg-icons'

export default function About() {

  return (
    <div id='about__page' className='about__container'>

      <h2>About Me</h2>

      <div className='about__body'>

      <div className='about__profile-img'>
        <img src={profile} alt='profile'></img>
      </div>

      <div className='about__description'>
          <p>
            Addicted to learning and pushing to improve. I am some one who is always eager to pick up a new skill and always willing to adapt to challenges. In my spare time I typically spend my time tinkering on projects, playing warhammer or video games 
          </p>
        <h3>Contact Info</h3>
        <div class= "about__contact">
          <ul>
            <li><a href="mailto:name@email.com">caseywood252@gmail.com</a></li>
            <li>Vancouver, Bc</li>
          </ul>

          <div class="middle">
            <a class="social-button" href="https://github.com/CaseyQWood">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a class="social-button" href="https://www.linkedin.com/in/casey-wood-5a2532176/">
            <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>

        </div>
      </div>

      </div>
    </div>
  )
}