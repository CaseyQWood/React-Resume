import React from 'react'

import history from '../values/expierenceValues'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCubes } from '@fortawesome/free-solid-svg-icons'

export default function Experience(props) {
  const [isVisible, setVisible] = React.useState(true);
  const domRef = React.useRef();
  React.useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
  })

  return (
    <div id='expierence__page' className='experience__container'>
      <h1>Experience</h1>

      <div className={`fade-in-section ${isVisible ? 'experience__wrapper is-visible' : 'experience__wrapper'}`}
            ref={domRef}>
        <ul className='experience__list'  >
          {history.map((data, index) => 
            <li className='expierence__item' key={index}>
              <h2>{data.where}</h2>
              <div className='item__sub' >
                <h3>{data.name}</h3>
                <h4>{data.date}</h4>
              </div>
              <p>{data.description}</p>
            </li>  
          )}
        </ul>
        <div className='experience__icon'>
          <FontAwesomeIcon icon={faCubes} />
        </div>
      </div>
    </div>
  )
}