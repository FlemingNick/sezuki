import React from 'react';
import './DataSec.scss'
import { useTranslation } from "react-i18next";

const DataSec = () => {
   const { t } = useTranslation();

   return(
      <div className='container'>
         <span><a href='/'>{t("data.return")}</a></span>
         <div className='data-container'>
            <section>
               <h2>{t("data.headline")}</h2>
               <p>{t("data.intro")}</p>
            </section>
            
            <section>
               <h3>{t("data.header1")}</h3>
               <p>{t("data.text1")}</p>
               <br/>
               <ul>
                  <li>{t("data.text1a")}</li>
                  <li>{t("data.text1b")}</li>
                  <li>{t("data.text1c")}</li>
                  <li>{t("data.text1d")}</li>
               </ul>
            </section>

            <section>
               <h3>{t("data.header2")}</h3>
               <p>{t("data.text2")}</p>
               <br/>
               <ul>
                  <li>{t("data.text2a")}</li>
                  <li>{t("data.text2b")}</li>
                  <li>{t("data.text2c")}</li>
               </ul>
            </section>

            <section>
               <h3>{t("data.header3")}</h3>
               <p>{t("data.text3")}</p>
            </section>
            
            <section>
               <h3>{t("data.header4")}</h3>
               <p>{t("data.text4")}</p>
            </section>

            <section>
               <h3>{t("data.header5")}</h3>
               <p>{t("data.text5")}</p>
            </section>

            <section>
               <h3>{t("data.header6")}</h3>
               <p>{t("data.text6")}</p>
               <br/>
               <ul>
                  <li>{t("data.text6a")}</li>
                  <li>{t("data.text6b")}</li>
                  <li>{t("data.text6c")}</li>
               </ul>
            </section>

            <section>
               <h3>{t("data.header7")}</h3>
               <p>{t("data.text7")}</p>
            </section>

            <section>
               <p>{t("data.contactHeader")}</p>
               <p>{t("data.name")}</p>
               <p>{t("data.address")}</p>
            </section>
                  
         </div>
         <span><a href='/'>{t("data.return")}</a></span>
      </div>
      
   )
};

DataSec.propTypes = {};

DataSec.defaultProps = {};

export default DataSec;
