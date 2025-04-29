import React from 'react';
import { FaBone, FaHeartbeat, FaDog, FaPaw } from 'react-icons/fa'; // Icons for Pet Care

const PetCareGuides = () => {
  return (
    <section className="py-16 px-6 bg-accent">
      <h2 className="text-4xl font-bold text-center mb-12">Pet Care Guides</h2>

      {/* Grid Layout for Pet Care Topics */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {/* Nutrition Tips */}
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <FaBone className="text-4xl text-orange-500 mb-4 mx-auto" />
          <h3 className="text-2xl font-semibold mb-4">Nutrition Tips for Cats & Dogs</h3>
          <p className="text-sm text-gray-600">
            Proper nutrition is vital for the health and longevity of pets. Ensure they receive the right balance of nutrients to stay healthy.
          </p>
        </div>

        {/* Vaccination Schedules */}
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <FaHeartbeat className="text-4xl text-orange-500 mb-4 mx-auto" />
          <h3 className="text-2xl font-semibold mb-4">Vaccination Schedules</h3>
          <p className="text-sm text-gray-600">
            Keep your pet safe with timely vaccinations. Ensure regular vet visits for boosters and important shots.
          </p>
        </div>

        {/* Grooming Advice */}
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <FaPaw className="text-4xl text-orange-500 mb-4 mx-auto" />
          <h3 className="text-2xl font-semibold mb-4">Grooming Advice</h3>
          <p className="text-sm text-gray-600">
            Regular grooming helps maintain your pet’s health and appearance. Brushing and nail trimming should be routine care.
          </p>
        </div>

        {/* Behavior & Training */}
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <FaDog className="text-4xl text-orange-500 mb-4 mx-auto" />
          <h3 className="text-2xl font-semibold mb-4">Behavior & Training Basics</h3>
          <p className="text-sm text-gray-600">
            Positive reinforcement and early training are key to a well-behaved pet. Start with basic commands and socialization.
          </p>
        </div>

      </div>
    </section>
  );
};

export default PetCareGuides;
