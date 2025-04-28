import React from 'react';
import pet from '../../images/h3-cat-pet-container-removebg-preview.png'

const PetAdoptionPage = () => {
  return (
    <div className="font-sans">

      {/* Our Mission Section */}
      <section className="py-20 bg-accent md:px-44 sm:px-0">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-6">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Mission</h2>
            <p className="text-gray-600 mb-6">
              Aliquam erat volutpat in id fermentum augue, ut pellentesque leo. Maecenas at arcu risus. 
              Donec commodo sodales ex, scelerisque laoreet nibh hendrerit id. In aliquet magna nec lobortis maximus.
            </p>
            <p className="text-gray-800 font-semibold mb-6">
              We have over 20 years of experience
            </p>
            <div className="flex gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-full">
                Contact Us
              </button>
              <button className="bg-pink-600 hover:bg-pink-700 text-white font-semibold py-2 px-6 rounded-full">
                Our Services
              </button>
            </div>
          </div>
          <div className="flex justify-center">
            <img
              src={pet}
              alt="Happy Dog"
              className="h-full w-full object-contain"
            />
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section
        className="bg-cover bg-center "
        style={{ backgroundImage: "url('https://img.freepik.com/free-vector/different-pets-concept_23-2148524392.jpg')" }}
      >
        <div className="bg-black bg-opacity-30 py-12">
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 text-center text-white gap-8">
            <div>
              <div className="text-4xl font-bold mb-2">14</div>
              <div className='text-indigo-100'>Professionals</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100</div>
              <div>Adopted Pets</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2 text-indigo-100">12</div>
              <div>Awards</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">1200</div>
              <div>Clients</div>
            </div>
          </div>
        </div>
      </section>

      {/* More About Us Section */}
      <section className="py-20 bg-accent md:px-44 sm:px-0">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">More About us</h2>
            <p className="text-gray-600 mb-4">
              We offer quick & easy services for cats and dogs, accumsan felis id, fermentum purus. 
              Quisque vitae hendrerit elit.
            </p>
            <p className="text-gray-600 mb-6">
              Aliquam erat volutpat in id fermentum augue, ut pellentesque leo. Donec commodo sodales ex, 
              scelerisque laoreet nibh hendrerit id.
            </p>
          </div>

          <div>
            <div className="border-b flex">
              <button className="text-blue-600 font-bold border-b-2 border-blue-600 py-2 px-4">
                Our Philosophy
              </button>
              <button className="text-gray-600 py-2 px-4">Our Organization</button>
              <button className="text-gray-600 py-2 px-4">Partnerships</button>
            </div>
            <div className="mt-4 text-gray-600">
              Our philosophy is to provide safe and happy homes for every pet through professionalism and compassion.
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default PetAdoptionPage;
