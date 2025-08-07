import React, { useState, useEffect } from 'react';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  const services = [
    {
      title: "Formations professionnelles",
      description: "Développez vos compétences avec nos formations adaptées aux besoins du marché moderne",
      image: "https://images.pexels.com/photos/5965592/pexels-photo-5965592.jpeg"
    },
    {
      title: "Numérisation & Digitalisation",
      description: "Transformez votre entreprise avec nos solutions de digitalisation sur mesure",
      image: "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg"
    },
    {
      title: "Développement Web & Mobile",
      description: "Des applications performantes et innovantes pour tous types de structures",
      image: "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg"
    },
    {
      title: "Conception Logicielle",
      description: "Solutions logicielles personnalisées pour optimiser vos processus métiers",
      image: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg"
    }
  ];

  const [currentService, setCurrentService] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        setCurrentService((prev) => (prev + 1) % services.length);
        setFade(false);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, [services.length]);

  return (
    <section id="accueil" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      {/* Background Image Overlay - change with service */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 transition-opacity duration-500"
        style={{
          backgroundImage: `url('${services[currentService].image}')`
        }}
      ></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className={`transition-opacity duration-500 ${fade ? 'opacity-0' : 'opacity-100'}`}>
              {services[currentService].title.split(' ').map((word, i) => (
                <React.Fragment key={i}>
                  {word}{' '}
                  {i === Math.floor(services[currentService].title.split(' ').length / 2) && <br />}
                </React.Fragment>
              ))}
            </span>
          </h1>
          
          <p className={`text-xl md:text-2xl mb-8 text-gray-300 max-w-2xl mx-auto transition-opacity duration-500 ${fade ? 'opacity-0' : 'opacity-100'}`}>
            {services[currentService].description}
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a
              href="#services"
              className="bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-600 transition-all duration-200 flex items-center space-x-2 text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <span>Découvrir tous nos services</span>
              <ArrowRight size={20} />
            </a>
            
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-200 flex items-center space-x-2 text-lg">
              <Play size={20} />
              <span>Voir la présentation</span>
            </button>
          </div>
        </div>
      </div>
      
      {/* Service indicators */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {services.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setFade(true);
              setTimeout(() => {
                setCurrentService(index);
                setFade(false);
              }, 500);
            }}
            className={`w-3 h-3 rounded-full ${currentService === index ? 'bg-orange-500' : 'bg-white bg-opacity-50'}`}
            aria-label={`Afficher le service ${index + 1}`}
          />
        ))}
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
   
    </section>
  );
};

export default Hero;