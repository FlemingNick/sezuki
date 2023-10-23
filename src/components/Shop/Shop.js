import React from 'react';
import './Shop.scss'

const Shop = () => (
 <section className='shop-container'>
   <div className='content-wrapper'>
      <h2>Studio Name</h2>
      <p>For around six month a year, you can find me at my studio in Kyoto. The other six month I will be visiting other studios around Europe. 
         Please contact me or visit my social media like <a className='inline-text' href='https://www.instagram.com/sezuki1995/'>Instagram</a> for further information and schedule.
      </p>
      <a className='btn' href='https://www.google.de/maps/place/Ky%C5%8Dto,+Pr%C3%A4fektur+Ky%C5%8Dto,+Japan/@34.973434,135.7504206,17.5z/data=!4m6!3m5!1s0x6001a8d6cd3cc3f1:0xc0961d366bbb1d3d!8m2!3d35.011564!4d135.7681489!16zL20vMDlkNF8?entry=ttu'>
         Route
      </a>
   </div>
 </section>
);

Shop.propTypes = {};

Shop.defaultProps = {};

export default Shop;
