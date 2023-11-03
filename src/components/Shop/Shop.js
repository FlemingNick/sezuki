import React from 'react';
import './Shop.scss'
import { useTranslation } from "react-i18next";

const Shop = () => {
   
   const { t } = useTranslation();
   
   return(
      <section className='shop-container'>
         <div className='content-wrapper'>
            <h2>{t("studio.name")}</h2>
            <p>{t("studio.text")} <a className='inline-text' href='https://www.instagram.com/sezuki1995/'>Instagram</a></p>
         </div>
      </section>
)};

Shop.propTypes = {};

Shop.defaultProps = {};

export default Shop;
