import './App.scss';
import Hero from './Components/Hero';
import Header from './Components/Header';
import About from './Components/About';
import Carousel from './Components/primitveComponents/Carousel';
import Portfolio from './Components/Portfolio';

function App() {

  return (
    <div className="App">
      <Header/>
      <Hero/>
      <About/>
      <Carousel/>
      {/* <Portfolio/> */}
    </div>
  );
}

export default App;
