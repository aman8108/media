import React from 'react'
import Navi from './Navi/Navi'
import Banner from './Banner/Banner'
import About from './About/About'
import Ctc from './Ctc/Ctc'
import Service from './Service/Service'
import Whychoo from './WhyChoo/Whychoo'
import Team from './OurTeam/Team'
import Counter from './Counter/Counter'
import Testimonial from './Testimonial/Testimonial'
import Price from './Price/Price'
import Client from './Client/Client'
import Project from './Price/Project'
import Footer from './Price/Footer/Footer'

function Home() {
  return (
    <>
   
      <Banner/>
      <About/>
      <Ctc/>
      <Service/>
      <Whychoo/>
      <Team/>
      <Counter/>
      <Testimonial/>
      {/* <Price/> */}
      <Client/>
      <Project/>
      <Footer/>
    </>
  )
}

export default Home
