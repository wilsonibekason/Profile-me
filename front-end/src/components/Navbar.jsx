import React, { useState } from 'react';
import { images } from '../constants';
import {HiMenuAlt4, HiX} from 'react-icons/hi';
import {motion} from 'framer-motion'
import './Navbar.scss'

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
   <nav className='app__navbar'>
     <div className='app__navbar-logo'>
       <img src={images.logo} alt="logo" />
     </div>
     <ul className='app__navbar-links'>
       {['home', 'About', 'works', 'Skills', 'Contacts'].map((index) => (
         <li className='app__flex p-text' key={`link-${index}`}>
         <div /> 
         <a href={`#${index}`}> {index} </a>
        
         </li>
       ))}
     </ul>
    

     <div className="app__navbar-menu">
     <HiMenuAlt4 onClick={() => setToggle(true)}/>
     {toggle && (
       <motion.div 
       whileInView={{x: [300, 0]}}
       transition={{duration: 0.85,  ease: 'easeOut'}}
       >
       <HiX onClick={()=>setToggle(false)}/>
       <ul>
       {['home', 'About', 'works', 'Skills', 'Contacts'].map((index) => (
         <li  key={index}>
         
         <a href={`#${index}`} onClick={()=> setToggle(false)}> {index} 
         </a>    
         </li>
       ))}
     </ul>
       </motion.div>
     )}
     </div>
   </nav>
  );
};

export default Navbar