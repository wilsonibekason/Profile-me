import React from 'react';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { client, urlFor } from '../../client';
import './About.scss';

const About = () => {

  // implementing sanity functionality

  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => {
      setAbouts(data);
    });
}, []);

  return (
    <>
    <h2 className='head-text'>I know That <span>Good Designs</span>
    <br />
     means{'  '}
    <span>Good Business</span>
     </h2>
     <div className="app__profiles">
          {abouts.map((about, index) => (
            <motion.div 
          whileInView={{opacity: 1}}
          whileHover={{scale: 1.1}}
          transition={{duration: .5, type: 'twen'}}
          className='app__profile-item'
          key={about.title + index}
            >
           <img src={urlFor(about.imgUrl)} alt={about.title} />
           <h2 className='bold-text' style={{marginTop: 20}}>
             {about.title}
           </h2>
           <p className='bold-text' style={{marginTop: 10}}>
            {about.description}
           </p>
            </motion.div>
          ))}
     </div>
    </>
  )
}

export default About