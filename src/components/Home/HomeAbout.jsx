import React from "react";

function HomeAbout() {
  return (
    <div className="pb-16 pt-8  bg-accent md:px-44 sm:px-6">
      
      {/* Top Icon and Heading */}
      <div className="text-center mb-12">
        <div className="flex justify-center mb-4">
          <img
            src="https://cdn-icons-png.flaticon.com/512/616/616408.png"
            alt="Paw Icon"
            className="w-12 h-12"
          />
        </div>
        <h2 className="text-4xl font-bold text-gray-800">About Us</h2>
      </div>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row items-center gap-10">
        
        {/* Left Text Content */}
        <div className="md:w-1/2 space-y-2">
          <h3 className="text-2xl font-semibold text-gray-800">Caring for your pets</h3>
          <p className="text-gray-600">
            Aliquam erat volutpat. In id fermentum augue, ut pellentesque leo. Maecenas at arcu risus. 
            Donec commodo sodales ex, scelerisque laoreet nibh hendrerit id. In aliquet magna nec lobortis maximus.
          </p>
          <p className="text-gray-600">
            Etiam rhoncus leo a dolor placerat, nec elementum ipsum convallis. Maecenas at arcu risus scelerisque laoreet.
          </p>

          {/* List with paw bullets */}
          <ul className="space-y-3">
            <li className="flex items-start">
              <img src="https://cdn-icons-png.flaticon.com/512/616/616408.png" alt="paw" className="w-5 h-5 mr-3 mt-1" />
              <span>Orci eget, viverra elit aliquam erat volutpat phasellus ac</span>
            </li>
            <li className="flex items-start">
              <img src="https://cdn-icons-png.flaticon.com/512/616/616408.png" alt="paw" className="w-5 h-5 mr-3 mt-1" />
              <span>Ipsuet phasellus ac sodales Lorem ipsum dolor Phas ell</span>
            </li>
            <li className="flex items-start">
              <img src="https://cdn-icons-png.flaticon.com/512/616/616408.png" alt="paw" className="w-5 h-5 mr-3 mt-1" />
              <span>Aliquam erat volutpat phasellus</span>
            </li>
          </ul>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            alt="Cute Cat"
            className="rounded-tl-3xl rounded-bl-3xl object-cover w-full h-[400px]"
          />
        </div>

      </div>

    </div>
  );
}

export default HomeAbout;
