import React from 'react';
import './About.scss';
import { useTranslation } from "react-i18next";
import { Link } from "react-scroll";

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
            <Link to='contact' spy={true} smooth={true} offset={-250} duration={200}><span> {t("contactBtn")}</span></Link>
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
