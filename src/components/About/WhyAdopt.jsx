import React from 'react';

function WhyAdopt() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center gap-12 px-6 py-20 bg-accent md:px-44">
      <div className="max-w-xl">
        <h5 className="text-pink-500 uppercase font-bold mb-4">Why Adopt From Us?</h5>
        <h2 className="text-4xl font-bold text-gray-800 mb-6">Give Love. Gain Joy.</h2>
        <p className="text-gray-600 leading-relaxed mb-6">
          At [Your Organization Name], we believe every pet deserves a loving home. Our team provides exceptional care, training, and love, helping pets transition seamlessly into their forever families.
        </p>
        <ul className="text-gray-700 space-y-3 mb-8">
          <li>✅ Health-Checked and Vaccinated Pets</li>
          <li>✅ Personalized Matchmaking for Your Family</li>
          <li>✅ Post-Adoption Support and Guidance</li>
          <li>✅ Commitment to Responsible Pet Ownership</li>
        </ul>
        <a 
          href="#adopt" 
          className="inline-block bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-8 rounded-full"
        >
          Adopt Now
        </a>
      </div>
      <div>
        <img 
          src="https://images.unsplash.com/photo-1574158622682-e40e69881006?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=60" 
          alt="Happy person with dog"
          className="w-96 h-96 object-cover rounded-full"
        />
      </div>
    </section>
  );
}

export default WhyAdopt;
