import React from 'react'
import classNames from 'classnames'
import useVisable from '../Hooks/useVisable'

export default function Header() {
  const visable = useVisable()
  
  const className = classNames('header', {
    'header--hidden': visable,
    'header--show': !visable 
  })

  return (
    <header className={className}>
      <h2><a href='#home__page' >Home</a></h2>
      <h2><a href='#about__page' >About</a></h2>
      <h2><a href='#expierence__page' >Experience</a></h2>
      <h2><a href='#portfolio__page' >Portfolio</a></h2>
      <h2><a href='#contact__page' >Contact</a></h2>
    </header>
  )
}