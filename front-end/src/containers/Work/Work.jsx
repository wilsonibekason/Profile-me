import React, {useState, useEffect} from 'react';
import {AiFillEye, AiFillGithub} from 'react-icons/ai';
import {motion} from 'framer-motion';
import {AppWrap, MotionWrap} from '../../wrapper';
import { client,  urlFor} from '../../client';


import './Work.scss'

const Work = () => {
  const [activefilter, setActivefilter] = useState('All');
  const [animateCard, setAnimateCard] = useState({y: 0, opacity: 1});

  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);

  useEffect(() => {
    const query = '*[_type=="works"]';

    client.fetch(query).then((data) => {
      setWorks(data);
      setFilterWork(data);
    })
  }, [])
  

  const handleWorkfilter = (item) => {
            setActivefilter(item);
            setAnimateCard([{y: 100, opacity: 0}]);

            setTimeout((count) => {
              setAnimateCard([{y: 0, opacity: 1}]);

              if (item === 'All') {
                setFilterWork(works);
              } else {
                setFilterWork(works.filter((work) => work.tags.includes(item))); 
              };

            }, 500);
  }
  return (
    <>
    <h2 className='head-text'> My Creative <span>and Nice</span>
    <br />
    portfolio{'  '}
    <span>sections</span>
     </h2>
     <div className="app__work-filter">
       {[' UI/UX', 'Web App', 'Mobile App', 'Reactjs', 'All'].map((item, index) => (
         <div key={item + index}
         onClick={() => {handleWorkfilter(item)}}
         className={`app__work-filter-item app__flex p-text ${activefilter === item ? 'item-active': ''}`}
         > 
        {item}
         </div>
       ))}
     </div>

     <motion.div
     animate={animateCard}
     transition={{duration: .5, delayChildren: .5}}
     className='app__work-portfolio'
     >
     {filterWork.map((work, index) => (
       <div className="app__work-item app__flex" key={index}>
       <div className="app__work-img app__flex">
        <img src={urlFor(work.imgUrl)} alt={work.name} />
        <motion.div 
      whileHover={{opacity: [0, 1]}}
      transition={{duration: .25, ease: 'easeInOut', staggerChildren: 0.5}}
      className='app__work-hover app__flex'
        >
        <a href={work.projectLink}  target='_blank' rel='noreferrer'>
        <motion.div
        whileInView={{scale: [1, .9]}}
        transition={{duration: .5, ease: 'easeInOut', staggerChildren: 0.5}}
        className='app__flex'
        >
        <AiFillEye/>
        </motion.div>
        </a>


        <a href={work.codeLink}  target='_blank' rel='noreferrer'>
        <motion.div
        whileInView={{scale: [1, .9]}}
        transition={{duration: .5, ease: 'easeInOut', staggerChildren: 0.5}}
        className=' app__flex'
        >

        <AiFillGithub/>
        </motion.div>
        </a>


        </motion.div>
       </div>
      
       <div className="app__work-content app__flex">
       <h4 className='bold-text'>
       {work.title}
       </h4>
       <p className="p-text" style={{marginTop: 10}}>
       {work.description}
       </p>
       <div className="app__work-tag app__flex">
         <p className="p-text">{work.tags[0]}</p>
       </div>
       </div>
       </div>
     ))}
     </motion.div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Work,
       'app__works'),
 'works', 'app__primarybg');