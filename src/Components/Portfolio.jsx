import React, { componentDidMount, useEffect } from 'react' 

import bucketUp from '../images/portfolio-img/login-facemesh.gif'
import bucketUpBudget from '../images/portfolio-img/bucket-animation-budget.gif'
import scheduler from '../images/portfolio-img/schedulerprev.png'
import scheduler2 from '../images/portfolio-img/create_appointment_true.jpg'
import galaxy from '../images/portfolio-img/galaxy-three.gif'
import helmet from '../images/portfolio-img/flight-helmet-three.gif'

const portfolioScripts = [
  {
    name: 'BucketUp',
    description: 'Stylized budgeting app allowing users to create, manage and share their personal budgets created using the app.',
    stack: ['React', 'threeJS', 'JavaScript', 'PSQL', 'Express', 'CannonJS', 'Material UI', 'SCSS', 'React Charts'],
    image: [bucketUp, bucketUpBudget]
  },
  {
    name: 'Scheduler',
    description: 'Scheduler app that allows the users to choose any day from Monday to Friday and book an appointment with a available interviewer for that day. Includes testing suites',
    stack: ['React', 'JavaScript', 'Express', 'HTML/CSS', 'Cypress', 'jest'],
    image: [scheduler, scheduler2]
  },
  {
    name: 'Three.js Journey',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    stack: ['JavaScript', 'threeJS', 'CannonJS', 'WebGL', 'TypeScript', 'HTML/CSS'],
    image: [galaxy, helmet]
  },
  // {
  //   name: 'Smart To-Do',
  //   description: 'A smart categorizing to-do list where users input activities that get sorted into correct sections using redementary machine learning to update logic for correct catigorization.',
  //   stack: ['Jquery', 'JavaScript', 'Sass', 'Express'],
  //   image: [bucketUp, scheduler2]
  // }

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
                {data.image.map((img, index) => (index === 0 ? <img  key={index} src={img} alt='language Icon'></img> : <img className='top' key={index} src={img} alt='language Icon'></img>))}
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


