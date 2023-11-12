import React from 'react';
import './Hero.scss'
import { useTranslation } from "react-i18next";

const Hero = () => {
  
  const { t } = useTranslation();
  
  return(
    <section className='hero-container' id='home'>
      <div className='motivation'>
        <h1>{t("headline")}</h1>
      </div>
    </section>
)};

Hero.propTypes = {};

Hero.defaultProps = {};

export default Hero;
