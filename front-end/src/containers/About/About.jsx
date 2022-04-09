import React from 'react';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { images } from '../../constants';
import './About.scss'

const About = () => {
  const abouts = [
    {title: 'web development', description: 'i am a web developer', imgUrl: images.about02},
    {title: 'web development', description: 'i am a web developer', imgUrl: images.about01},
    {title: 'web development', description: 'i am a web developer', imgUrl: images.about03},
    {title: 'web development', description: 'i am a web developer', imgUrl: images.about04}
  ]
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
           <img src={about.imgUrl} alt={about.title} />
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