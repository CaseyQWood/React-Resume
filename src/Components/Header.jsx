import React from 'react'
import classNames from 'classnames'
import useVisable from '../Hooks/useVisable'

export default function Header() {
  const visable = useVisable()
  
  const className = classNames('header', {
    'header--hidden': !visable,
    'header--show': visable 
  })

  return (
    <header className={className}>
      <h2>Home</h2>
      <h2>About</h2>
      <h2>Experience</h2>
      <h2>Portfolio</h2>
      <h2>Contact</h2>
    </header>
  )
}