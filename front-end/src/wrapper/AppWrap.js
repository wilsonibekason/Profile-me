import React from 'react';
import {NavigationDots, SocialMedia} from '../components';

const AppWrap = (Component, idNames, classNames) => function HOC() {
  return (
    <div id={idNames} className={`app__container ${classNames}`}>
    <SocialMedia/>
    <div className="app__wrapper app__flex">
    <Component/>
    <div className='copywrite'> 
    </div>
    </div>
    <NavigationDots active={idNames}/>
    </div>
  )
}

export default AppWrap