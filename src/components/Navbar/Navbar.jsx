import { useEffect, useState } from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { Link } from 'react-router-dom';
import { FaUser, FaSignInAlt } from "react-icons/fa"; 
import { auth } from '../../Firebase/firebase.init';
import logo from '../../images/logo.png';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false); 
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      // alert("Logged out successfully.");
    } catch (error) {
      // alert(error.message);
    }
  };

  return (
    <nav className="bg-accent shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} className="h-12" alt="Logo" />
          <h4 className="ms-2 text-slate-800 font-bold text-xl">Adoptly 🐾</h4>
        </div>

        {/* Center Links (Desktop) */}
        <div className="hidden md:flex flex-1 justify-center space-x-8">
          <a href="/" className="text-slate-800 hover:text-gray-200 transition">Home</a>
          <a href="/about" className="text-slate-800 hover:text-gray-200 transition">About</a>
          <a href="/pets" className="text-slate-800 hover:text-gray-200 transition">Adopt</a>
          <a href="/donation" className="text-slate-800 hover:text-gray-200 transition">Donation</a>
          <a href="/blogs" className="text-slate-800 hover:text-gray-200 transition">Blog</a>
          <div className="relative group">
            <a href="#" className="text-slate-800 hover:text-gray-200 transition inline-flex items-center">
              Community
              <svg className="ml-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M5.23 7.21a.75.75 0 011.06.02L10 11.584l3.71-4.354a.75.75 0 011.14.976l-4.25 5a.75.75 0 01-1.14 0l-4.25-5a.75.75 0 01.02-1.06z" />
              </svg>
            </a>
            <div className="absolute left-0 w-40 mt-1 bg-white shadow-md rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-200 z-50">
              <a href="/volunteer" className="block px-4 py-2 text-slate-700 hover:bg-gray-100">Volunteer</a>
              <a href="/events" className="block px-4 py-2 text-slate-700 hover:bg-gray-100">Events</a>
            </div>
          </div>
          <a href="/contact" className="text-slate-800 hover:text-gray-200 transition">Contact</a>
        </div>

        {/* Right Side (Desktop) */}
        <div className="hidden md:flex items-center space-x-3">
          {user ? (
            <>
              <FaUser className="text-slate-700 text-xl" />
              <span className="text-slate-800 font-semibold">
                {user.displayName || user.email}
              </span>
              <button onClick={handleLogout} className="text-red-600 hover:underline text-sm ml-2">Logout</button>
            </>
          ) : (
            <>
              <FaSignInAlt className="text-slate-700 text-2xl" />
              <Link to="/login" className="text-slate-800 font-semibold">Login</Link>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Links */}
      {menuOpen && (
        <div className="md:hidden bg-accent px-4 pb-4 space-y-2">
          <a href="/" onClick={closeMenu} className="block text-white hover:text-gray-300">Home</a>
          <a href="/about" onClick={closeMenu} className="block text-white hover:text-gray-300">About</a>
          <a href="/adopt" onClick={closeMenu} className="block text-white hover:text-gray-300">Adopt</a>
          <a href="/contact" onClick={closeMenu} className="block text-white hover:text-gray-300">Contact</a>

          {/* Mobile Auth */}
          <div className="flex items-center space-x-2 pt-2">
            <FaUser className="text-white text-xl" />
            {user ? (
              <>
                <span className="text-white">{user.displayName || user.email}</span>
                <button onClick={handleLogout} className="text-red-300 bg-orange-500 underline text-sm">Logout</button>
              </>
            ) : (
              <>
                <FaSignInAlt className="text-white text-xl" />
                <Link to="/login" className="text-white font-semibold">Login</Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
