import React, { componentDidMount, useEffect } from 'react' 

import bucketUp from '../images/portfolio-img/login-facemesh.gif'
import scheduler from '../images/portfolio-img/schedulerPrev.png'

const portfolioScripts = [
  {
    name: 'BucketUp',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    stack: ['React', 'threeJS', 'JavaScript', 'nodeJS'],
    image: bucketUp
  },
  {
    name: 'Scheduler',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    stack: ['React', 'threeJS', 'JavaScript', 'nodeJS'],
    image: scheduler
  },
  {
    name: 'Smart To-Do',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    stack: ['React', 'threeJS', 'JavaScript', 'nodeJS'],
    image: bucketUp
  },
  {
    name: 'Three.js Journey',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    stack: ['React', 'threeJS', 'JavaScript', 'nodeJS'],
    image: bucketUp
  }
]

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
                <img src={data.image} alt='language Icon'></img>
              </div>
            
            </li>
          )
        }
        
      </ul>
    </div>


    // <div id='portfolio__page' className='portfolio__container'>
    //   {portfolioData.map((data, index) => <Card key={index} img={data.image} name={data.name}/>)}
      
    // </div>
  )
}


