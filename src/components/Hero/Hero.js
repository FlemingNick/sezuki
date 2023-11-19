import React from 'react';
import './Hero.scss'
import { useTranslation } from "react-i18next";

const Hero = () => {
  
  const { t } = useTranslation();
  
  return(
    <section className='hero-container' id='home'>
      {/* <div className='motivation'>
        <h1>{t("headline")}</h1>
      </div> */}
      <img src={process.env.PUBLIC_URL + '/tattooBG1.jpg'} alt='hero teaser image with janome logo'/>
    </section>
)};

Hero.propTypes = {};

Hero.defaultProps = {};

export default Hero;
