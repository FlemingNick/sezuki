import React from 'react';
import './Contact.scss'
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { useTranslation } from "react-i18next";

const Contact = () => {
   const form = useRef();

   const { t } = useTranslation();

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
   <section className='container anchor' id='contact'>
      <div className='contact-wrapper'>
         
         
         <h2 >{t("contact.header")}</h2>
         <div>
            <h4>{t("contact.note.header")}</h4>
            
            <p>
               {t("contact.note.text")}
            </p>
         </div>
         <form method="post" enctype="text/plain" ref={form} onSubmit={sendEmail}>
            <span className='form-element'>
               <p>{t("contact.form.name")}</p>
               <input type="text" name="from_name" placeholder={t("contact.form.namePlaceholder")} required/>
            </span>
            <span className='form-element'>
               <p>{t("contact.form.mail")}</p>
               <input type="email" name="user_email" placeholder={t("contact.form.mailPlaceholder")} required/>
            </span>
            <span className='form-element'>
               <p>{t("contact.form.phone")}</p>
               <input type="tel" name="telephone" placeholder='+00 0123456' required/>
            </span>
            <span className='form-element'>
               <p>{t("contact.form.message")}</p>
               <textarea type="textarea" name="message" placeholder={t("contact.form.messagePlaceholder")} required/>
            </span>
            <span className='submit-element'>
               <input type="submit" value={t("contact.form.send")} className='btn'/>
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
