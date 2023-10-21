import React from 'react';
import './Gallery.scss'
import { pictures } from './pictures';

const Gallery = () => (
 <section className='container'>
   <ul className='gallery-list'>
      {pictures.map(picture => (
         <li className='gallery-element'><img src={picture.url}/></li>
      ))}
   </ul>
   
 </section>
);

Gallery.propTypes = {};

Gallery.defaultProps = {};

export default Gallery;
