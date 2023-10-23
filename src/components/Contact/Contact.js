import React from 'react';
import './Contact.scss'
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
   const form = useRef();

   const [success, setSuccess] = useState(false);

   const sendEmail = (e) => {
      e.preventDefault();

      emailjs.sendForm('service_x05qggm', 'template_uun0lif', form.current, 'E_oV0eYB6G7VptzX_')
      .then((result) => {
          setSuccess(true)
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset();
   };

   

   return(
   <section className='container'>
      <div className='contact-wrapper'>
         <h2>Contact me</h2>
         <form method="post" enctype="text/plain" ref={form} onSubmit={sendEmail}>
            <span className='form-element'>
               <p>Name</p>
               <input type="text" name="from_name" placeholder='John Doe' required/>
            </span>
            <span className='form-element'>
               <p>E-Mail</p>
               <input type="email" name="user_email" placeholder='john.doe@yourmail.com' required/>
            </span>
            <span className='form-element'>
               <p>Message</p>
               <textarea type="textarea" name="message" placeholder='desired motive, area, color, time' required/>
            </span>
            <span className='submit-element'>
               <input type="submit" value="send" className='btn'/>
            </span>

            {success &&
            <div className='success-message'>
               Thank you for your request! I will message you back as soon as possible.
            </div>
         }
         </form>
         
         
      </div>
   </section>
   );
}

Contact.propTypes = {};

Contact.defaultProps = {};

export default Contact;
