import React from 'react';
import './Art.scss'

const Art = () => (
 <section className='container'>
   <div className='wrapper'>
      <div>
         <img src={process.env.PUBLIC_URL + '/art1.jpg'} alt='profile picture of Sezuki'/>
      </div>
      <div >
         <h2>Artworks</h2>
         <p>If you are interested in artworks, prints or my newly launched clothing brand, please follow the links down below.</p>
         <p>Every artworks is handcrafted and and only available in limited amounts. Once it's sold-out, it will stay sold-out!</p>
         <p>
            My new fashion label <i>Brandname</i> takes old, traditional Kimonos and gives them new life my upcycling them into hand-bags or
            japanese inspired urban streetwear.
         </p>
         <div className='link-wrapper'>
            <a className='external-link' href='https://sezuki.official.ec/' title='https://sezuki.official.ec/'><span>Buy a unique artwork</span></a>
            <a className='external-link' href='https://sezuki.official.ec/' title='https://sezuki.official.ec/'><span>Check out my fashion label</span></a>
         </div>
         
      </div>
   </div>
 </section>
);

Art.propTypes = {};

Art.defaultProps = {};

export default Art;
