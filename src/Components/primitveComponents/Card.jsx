import React from 'react'

export default function Card(props) {

  return (
    <div className='card__contianer'>
      {/* <img className='card__icon' src={props.icon} alt='language Icon'></img> */}
      <div class="icon__lan">{props.icon}</div>
      
      <h3 className='card__name'>{props.name}</h3>
    </div>
  )
}