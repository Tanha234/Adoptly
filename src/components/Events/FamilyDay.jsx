import React from 'react';
import { Users, Gift } from 'lucide-react';

const FamilyDay = () => (
  <section className="bg-white py-10 px-4 md:px-44">
    <div className="max-w-11xl mx-auto bg-yellow-50 border border-yellow-200 rounded-2xl shadow-lg p-8 transition hover:shadow-xl">
      <div className="flex items-center gap-4 mb-4">
        <Users className="text-yellow-600 w-8 h-8" />
        <h2 className="text-2xl font-bold text-yellow-800">👨‍👩‍👧‍👦 Family Day: Meet & Greet the Pets</h2>
      </div>
      <p className="text-gray-700 mb-4">
        A day for families to interact with pets before adopting.
      </p>
      <div className="grid md:grid-cols-2 gap-6 mt-6">
        <div className="flex items-start gap-3">
          <Gift className="text-yellow-600 w-6 h-6 mt-1" />
          <div>
            <h4 className="font-semibold text-yellow-700">Extras</h4>
            <p className="text-sm text-gray-600">Face painting, food trucks, storytelling sessions about rescued pets.</p>
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

export default FamilyDay;
