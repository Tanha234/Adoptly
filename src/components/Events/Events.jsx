import { Link } from 'react-router-dom';
import pet from '../../images/Untitled__2_-removebg-preview.png'
import BirthdayBash from './BirthdayBash';
import FamilyDay from './FamilyDay';
import PetGearSwap from './PetGearSwap';


import PetPhotoDay from './PetPhotoDay';
import PetTraining from './PetTraining';

export default function EventsHeroBanner() {
  return (
      <div className='bg-accent'>
    <section className="bg-orange-300 py-16 px-4 md:px-44 flex flex-col-reverse md:flex-row items-center justify-between">
      
      {/* Text Content */}
      <div className="md:w-1/2 text-center md:text-left mt-8 sm:ms-0 md:mt-0 md:ms-12">
        <h2 className="text-red-600 text-xl font-bold mb-2">PET ADOPTION & FUNDRAISER</h2>
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">Adopt a Friend!</h1>
        <p className="text-gray-600 mb-6 max-w-md">
          Join us & support local animal rescue. Bring home joy, love, and a furry friend.
        </p>
        <div className="flex gap-4 justify-center md:justify-start">
          <Link to="/events">
            <button className="bg-red-500 text-white px-6 py-2 rounded-full hover:bg-red-600 transition">
              More Info
            </button>
          </Link>
          <Link to="/donate">
            <button className="border border-red-500 text-red-500 px-6 py-2 rounded-full hover:bg-red-100 transition">
              Donate
            </button>
          </Link>
        </div>
      </div>

      {/* Image */}
      <div className="md:w-full h-auto flex justify-center">
        <img
          src={pet} 
          alt="Adoptable pets"
          className="w-full max-w-sm"
        />
      </div>
    
    </section>
    <PetPhotoDay/>
    <FamilyDay/>
    <PetTraining/>
    <BirthdayBash/>
    <PetGearSwap/>

    </div>
    
  );
}


