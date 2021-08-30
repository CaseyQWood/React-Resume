import React from 'react'
import classNames from 'classnames'
import useVisable from '../Hooks/useVisable'
import _scrollTo from '../helperFunctions/scrollTo'

export default function Header() {
  const visable = useVisable()
  
  const className = classNames('header', {
    'header--hidden': visable,
    'header--show': !visable 
  })

  return (
    <ul className={className}>
      <li onClick={() => _scrollTo("#home__page", 0)}>Home</li>
      <li onClick={() => _scrollTo("#about__page")}>About</li>
      <li onClick={() => _scrollTo("#portfolio__page")}>Portfolio</li>
      <li onClick={() => _scrollTo("#expierence__page")}>Experience</li>
      <li onClick={() => _scrollTo("#contact__page")} >Contact</li>
    </ul>
  )
}