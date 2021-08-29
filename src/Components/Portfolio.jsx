import React, { componentDidMount, useEffect } from 'react' 
import Card from './primitveComponents/Card'


import bucketUp from '../images/portfolio-img/login-facemesh.gif'
import scheduler from '../images/portfolio-img/schedulerPrev.png'

export default function Portfolio() {
  const portfolioData = [
    {
      image: bucketUp,
      name: 'BucketUp'
    },
    {
      image: scheduler,
      name: 'Scheduler'
    }

  ]

  document.addEventListener('scroll', timeline);

  function timeline(){

    var threshold_position = (window.scrollY + window.innerHeight * 2/3) - window.innerHeight * 2;
    //compare scrolltop with scrolltop on each timeline event
    var timeline_events = document.querySelectorAll('.timeline li');

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

  const portfolioScripts = [
    {
      name: 'BucketUp',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: bucketUp,
    },
    {
      name: 'Scheduler',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: scheduler
    },
    {
      name: 'Smart To-Do',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      mage: bucketUp,
    },
    {
      name: 'Three.js Journey',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      mage: bucketUp,
    }
  ]


  return (

    <div id='portfolio__page' class="container">
      <ul class="timeline">
        {
          portfolioScripts.map((data, index) => 
            <li>
              <div className='portfolio__description'>
                <div className='porfolio__info'>
                  <h3>{data.name}</h3>
                  <p>{data.description}</p>
                </div>
              </div>

              <div>
                <img className='portolio__img' src={data.img} alt='language Icon'></img>
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


