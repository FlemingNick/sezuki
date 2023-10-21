import React from 'react';
import './header.scss';

const Header = () => (
    <nav className='header'>
      <ul className='navigation'>
         <li>
            <a href='#home'><span>Home</span></a>
         </li>
         <li>
            <a href='#about'><span>About</span></a>
         </li>
         <li>
            <a href='#gallery'><span>Gallery</span></a>
         </li>
         <li>
            <a href='#contact'><span>Contact</span></a>
         </li>
      </ul>
      <div className='header-name'>
         <p>洒落画鬼屋</p>
      </div>
      <ul className='social-media'>
         <li>
            <a href='https://www.instagram.com/sezuki1995/' id='insta' className='icon'><img src={process.env.PUBLIC_URL + '/insta.png'} alt='insta-icon'/></a>
         </li>
         <li>
            <a href='https://www.facebook.com/littletokyoink' id='facebook' className='icon'><img src={process.env.PUBLIC_URL + '/facebook.png'} alt='facebook-icon'/></a>
         </li>
      </ul>
    </nav>
);

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
