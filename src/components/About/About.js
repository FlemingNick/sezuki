import React from 'react';
import './About.scss';
import { useTranslation } from "react-i18next";

const About = () => {

const { t } = useTranslation();
   
return(
 <section className='container' id='about'>
    
    <div className='wrapper'>
      <div className='content'>
         <h2>SEZUKI 雪子鬼</h2>
         
         <p>
            {t("aboutText")}
            <br/><br/>
            {t("aboutText2")}
         </p>
         
         <button className='btn'>
            {t("contactBtn")}
         </button>
      </div>
      <div>
         <img src={process.env.PUBLIC_URL + '/sezuki.jpg'} alt='portrait of Sezuki'/>
      </div>
    </div>
    
 </section>
)}

About.propTypes = {};

About.defaultProps = {};

export default About;
