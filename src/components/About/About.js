import React from 'react';
import './About.scss';

const About = () => (
 <section className='container'>
    
    <div className='wrapper'>
      <div>
         <h2>SEZUKI 雪子鬼</h2>
         <p className='introduction'>
         おはよう！ dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren</p>
         
         <p className='introduction'>
         Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempo liquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergr
         </p>
         
         <button className='btn'>
            contact me
         </button>
      </div>
      <div>
         <img src={process.env.PUBLIC_URL + '/sezuki.jpg'} alt='profile picture of Sezuki'/>
      </div>
    </div>
    
 </section>
);

About.propTypes = {};

About.defaultProps = {};

export default About;
