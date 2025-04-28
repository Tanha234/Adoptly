import React from "react";

function Footer() {
  return (
    <footer className="bg-orange-100 text-gray-700 py-10 ">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* About Section */}
        <div>
          <h3 className="text-2xl font-bold text-orange-500 mb-4">Adoptly</h3>
          <p className="text-sm">
            Providing exceptional care and love to your furry friends. Trust us for grooming, boarding, and lots of tail wags!
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-orange-500">Home</a></li>
            <li><a href="#" className="hover:text-orange-500">About Us</a></li>
            <li><a href="#" className="hover:text-orange-500">Services</a></li>
            <li><a href="#" className="hover:text-orange-500">Contact</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Subscribe to Our Newsletter</h4>
          <form className="flex flex-col space-y-3">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:border-orange-400"
            />
            <button 
              type="submit"
              className="bg-orange-400 hover:bg-orange-500 text-white py-2 rounded-full font-semibold transition duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>

      </div>

      {/* Bottom Footer */}
      <div className="text-center text-xs mt-10 text-gray-500">
        © {new Date().getFullYear()} Adoptly. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
