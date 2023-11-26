import React from 'react';
import './News.scss'
import { useTranslation } from "react-i18next";


const News = () => {

   const { t } = useTranslation();
   
   return(
      <section className='container news'>
         <h2>{t("newsHeader")}</h2>
         
         <div className='wrapper'>
            <div className='content'>
               <div className='float-wrapper'>
                  <h3>{t("guest.name")}</h3>
                  
                  <p>
                     {t("guest.description1")}
                  </p>

                  <p>
                     {t("guest.description2")}
                  </p>
                  <div className='link-wrapper'>
                     <a className='external-link' href='https://sezuki.official.ec/' title='https://sezuki.official.ec/'><span>{t("guest.link")}</span></a>
                     <a className='external-link' href='https://www.youtube.com/watch?v=m_HvXxB9ODk' title='https://www.youtube.com/watch?v=m_HvXxB9ODk'><span>{t("guest.link2")}</span></a>
                  </div>
               </div>
               
            </div>
            <div className='image-wrapper'>
               <img src={process.env.PUBLIC_URL + '/horiken.png'} alt='portrait of guest artist'/>
            </div>
         </div>
      </section>
   )

};

News.propTypes = {};

News.defaultProps = {};

export default News;
