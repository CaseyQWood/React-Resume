import './App.scss';
import Hero from './Components/Hero';
import Header from './Components/Header';
import About from './Components/About';
import Carousel from './Components/primitveComponents/Carousel';
import { useEffect, useState } from 'react';

function App() {
  const [visable, setVisable] = useState(true)

  const top = window.pageYOffset
  console.log(top)
  

  useEffect(() => {
    window.onscroll = () => {
      window.pageYOffset > 5 ? setVisable(false) : setVisable(true)
    }
  })

  return (
    <div className="App">
      <Header visable={visable}/>
      <Hero/>
      <About/>
      <Carousel/>
    </div>
  );
}

export default App;
