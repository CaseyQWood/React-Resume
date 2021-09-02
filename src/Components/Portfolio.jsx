import React from 'react' 

import portfolioScripts from '../values/portfolioValues'

export default function Portfolio() {

  document.addEventListener('scroll', timeline);

  function timeline() {
    const threshold_position = (window.scrollY + window.innerHeight * 2/3) - window.innerHeight * 2;
    //compare scrolltop with scrolltop on each timeline event
    const timeline_events = document.querySelectorAll('.timeline li:not(.stack)');

    for(const i in timeline_events){
      if(timeline_events[i].offsetTop < threshold_position){
        timeline_events[i].classList.add('visible');
      } else {
        if (timeline_events[i].classList) {
          timeline_events[i].classList.remove('visible')
        }
      }
    }
  }

  return (

    <div id='portfolio__page' class="container">
      <h1>Portfolio</h1>
      <ul className="timeline">
        {
          portfolioScripts.map((data, index) => 
            <li key={index}>
              <div className='portfolio__description'>
                <div className='porfolio__info'>
                  <h3>{data.name}</h3>
                  <p>{data.description}</p>
                    <ul>
                      {data.stack.map((tech, index) => <li className="stack" key={index}>{tech}</li>)}
                    </ul>
                </div>
              </div>

              <div className='portolio__img'>
                {data.image.map((img, index) => (index === 0 ? <img  key={index} src={img} alt='language Icon'></img> : <img className='top' key={index} src={img} alt='language Icon'></img>))}
              </div>
            
            </li>
          )
        }
      </ul>
    </div>
  )
}


