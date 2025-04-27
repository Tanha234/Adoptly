import React from "react";

function NewsletterSection() {
  return (
    <section className="py-16 bg-gradient-to-r from-orange-100 to-orange-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-40 opacity-20">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSESnmxTgqWkvyGXgQI9ydi4E7PJMbZLVRICQ&s"
          alt="dog"
          className="object-cover"
        />
      </div>

      <div className="absolute bottom-0 right-0 w-40 opacity-20 transform rotate-180">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSESnmxTgqWkvyGXgQI9ydi4E7PJMbZLVRICQ&s"
          alt="dog"
          className="object-cover"
        />
      </div>

      <div className="relative max-w-3xl mx-auto text-center">
        <h4 className="text-orange-500 text-lg font-semibold mb-2 uppercase tracking-widest">
          Get In Touch
        </h4>
        <h2 className="text-4xl md:text-3xl font-bold text-gray-800 mb-8">
          Let’s Connect Our Newsletter
        </h2>

        <div className="flex items-center justify-center">
          <input
            type="email"
            placeholder="Type Your Email"
            className="p-4 rounded-l-full w-64 border focus:outline-none"
          />
          <button className="bg-gradient-to-r from-pink-400 to-orange-400 text-white px-8 py-4 rounded-r-full font-semibold">
            Connect
          </button>
        </div>
      </div>
    </section>
  );
}

export default NewsletterSection;
