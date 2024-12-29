import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Navi from './Components/Navi/Navi';
import Aboutppp from './Components/AboutPP/Aboutppp';
import ServicerPage from './Page/ServicerPage';
import OttPage from './Page/OttPage';
import BrandPage from './Page/BrandPage';
import ContactPage from './Page/ContactPage';
import Whatsappiconwhatsappicin from './Components/whatsapp/whatsappicin';
import DetailsPage from './Page/DetailsPage';
import ProjectMusic from './Page/ProjectMusic';
import BrandDetailP from './Page/BrandDetailP';
import Gmbp from './Page/Gmbp';
import Memep from './Page/Memep';




function App() {
  return (
    <div className="App">
         <Navi/>
         <Whatsappiconwhatsappicin/>
         <Routes >
         <Route path='/' element = {<Home/>} />
         <Route path='/aboutpage' element= {<Aboutppp/>}/>
         <Route path='/service' element= {<ServicerPage/>}/>
         <Route path='/ott'element={<OttPage/>}/>
         <Route path='/brand' element={<BrandPage/>}/>
         <Route path='/contact' element={<ContactPage/>} />
         <Route path='/detai' element={<DetailsPage/>} />
         <Route path='/music' element={<ProjectMusic/>} />
         <Route path='/brandbuilding' element={<BrandDetailP/>} />
         <Route path='/gmb' element={<Gmbp/>} />
         <Route path='/meme' element={<Memep/>} />
         
         
         </Routes>
         
    </div>
  );
}

export default App;
