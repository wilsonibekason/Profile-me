import React, {useEffect, useState} from 'react';
import './Testimonials.scss';
import { client, urlFor } from '../../client';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { MotionWrap, AppWrap } from '../../wrapper';


const Testimonials = () => {
  const [brands, setBrands] = useState([])
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const query = '*[_type == "testimonials"]';
    const brandsQuery = '*[_type == "brands"]';
    
    client.fetch(query).then((data) => {
      setTestimonials(data);
    });

    client.fetch(brandsQuery).then((data) => {
      setBrands(data);
    });
  }, []);

  const tests = testimonials[currentIndex];

  const handleClick = (index) => {
    setCurrentIndex(index);
  }
  
  return (
    <>
    {testimonials.length && (
       <>
       <div className="app__testimonial-item app__flex">
         <img src={urlFor(tests.imgurl)} alt='testimonial' />
         <div className="app__testimonial-content">
           <p className="p-text">
             {tests.feedback}
           </p>

           <div>
             <h4 className="bold-text">{tests.name}</h4>
             <h5 className="p-text">{tests.company}</h5>
           </div>
         </div>
       </div>

       <div className="app__testimonial-btn app__flex">
         <div className="app__flex" onClick={() => handleClick(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)}>
         <HiChevronLeft />
         </div>
         <div className="app__flex" onClick={() => handleClick(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)}>
         <HiChevronRight />
         </div>
       </div>
       </>
    )}

       <div className="app__testimonial-brands app__flex">
         {brands.map((brand) => (
           <motion.div
           whileInView={{opacity: [0, 1]}}
           transition={{duration: .5, type: 'tween'}}
           key={brand._id}
           >
             <img src={urlFor(brand.imgUrl)} alt={brand.name} />
           </motion.div>
         ))}
       </div>

    </>
  )
}

export default AppWrap(
  MotionWrap(Testimonials, 'app_testimonial'),
  'testimonials', 'app__whitebg'
);