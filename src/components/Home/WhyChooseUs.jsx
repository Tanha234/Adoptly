import React from "react";

function WhyChooseUs() {
  return (
    <section className="py-16 bg-accent md:px-44 sm:px-0 text-center">
      {/* Heading */}
      <div className="mb-10">
        <h4 className="text-orange-500 text-lg font-semibold mb-2 uppercase tracking-widest">
          Why Choose Us
        </h4>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
          Find Your Perfect Companion Today
        </h2>
      </div>

      {/* Main Content */}
      <div className="relative flex flex-col items-center">
        {/* 2 Column Layout */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 items-center gap-10 max-w-7xl mx-auto">
          {/* Left Side Features */}
          <div className="flex flex-col items-end space-y-10">
            {/* Feature 1 */}
            <div className="flex items-center max-w-xs text-right">
              <div className="bg-orange-200 p-4 rounded-full mr-4">
                <i className="fas fa-user-md text-2xl text-orange-600"></i>
              </div>
              <div>
                <h3 className="font-semibold text-xl mb-2">Experienced Professionals</h3>
                <p className="text-gray-600">
                  Our team consists of highly trained and passionate pet care experts dedicated to your pet’s well-being.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-center max-w-xs text-right">
              <div className="bg-orange-200 p-4 rounded-full mr-4">
                <i className="fas fa-heart text-2xl text-orange-600"></i>
              </div>
              <div>
                <h3 className="font-semibold text-xl mb-2">Loving Environment</h3>
                <p className="text-gray-600">
                  We prioritize your pet’s safety and comfort, providing a nurturing and secure setting for them to thrive.
                </p>
              </div>
            </div>
          </div>

          {/* Center Image */}
          <div className="flex justify-center">
            <div className="bg-orange-100 rounded-full p-6 md:p-10 w-64 h-64 md:w-80 md:h-80 flex items-center justify-center relative">
              <img
                src="https://cdn.pixabay.com/photo/2017/09/25/13/12/dog-2785074_1280.jpg"
                alt="Adopted Pets"
                className="w-48 h-48 md:w-60 md:h-60 object-cover rounded-full"
              />
            </div>
          </div>

          {/* Right Side Features */}
          <div className="flex flex-col items-start space-y-10">
            {/* Feature 3 */}
            <div className="flex items-center max-w-xs text-left">
              <div className="bg-orange-200 p-4 rounded-full mr-4">
                <i className="fas fa-star text-2xl text-orange-600"></i>
              </div>
              <div>
                <h3 className="font-semibold text-xl mb-2">Comprehensive Services</h3>
                <p className="text-gray-600">
                  From grooming to boarding, we offer a wide range of services to meet all your pet’s needs under one roof.
                </p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="flex items-center max-w-xs text-left">
              <div className="bg-orange-200 p-4 rounded-full mr-4">
                <i className="fas fa-smile text-2xl text-orange-600"></i>
              </div>
              <div>
                <h3 className="font-semibold text-xl mb-2">Customer Satisfaction</h3>
                <p className="text-gray-600">
                  We pride ourselves on exceptional customer service, with numerous happy clients who trust us.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
