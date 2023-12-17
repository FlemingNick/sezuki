import React from 'react';
import './Gallery.scss'
import { pictures } from './pictures';
import { useTranslation } from "react-i18next";



const Gallery = () => {

   
   const [modalIsOpen, setIsOpen] = React.useState(false);
   const [currentElement, setCurrentElement] = React.useState(5);

   const { i18n } = useTranslation();

   const gallery = [...pictures];


   function openModal(index) {
      setIsOpen(true);
      setCurrentElement(index)
      
   }

   function nextPicture(){
      if(currentElement+1===gallery.length){
         setCurrentElement(0);
      }else{
         setCurrentElement(currentElement+1);
      }
   }

   const renderTitle = () => {
      if(i18n.language === 'en'){
         return gallery[currentElement].title;
      } else{
         return gallery[currentElement].titleJapanese;
      }
   }

   const renderText = () => {
      if(i18n.language === 'en'){
         return gallery[currentElement].subtitle;
      } else{
         return gallery[currentElement].subtitleJapanese;
      }
   }

   function previousPicture(){
      if(currentElement===0){
         setCurrentElement(gallery.length-1);
      }else{
         setCurrentElement(currentElement-1);
      }
   }

   // function closeModal() {
   //    setIsOpen(false);
   // }

   return(
      <section className='container' id='gallery'>
        <ul className='gallery-list'>
           {pictures.map((gallery, index) => (
              <li  key={index} className='gallery-element'><img src={gallery.url} alt='to be replaced' onClick={() => openModal(index)}/></li>
           ))}
        </ul>

        {modalIsOpen &&
         <div className='modal' onClick={() => setIsOpen(false)}>
            <div className='modal-wrapper' onClick={e => e.stopPropagation()}>
               <button className='arrow-left' onClick={() => previousPicture()}/>
               <div className='modal-content'>
                  <img src={gallery[currentElement].url} alt='to be replaced'/>
                  <h3>{renderTitle()}</h3>
                  {renderText() &&
                     <p>{renderText()}</p>
                  }
                  
               </div>
               <button className='arrow-right' onClick={() => nextPicture()}/>
            </div>
            
        </div>
        }
      </section>
     );
}

Gallery.propTypes = {};

Gallery.defaultProps = {};

export default Gallery;
