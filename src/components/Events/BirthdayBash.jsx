import React from 'react';
import { Gift, Heart } from 'lucide-react';

const BirthdayBash = () => (
  <section className="bg-white py-10 px-4 md:px-44">
    <div className="mx-auto bg-pink-50 border border-pink-200 rounded-2xl shadow-lg p-8 transition hover:shadow-xl">
      <div className="flex items-center gap-4 mb-4">
        <Gift className="text-pink-600 w-8 h-8" />
        <h2 className="text-2xl font-bold text-pink-800">🎁 Birthday Bash for Shelter Pets</h2>
      </div>
      <p className="text-gray-700 mb-4">
        Celebrate birthdays of long-stay pets with cake, toys, and adoption discounts.
      </p>
      <div className="grid md:grid-cols-2 gap-6 mt-6">
        <div className="flex items-start gap-3">
          <Heart className="text-pink-600 w-6 h-6 mt-1" />
          <div>
            <h4 className="font-semibold text-pink-700">Bonus</h4>
            <p className="text-sm text-gray-600">Feature pets needing homes the longest.</p>
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

export default BirthdayBash;
