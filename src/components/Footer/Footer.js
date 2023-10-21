import React from 'react';
import './Footer.scss';

const Footer = () => (
 <footer>
   <div className='footer-first-row'>
      <div>
         <h3>Studio</h3>
         <p>Tattoo Studio Name</p>
         <p>Street 23</p>
         <p>12345 Kyoto</p>
      </div>
      <div>
         <h3>Opening Hours</h3>
         <p>Mon - Fri 12:00 - 18:00</p>
         <p>Or by arrangement </p>
      </div>
      <div>
         <h3>Contact</h3>
         <p>Tel: 01234010102</p>
         <p>E-Mail: max.mustermann@xyw.com</p>
         <a href='https://www.instagram.com/sezuki1995/'>Instagram</a>
         <a href='https://www.facebook.com/littletokyoink'>Facebook</a>
      </div>
   </div>
   <div className='footer-second-row'>
      <a href='https://www.instagram.com/fl_em_ing/'>Homepage by 式神</a>
      <ul>
         <li><a href='#'>Imprint</a></li>
         <li><a href='#'>Data Protection</a></li>
      </ul>
   </div>
   
 </footer>
);

Footer.propTypes = {};

Footer.defaultProps = {};

export default Footer;