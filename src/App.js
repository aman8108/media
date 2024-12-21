import './App.css';
import About from './Components/About/About';
import Banner from './Components/Banner/Banner';
import Counter from './Components/Counter/Counter';
import Ctc from './Components/Ctc/Ctc';
import Navi from './Components/Navi/Navi';
import Team from './Components/OurTeam/Team';
import Footer from './Components/Price/Footer/Footer';
import Price from './Components/Price/Price';
import Project from './Components/Price/Project';
import Service from './Components/Service/Service';
import Testimonial from './Components/Testimonial/Testimonial';
import Whychoo from './Components/WhyChoo/Whychoo';

function App() {
  return (
    <div className="App">
         <Navi/>
         <Banner/>
         <About/>
         <Ctc/>
         <Service/>
         <Whychoo/>
         <Team/>
         <Counter/>
         <Testimonial/>
         <Price/>
         <Project/>
         <Footer/>
    </div>
  );
}

export default App;
