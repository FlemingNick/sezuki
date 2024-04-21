import React from 'react';
import './Anouncement.scss'
import { useTranslation } from "react-i18next";

const Anouncement = () => {

   const { t } = useTranslation();
   
   return(
      <section className='anouncement-wrapper'>
         <div className='announcement'>
            <div className='announcement-message'>
               +++ <span>{t("anouncement")}</span> +++ <span>{t("anouncement")}</span> +++ <span>{t("anouncement")}</span> +++ <span>{t("anouncement")}</span>
            </div>
         </div>
      
      </section>
)};

Anouncement.propTypes = {};

Anouncement.defaultProps = {};

export default Anouncement;
