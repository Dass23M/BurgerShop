import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'

const Contact = () => {
  return (
    <div className='contact'>
       <div className="contact-col">
        <h3 >Send us a message <img src={msg_icon} alt="" /></h3>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus, nesciunt. Dolores minima sed quisquam provident totam possimus autem veniam reprehenderit eum voluptatibus, dicta sit quas consectetur esse enim laboriosam sequi?</p>
        <ul>  
            <li> <img src={mail_icon} alt="" />dasunreact78@gmail.com</li>
            <li> <img src={phone_icon} alt="" />+94 78 444 5689</li>
            <li> <img src={location_icon} alt="" />26/A,Gall Road,Colombo 03</li>
        </ul>
       </div>
       <div className="contact-col">
        <form > 
            <label >Your Name</label>
            <input type="text" name='name' placeholder='Enter your name' required/>
            <label Phone Number> Phone Number</label>
            <input type="tel" name='phone' placeholder='Enter your mobile number' required />
            <label> Write your message here</label>
            <textarea name="message" rows="6" placeholder='Enter your message' required></textarea>
            <button type='submit' className='btnSubmit'> Submit </button>
        </form>
        
       </div>
    </div>
  )
}

export default Contact