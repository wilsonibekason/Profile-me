import React from 'react'

const NavigationDots = ({active}) => {
  return (
    <div className='app__navigation'>
         {['home', 'about', 'works', 'skills', 'testimonials', 'contacts'].map((item, index) => (
         <a
         className='app__navigation-dot' 
         key={index + item}
         href={`#${item}`}
         style={ active === item ? {backgroundColor: '#313bac'} : {}} />
       ))}
    </div>
  )
}

export default NavigationDots