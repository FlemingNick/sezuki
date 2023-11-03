import React from 'react';
import './Anouncement.scss'
import { useTranslation } from "react-i18next";

const Anouncement = () => {

   const { t } = useTranslation();
   
   return(
      <section className='scroll anouncement-banner'>
         <div>
            +++ <span>{t("anouncement")}</span> +++ <span>{t("anouncement")}</span> +++ <span>{t("anouncement")}</span> +++ <span>{t("anouncement")}</span>
         </div>
         <div>
            +++ <span>{t("anouncement")}</span> +++ <span> {t("anouncement")}</span> +++ <span>{t("anouncement")}</span> +++ <span>{t("anouncement")}</span>
         </div>
      
      </section>
)};

Anouncement.propTypes = {};

Anouncement.defaultProps = {};

export default Anouncement;
