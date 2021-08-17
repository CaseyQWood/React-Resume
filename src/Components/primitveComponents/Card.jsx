import React from 'react'

export default function Card(props) {

  return (
    <>
      <img className='card__icon' src={props.icon} alt='language Icon'></img>
      <h3>{props.name}</h3>
    </>
  )
}