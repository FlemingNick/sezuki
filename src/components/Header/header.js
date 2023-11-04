import React, { useState } from 'react';
import './header.scss';
import { useTranslation } from "react-i18next";

const Header = () =>{

   const [currentLanguage, setCurrentLanguage] = useState('en');
   const { i18n, t } = useTranslation();

   const changeLanguage = () => {
      if(currentLanguage === 'en' ){
         i18n.changeLanguage('jp')
         setCurrentLanguage('jp')
      }else{
         i18n.changeLanguage('en')
         setCurrentLanguage('en')
      }
   }

   const [flyoutAnim, setFlyoutAnim] = useState(null);

   const openFlyout = () => {
      if(flyoutAnim===1){
         setFlyoutAnim(0);
      }else{
         setFlyoutAnim(1);
      }
      
   }

   return(
      <nav className='header'>
         <div className='header-content-desktop'>
            <ul className='navigation'>
               <li>
                  <a href='#home'><span>{t("navi.home")}</span></a>
               </li>
               <li>
                  <a href='#about'><span>{t("navi.about")}</span></a>
               </li>
               <li>
                  <a href='#gallery'><span>{t("navi.gallery")}</span></a>
               </li>
               <li>
                  <a href='#contact'><span>{t("navi.contact")}</span></a>
               </li>
            </ul>
         
         
         <div className='right-side desktop'>
               
               <button onClick={changeLanguage} className='language-changer'>
                  {currentLanguage === 'en' && 
                     <img src={process.env.PUBLIC_URL + '/flag-japan.png'} alt='japanese-flag'/>
                  }
                  {currentLanguage === 'jp' && 
                     <img src={process.env.PUBLIC_URL + '/flag-uk.png'} alt='uk-flag'/>
                  }
               </button>
            
               <ul className='links'>
                  <li>
                     <a href='https://www.instagram.com/sezuki1995/' id='art' className='icon'>洒落画鬼屋</a>
                  </li>
                  <li>
                     <a href='https://www.instagram.com/sezuki1995/' id='fashion' className='icon'>ファッション</a>
                  </li>
                  <li>
                     <a href='https://www.instagram.com/sezuki1995/' id='insta' className='icon'><img src={process.env.PUBLIC_URL + '/insta.png'} alt='insta-icon'/></a>
                  </li>
                  <li>
                     <a href='https://www.facebook.com/littletokyoink' id='facebook' className='icon'><img src={process.env.PUBLIC_URL + '/facebook.png'} alt='facebook-icon'/></a>
                  </li>
               </ul>
            </div>
         </div>

         <div className='header-content-mobile'>
            <button 
               onClick={openFlyout}
               className='burger-icon'
            >
               <img src={process.env.PUBLIC_URL + '/burger.png'} alt='burger-icon'/>
            </button>

            <button onClick={changeLanguage} className='language-changer'>
                  {currentLanguage === 'en' && 
                     <img src={process.env.PUBLIC_URL + '/flag-japan.png'} alt='japanese-flag'/>
                  }
                  {currentLanguage === 'jp' && 
                     <img src={process.env.PUBLIC_URL + '/flag-uk.png'} alt='uk-flag'/>
                  }
               </button>
         </div>

         <div className='header-flyout-mobile' flyoutAnim={flyoutAnim}>
            <ul className='navigation'>
               <li>
                  <a href='#home' onClick={() => setFlyoutAnim(0)}><span>{t("navi.home")}</span></a>
               </li>
               <li>
                  <a href='#about' onClick={() => setFlyoutAnim(0)}><span>{t("navi.about")}</span></a>
               </li>
               <li>
                  <a href='#gallery' onClick={() => setFlyoutAnim(0)}><span>{t("navi.gallery")}</span></a>
               </li>
               <li>
                  <a href='#contact' onClick={() => setFlyoutAnim(0)}><span>{t("navi.contact")}</span></a>
               </li>
            </ul>
            <ul className='links'>
                  <li>
                     <a href='https://www.instagram.com/sezuki1995/' id='art' className='icon'>洒落画鬼屋</a>
                  </li>
                  <li>
                     <a href='https://www.instagram.com/sezuki1995/' id='fashion' className='icon'>ファッション</a>
                  </li>
                  <li>
                     <a href='https://www.instagram.com/sezuki1995/' id='insta' className='icon'><img src={process.env.PUBLIC_URL + '/insta.png'} alt='insta-icon'/></a>
                  </li>
                  <li>
                     <a href='https://www.facebook.com/littletokyoink' id='facebook' className='icon'><img src={process.env.PUBLIC_URL + '/facebook.png'} alt='facebook-icon'/></a>
                  </li>
               </ul>
         </div>
        
        
      </nav>
  );
} 

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
