import React from 'react'
import heroBanner from '../../images/hero image.png'
import heroBanner2 from '../../images/flat-design-paw-prints-backgroun.png'
import PetsWeTakeCare from './PetsWeTakeCare'
import StatsSection from './StatsSection'
import Services from './Services'
import HomeAbout from './HomeAbout'
import Testimonials from './Testimonial'
import WhyChooseUs from './WhyChooseUs'
import TeamSection from './TeamSection'
import NewsletterSection from './NewsletterSection'

function Home() {
  return (
    <div>
      <div
        className="h-auto md:h-[80vh] flex flex-col-reverse md:flex-row items-center justify-between mx-auto px-6 md:px-44 py-12 md:py-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBanner2})` }}
      >
      
        {/* Left: Text Section */}
        <div className="text-center md:text-left md:w-1/2 mt-10 md:mt-0 ms-12">
          <h3 className="text-3xl md:text-4xl font-bold text-indigo-900 mb-6 mt-16">
            Because Your Pet Deserves, Nothing But the Best.
          </h3>
          <p className="text-base md:text-xl text-gray-700 mb-8">
            Find your perfect companion today.
          </p>
          <a
            href="/adopt"
            className="bg-orange-600 text-white font-semibold py-3 px-8 rounded-full hover:bg-opacity-90 transition"
          >
            Adopt Now 🐾
          </a>
        </div>

        {/* Right: Image Section */}
        <div className="mb-10 md:mb-0 md:w-1/2 flex justify-center">
          <img
            src={heroBanner}
            alt="Happy Pet"
            className="h-[250px] md:h-[400px] object-contain"
          />
        </div>
        
      </div>
      <PetsWeTakeCare/>
    <HomeAbout/>
      <Services/>
      
     
      <WhyChooseUs/>
      <Testimonials/>
      
      <TeamSection/>
      <StatsSection/>
      <NewsletterSection/>
    </div>
    
  )
}

export default Home
