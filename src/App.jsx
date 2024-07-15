import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar.jsx';
import Hero from './components/Hero/Hero.jsx';
import Graduation from './components/Graduation/Graduation.jsx';
import Title from './components/Title/Title.jsx';
import About from './components/About/About.jsx';
import Hr from './components/Hr/Hr.jsx';
import Gallery from './components/Gallery/Gallery.jsx';
import Testimonials from './components/Testimonials/Testimonials.jsx';
import Contact from './components/Contact/Contact.jsx';
import Footer from './components/Footer/Footer.jsx';
import Video from './components/Video/Video.jsx';
import './index.css';

const App = (props) => {
  const [isVideoVisible, setIsVideoVisible] = useState(false);

  const handlePlayClick = () => {
    setIsVideoVisible(true);
  };

  const handleOverlayClick = () => {
    setIsVideoVisible(false);
  };

  return (
    <div className='mainBlock'>
      <Navbar/>
      <Hero/>
      <Title title='OUR PROGRAM' subtitle='What We Offer'/>
      <Graduation/>
      <Hr/>
      <About onPlayClick={handlePlayClick} />
      <Hr/>
      <Title title='GALLERY' subtitle='Campus Photos'/>
      <Gallery/>
      <Hr/>
      <Title title='TESTIMONIALS' subtitle='What Student Says'/>
      <Testimonials/>
      <Hr/>
      <Title title='CONTACT US' subtitle='Get In Touch'/>
      <Contact/>
      <Footer/>
      {isVideoVisible && <Video onOverlayClick={handleOverlayClick} />}
    </div>
  );
};

export default App;
