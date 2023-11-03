import React from 'react';
import './Art.scss'
import { useTranslation } from "react-i18next";

const Art = () => {

   const { t } = useTranslation();

   return(
      <section className='container'>
         <div className='wrapper'>
            <div>
               <img src={process.env.PUBLIC_URL + '/art1.jpg'} alt='artwork in red and white'/>
            </div>
            <div className='content'>
               <h2>{t("art.header")}</h2>
               <p>{t("art.paragraph1")}</p>
               <p>{t("art.paragraph2")}</p>
               <p>{t("art.paragraph3")}</p>
               <div className='link-wrapper'>
                  <a className='external-link' href='https://sezuki.official.ec/' title='https://sezuki.official.ec/'><span>{t("art.artLink")}</span></a>
                  <a className='external-link' href='https://sezuki.official.ec/' title='https://sezuki.official.ec/'><span>{t("art.fashionLink")}</span></a>
               </div>
               
            </div>
         </div>
      </section>
)};

Art.propTypes = {};

Art.defaultProps = {};

export default Art;
