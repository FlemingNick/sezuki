import React from 'react';
import './FAQ.scss'
import { Accordion, AccordionItem } from '@szhsin/react-accordion';
import { useTranslation } from "react-i18next";

const Faq = () => {
   
   const { t } = useTranslation();

   return(
   <section className='container' id='FAQ'>
      <h2>FAQ</h2>
      <Accordion>
         <AccordionItem header={t("faq.question1")}>
            {t("faq.answer1")}
         </AccordionItem>

         <AccordionItem header={t("faq.question2")}>
            {t("faq.answer2")}
         </AccordionItem>

         <AccordionItem header={t("faq.question3")}>
            {t("faq.answer3")}
         </AccordionItem>

         <AccordionItem header={t("faq.question4")}>
            {t("faq.answer4")}
         </AccordionItem>

         <AccordionItem header={t("faq.question5")}>
            {t("faq.answer5")}
         </AccordionItem>
         
      </Accordion>
   </section>
)};

Faq.propTypes = {};

Faq.defaultProps = {};

export default Faq;
