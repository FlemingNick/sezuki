import './App.scss';
import About from './components/About/About';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
import Gallery from './components/Gallery/Gallery';
import Header from './components/Header/header';
import Hero from './components/Hero/Hero';
import Shop from './components/Shop/Shop';
import Art from './components/Art/Art';
import Contact from './components/Contact/Contact';
import Anouncement from './components/Anouncement/Anouncement';
import News from './components/News/News';
import FAQ from './components/FAQ/FAQ';

function App() {
  return (
    <div className="App">
      <Header/>
      <Anouncement/>
      <Hero/>
      <About className="container"/>
      <Banner/>
      <Gallery/>
      <News/>
      <Shop/>
      <Art/>
      <Contact/>
      <FAQ/>
      <Footer/>
      <img className="toad" src={process.env.PUBLIC_URL + '/Toad.svg'} alt='toad in bathtub'/>
    </div>
  );
}

export default App;
