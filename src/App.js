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
import Seop from './Page/Seop';
import Contentp from './Page/Contentp';
import Webp from './Page/Webp';
import Memep from './Page/Memep';
import MetaAdsPage from './Page/MetaAdsPage';
import InfluencerPage from './Page/InfluencerPage';
import GoodleAds from './Components/GoodleAds/GoodleAds';
import Graphicsdesignpage from './Page/Graphicsdesignpage';
import OutdoorPage from './Page/OutdoorPage';
import PerformanceMarketingPage from './Page/PerformanceMarketingPage';




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
         <Route path='/metaAds' element={<MetaAdsPage/>} />
         <Route path='/Influencer' element={<InfluencerPage/>} />
         <Route path='/GoodleAds' element={<GoodleAds/>} />
         <Route path='/Graphicsdesign' element={<Graphicsdesignpage/>} />
         <Route path='/OutDoorMarketing' element={<OutdoorPage/>} />
         <Route path='/PerformanceMarketing' element={<PerformanceMarketingPage/>} />
         <Route path='/seo' element={<Seop/>} />
         <Route path='/content' element={<Contentp/>} />
         <Route path='/web' element={<Webp/>} />

         
         
         </Routes>
         
    </div>
  );
}

export default App;