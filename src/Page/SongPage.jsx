import React, { useEffect } from 'react';
import Song from '../Components/Song/Song'
import Footer from '../Components/Price/Footer/Footer'

function SongPage() {
  useEffect(() => {
    window.scrollTo(0, 0); 
   // Scroll to top when component mounts
  }, []);

  return (
    <div>
      <Song/>
      <Footer/>
    </div>
  )
}

export default SongPage
