import React from 'react'

const history = [
  {
    name: 'Knowledge Expert',
    where: 'Shaw Cable',
    date: '2018 - 2019',
    description: 'As a Knowledge Expert I had responsibility for communicating with specialty teams as a driven tech leader. Common task included, acting as support members for the front line agents, delegating escalation to appropriate teams or self managing, creating and maintaining troubleshooting processes, Subject Matter Expert (SME) for new tech being introduced into the company, creation of data driven training plans for front line agents.'
  },
  {
    name: 'Owner/Opperator',
    where: 'Dancing Dragons',
    date: '2009 - 2016',
    description: 'Dancing Dragons was my first startup, it was a multi-service corporation that focused on the distribution and creation of performance equipment. Other services offered were studio space for artists, networking, skillshare, and assistance with contracts for shows and events'
  }
]

export default function Experience(props) {

  const [isVisible, setVisible] = React.useState(true);
  const domRef = React.useRef();
  React.useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
  })

  console.log(isVisible)


  return (
    <div id='expierence__page' className='experience__container'>
      <h1>Experience</h1>
      <ul className='experience__list'  className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
          ref={domRef}>
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
    </div>
  )
}