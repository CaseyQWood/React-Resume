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



  return (

    <div id='portfolio__page' class="container">
      <ul class="timeline">
        <li>
          <h3>2001</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </li>
        <li>
          <h3>2002</h3>
          <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
        </li>
        <li>
          <h3>2003</h3>
          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </li>
        <li>
          <h3>2004</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </li>
        <li>
          <h3>2005</h3>
          <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
        </li>
      </ul>
    </div>


    // <div id='portfolio__page' className='portfolio__container'>
    //   {portfolioData.map((data, index) => <Card key={index} img={data.image} name={data.name}/>)}
      
    // </div>
  )
}


