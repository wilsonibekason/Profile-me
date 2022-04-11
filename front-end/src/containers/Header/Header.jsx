import React from 'react';
import {motion} from 'framer-motion'
import { AppWrap } from '../../wrapper';
import {images} from '../../constants';
import './Header.scss'

const Header = () => {
  const scaleVariants  = {
    whileInView: {
      scale: [0, 1],
      opacity: [0, 1],
      transition: {
        duration: {
          duration: 1,
          ease: 'easeInOut'
        }
      }
    }
  }
  return (
    <div className='app__header app__flex'>
      <motion.div
      whileInView={{x:[-100, 0], opacity: [0, 1]}}
      transition={{duration: 5}}
      className='app__header-info'
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span>*</span>
            <div style={{marginLeft: 20}}>
              <p className="p-text">Hello, I am</p>
              <h1 className="head-text">Wilson</h1>
            </div>
          </div>

          <div className="tag-cmp app__flex">
            <p className="p-text">Wed Developer</p>
            <p className="p-text">Hello I am</p>
          </div>
        </div>
      </motion.div>
        
      <motion.div
      
      whileInView={{x:[-100, 0], opacity: [0, 1]}}
      transition={{duration: 1, delayChildren: .5}}
      className='app__header-img'>
        <img src={images.profile} alt="profile-bg" />
        <motion.img
        whileInView={{x:[-100, 0], scale: [0, 1]}}
        transition={{duration: 5, ease: 'easeInOut'}}
        className='overlay-circle'
        src={images.circle}
        alt='profile_circle'

        >

        </motion.img>
      </motion.div>

      <motion.div
       variants={scaleVariants} 
      whileInView={scaleVariants.whileInView} 
      className='app__header-circles'>
       {[images.flutter, images.react, images.redux, images.sass].map((index) => (
         <div className="circle-cmp app_flex" key={`circle-${index}`}>
           <img src={index} alt="circle" />
         </div>
       ))}
      </motion.div>
    </div>
  )
}

export default AppWrap(Header, 'home');