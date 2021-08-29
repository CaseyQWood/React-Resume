import React from 'react'
import classNames from 'classnames'
import useVisable from '../Hooks/useVisable'

export default function Header() {
  const visable = useVisable()
  
  const className = classNames('header', {
    'header--hidden': visable,
    'header--show': !visable 
  })

  const scrollToTop = () => {
    console.log('test')
    //  window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
     document.getElementById("contact__page").scrollIntoView({behavior: 'smooth'});
  }

  function _scrollTo(selector, yOffset = -77){
    const el = document.querySelector(selector);
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
  
    window.scrollTo({top: y, behavior: 'smooth'});
  }

  return (
    <ul className={className}>
      {/* <li onClick={() => document.getElementById("home__page").scrollIntoView({behavior: 'smooth', block: 'start'})}>Home</li>
      <li onClick={() => document.getElementById("about__page").scrollIntoView({behavior: 'smooth', block: 'start'})}>About</li>
      <li onClick={() => document.getElementById("expierence__page").scrollIntoView({behavior: 'smooth', block: 'start'})}>Experience</li>
      <li onClick={() => document.getElementById("portfolio__page").scrollIntoView({behavior: 'smooth', block: 'start'})}>Portfolio</li>
      <li onClick={() => document.getElementById("contact__page").scrollIntoView({behavior: 'smooth', block: 'start'})} >Contact</li> */}
      <li onClick={() => _scrollTo("#home__page", 0)}>Home</li>
      <li onClick={() => _scrollTo("#about__page")}>About</li>
      <li onClick={() => _scrollTo("#expierence__page")}>Experience</li>
      <li onClick={() => _scrollTo("#portfolio__page")}>Portfolio</li>
      <li onClick={() => _scrollTo("#contact__page")} >Contact</li>
    </ul>
  )
}