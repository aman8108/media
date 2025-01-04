import React, { useEffect } from 'react';
import ProjecM from '../Components/Project/ProjecM'

function ProjectMusic() {
  useEffect(() => {
    window.scrollTo(0, 0); 
   // Scroll to top when component mounts
  }, []);

  return (
    <div>
      <ProjecM/>
    </div>
  )
}

export default ProjectMusic
