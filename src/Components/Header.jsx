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

 

  return (
    <ul className={className}>
      <li onClick={() => document.getElementById("home__page").scrollIntoView({behavior: 'smooth'})}>Home</li>
      <li onClick={() => document.getElementById("about__page").scrollIntoView({behavior: 'smooth'})}>About</li>
      <li onClick={() => document.getElementById("expierence__page").scrollIntoView({behavior: 'smooth'})}>Experience</li>
      <li onClick={() => document.getElementById("portfolio__page").scrollIntoView({behavior: 'smooth'})}>Portfolio</li>
      <li onClick={() => document.getElementById("contact__page").scrollIntoView({behavior: 'smooth'})} >Contact</li>
    </ul>
  )
}