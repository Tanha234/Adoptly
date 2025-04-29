import React from 'react';
import { CalendarDays, Book } from 'lucide-react';

const PetTraining = () => (
  <section className="bg-white py-10 px-4 md:px-44">
    <div className=" bg-green-50 border border-green-200 rounded-2xl shadow-lg p-8 transition hover:shadow-xl">
      <div className="flex items-center gap-4 mb-4">
        <CalendarDays className="text-green-600 w-8 h-8" />
        <h2 className="text-2xl font-bold text-green-800">🎓 Pet Training Workshops</h2>
      </div>
      <p className="text-gray-700 mb-4">
        Free or donation-based training sessions for new pet parents.
      </p>
      <div className="grid md:grid-cols-2 gap-6 mt-6">
        <div className="flex items-start gap-3">
          <Book className="text-green-600 w-6 h-6 mt-1" />
          <div>
            <h4 className="font-semibold text-green-700">Topics</h4>
            <p className="text-sm text-gray-600">Housebreaking, socializing, basic commands.</p>
          </div>
          
        </div>
        
      </div>
      {/* Signup Button */}
      <div className="mt-8">
        <a
          href="#signup-form"
          className="inline-block px-6 py-3 bg-yellow-600 text-white font-semibold rounded-lg hover:bg-yellow-700 transition duration-300"
        >
          Sign Up Now
        </a>
      </div>
    </div>
  </section>
);

export default PetTraining;
