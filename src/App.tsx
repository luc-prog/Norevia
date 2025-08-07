import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Formations from './components/Formations';
import WhyChooseUs from './components/WhyChooseUs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Services from './components/Services';


function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Formations />
      <Services />
      <WhyChooseUs />
      <Contact />
      <Footer />
   
    </div>
  );
}

export default App;