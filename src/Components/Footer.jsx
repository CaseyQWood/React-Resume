import React from 'react'
import _scrollTo from '../helperFunctions/scrollTo'
import quotes from '../values/FooterValues'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin,  } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

export default function Footer() {

  const getRandomQuote = (quoteList) => {
    const whichQuote = Math.floor(Math.random() * quoteList.length);
    return (
      <>
        <h2>{quoteList[whichQuote].quote}</h2>
        <h3>{quoteList[whichQuote].who}</h3>
      </>
    )
  }

  return (
    <div className='footer__container'>

      <div class="box" onClick={() => _scrollTo("#home__page")} >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className='footer__quote'>
        {getRandomQuote(quotes)}
      </div>


      <div class="middle">
        <a class="social-button" href="https://github.com/CaseyQWood">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a class="social-button" href="https://www.linkedin.com/in/casey-wood-5a2532176/">
        <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a class="social-button" href="mailto:caseywood252@gmail.com">
        <FontAwesomeIcon icon={faEnvelope} />
        </a>
      </div>

    </div>
  )
}