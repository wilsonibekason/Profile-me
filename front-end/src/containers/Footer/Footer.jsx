import React, {useState} from 'react';
import { MotionWrap, AppWrap } from '../../wrapper';
import {client}  from '../../client';
import './Footer.scss'
import { images } from '../../constants';

const Footer = () => {
  const [formData, setFormData] = useState({name: '', email: '', message: ''} );
  
   
  const [handleSubmit, setHandleSubmit] = useState(false);
  const [loading, setLoading] = useState(false);

  const {name, email, message} = formData;
  
  const handleChangeInput = (e) => {
    const {name, value} = e.target;
    setFormData({...formData, [name]: value});
  }

  const handleSubmitBtn = () => {
    setLoading(true);
    const contacts = {
      _type: 'contacts',
      name: formData.username,
      email: formData.email,
      message: formData.message,
    }

    client.create(contacts).then((data) => {
      setLoading(false);
      setHandleSubmit(true)
    }).catch((err) => {
      console.log(err);
    })
  }

  return (
    <>
    <h2 className="head-text"> Take a Coffee and feel free to Contact</h2>
    <div className="app__footer-cards">
      <div className="app__footer-card">
         <img src={images.email} alt="email" />
         <a href="mailto: wilsonibekason@gmail.com" className='p-text'> wilsonibekason@gmail.com</a>
      </div>
      <div className="app__footer-card">
         <img src={images.mobile} alt="telephone" />
         <a href="tel: +234 8139133401" className='p-text'>tel: +234 8139133401</a>
      </div>
    </div>
        {!handleSubmit ? (
          <div className="app__footer-form app__flex">
          <div className="app__flex">
              <input className='p-text' type='text' placeholder='enter your name' value={name} onChange={handleChangeInput} name='name'/>
          </div>
          <div className="app__flex">
              <input className='p-text' type='text' placeholder='enter your email' value={email} onChange={handleChangeInput} name='email'/>
          </div>
          <div>
            <textarea 
            name='message' 
            id=""  
            placeholder='enter your message' 
            cols="30" rows="10" 
            value={message} 
            className='p-text' 
            onChange={handleChangeInput}
            />
    
            <button className='p-text' type='button' onClick={handleSubmitBtn}>{!loading ? 'Send Message' : 'Sending .. '}</button>
          </div>
        </div>
        ) : (
          <div>
            <h3 className='head-text'>
            Thank you for getting in touch!
            </h3>
          </div>
        )}
   
    </>
  )
}

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'footer', 'app-whitebg'
);