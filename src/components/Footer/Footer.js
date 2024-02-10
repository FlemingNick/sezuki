import React from 'react';
import './Footer.scss';
import { useTranslation } from "react-i18next";

const Footer = () => {
   const { t } = useTranslation();

   return(
      <footer>
         <div className='footer-second-row'>
            <div className='content second'>
               <a href='https://www.instagram.com/fl_em_ing/'>Homepage by 式神</a>
               <ul>
                  <li><a href='/data'>{t("footer.privacy")}</a></li>
               </ul>
            </div>
         </div>
         
       </footer>
   )
}
   
 

Footer.propTypes = {};

Footer.defaultProps = {};

export default Footer;
