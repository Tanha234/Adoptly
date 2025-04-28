import React from 'react';
import { PawPrint, Home, HeartHandshake, ShieldCheck, Sparkles, GraduationCap } from 'lucide-react';
import pet from '../../images/pets-3715733_640-removebg-preview.png'
function Features() {
  return (
    <section className="bg-yellow-100 py-16 px-6 md:px-44">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12 text-indigo-800">Our Features</h2>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-2">
          
          {/* Left Features */}
          <div className="space-y-10 text-right">
            <FeatureItem 
              icon={<Sparkles className="text-pink-500 w-10 h-10" />} 
              title="Natural Products" 
              description="Healthy, organic products for your pets." 
            />
            <FeatureItem 
              icon={<PawPrint className="text-pink-500 w-10 h-10" />} 
              title="Vet Care" 
              description="Expert medical care for all pets." 
            />
            <FeatureItem 
              icon={<GraduationCap className="text-pink-500 w-10 h-10" />} 
              title="Training" 
              description="Behavioral support and training sessions." 
            />
          </div>

          {/* Center Image */}
          <div className="flex-shrink-0">
            <img 
              src={pet}
              alt="Pet Grooming" 
              className=" w-[300px] md:w-[500px] object-cover"
            />
          </div>

          {/* Right Features */}
          <div className="space-y-10 text-left">
            <FeatureItem 
              icon={<Home className="text-pink-500 w-10 h-10" />} 
              title="Housing" 
              description="Comfortable living spaces for pets." 
            />
            <FeatureItem 
              icon={<HeartHandshake className="text-pink-500 w-10 h-10" />} 
              title="Adoption" 
              description="Find the perfect match for your family." 
            />
            <FeatureItem 
              icon={<ShieldCheck className="text-pink-500 w-10 h-10" />} 
              title="Quality Care" 
              description="Compassionate daily care and love." 
            />
          </div>

        </div>
      </div>
    </section>
  );
}

function FeatureItem({ icon, title, description }) {
  return (
    <div className="flex items-center gap-4">
      <div>{icon}</div>
      <div>
        <h4 className="text-lg font-semibold text-gray-800">{title}</h4>
        <p className="text-gray-500 text-sm">{description}</p>
      </div>
      
    </div>
    
    
  );
}

export default Features;
