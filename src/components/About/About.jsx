import React from 'react';
import Features from './Feature';
import LatestPhotos from './LatestPhotos';
import PetAdoptionPage from './PetAdoptionPage(about)';



import ServicesSlider from './Services(About)';
import WhyAdopt from './WhyAdopt';

function About() {
  return (
    <div className="font-sans">

      {/* Hero Banner */}
      <section 
        className="h-[70vh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('https://apstlshop.com/cdn/shop/files/AdobeStock_787949139.jpg?v=1720122508&width=1500')" }}
      >
        <div className="text-center text-white px-6">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Find Your Perfect Companion</h1>
          <p className="text-lg text-gray-100">
    Learn more about our mission, vision, and the love we share with every pet.
  </p>
          <a 
            href="#adopt" 
            className="inline-block bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-8 rounded-full text-lg mt-5"
          >
            Start Adopting
          </a>
        </div>
      </section>

     

      {/* Other Sections */}
      <PetAdoptionPage />
      <ServicesSlider />
     
      <Features />
      <WhyAdopt/>
      <LatestPhotos />
    </div>
  );
}

export default About;
