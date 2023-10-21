import './App.scss';
import About from './components/About/About';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
import Gallery from './components/Gallery/Gallery';
import Header from './components/Header/header';
import Hero from './components/Hero/Hero';

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <About className="container"/>
      <Banner/>
      <Gallery/>
      <Footer/>
    </div>
  );
}

export default App;
