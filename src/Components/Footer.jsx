import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin,  } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const quotes = [
  {
    quote: `"I'm prepared for any insane adventure life throws our way and I don't know about you, but I'm looking forward to every one of them."`,
    who: `'Jeff Winger'`
  },
  {
    quote: `'lifting as we climb, onward and upward we go, struggling and striving, and hoping that the buds and blossoms of our desires will burst into glorious fruition ere long'`,
    who: `'Mary Church Terrell'`
  }
]

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
        <a class="social-button" href="#">
        <FontAwesomeIcon icon={faEnvelope} />
        </a>
      </div>

    </div>
  )
}