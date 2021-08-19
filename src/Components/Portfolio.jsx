import React from 'react' 
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

  return (
    <div id='portfolio__page' className='portfolio__container'>
      {portfolioData.map((data, index) => <Card key={index} icon={data.image} name={data.name}/>)}
      
      {/* <Card/>
      <Card/>
      <Card/>
      <Card/> */}
    </div>
  )
}