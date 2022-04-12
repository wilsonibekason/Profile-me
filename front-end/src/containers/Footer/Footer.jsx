import React, {useState} from 'react';
import { MotionWrap, AppWrap } from '../../wrapper';
import {client}  from '../../client';
import './Footer.scss'
import { images } from '../../constants';

const Footer = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: ''});
  

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
    
  const {username, email, message} = formData;
    
  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({...formData, [name]: value});
  };

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: 'contact',
      name: formData.username,
      email: formData.email,
      message: formData.message,
    };

    client.create(contact)
    .then(() => {
      setLoading(false);
      setIsFormSubmitted(true);
    })
    .catch((err) => console.log(err));
  };

 

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
        {!isFormSubmitted ? (
          <div className="app__footer-form app__flex">
          <div className="app__flex">
              <input className='p-text' type='text' placeholder='enter your name' value={username} onChange={handleChangeInput} name='username'/>
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
    
            <button className='p-text' type='button' onClick={handleSubmit}>{!loading ? 'Send Message' : 'Sending .. '}</button>
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