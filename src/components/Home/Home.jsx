import React from 'react'
import heroBanner from '../../images/hero image.png'
import heroBanner2 from '../../images/img.jpg'

function Home() {
  return (
    <div>
      <div
        className="h-[80vh] flex flex-col md:flex-row items-center justify-between mx-auto md:px-44 sm:px-0 bg-accent bg-center"
     
      >
      
        {/* Left: Text Section */}
        <div className="text-center md:text-left md:w-1/2">
          <h3 className="text-2xl md:text-4xl font-bold text-indigo-900 mb-4">
            Because Your Pet Deserves, Nothing But the Best.
          </h3>
          <p className="text-lg md:text-2xl text-gray-600 mb-12">
            Find your perfect companion today.
          </p>
          <a
            href="/adopt"
            className="bg-orange-500  mt-5 text-white font-semibold py-3 px-8 rounded-full hover:bg-opacity-90 transition"
          >
            Adopt Now 🐾
          </a>
        </div>

         
        <div className="mt-8 md:mt-0 md:w-1/2 flex justify-center">
          <img
            src={heroBanner}
            alt="Happy Pet"
            className="h-[300px] md:h-[400px] object-cover"
          />
        </div>
       
        
      </div>
    </div>
  )
}

export default Home
