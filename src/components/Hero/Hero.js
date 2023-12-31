import React from 'react';
import './Hero.scss'
// import { useTranslation } from "react-i18next";

const Hero = () => {
  
  return(
    <section className='hero-container' id='home'>
      <div className='headline'>
        <h1>SEZUKI</h1>
        <img src={process.env.PUBLIC_URL + '/janome.svg'} alt='family sign'/>
        <h1>TATTOO</h1>
      </div>
    </section>
)};

Hero.propTypes = {};

Hero.defaultProps = {};

export default Hero;
