import './App.scss';
import Hero from './Components/Hero';
import Header from './Components/Header';
import About from './Components/About';
import Carousel from './Components/primitveComponents/Carousel';
import Portfolio from './Components/Portfolio';
import Experience from './Components/Experience';
import Footer from './Components/Footer';

function App() {

  return (
    <div className="App">
      <Header/>
      <Hero/>
      <About/>
      <Carousel/>
      <Portfolio/>
      <Experience/>
      <Footer/>
    </div>
  );
}

export default App;
