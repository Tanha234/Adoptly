import React, { useState } from "react";
import volunteerImage from '../../images/h3-cat-pet-container-removebg-preview.png'
import VolunteerGallery from "./VolunteerGallery";
import VolunteerSignup from "./VolunteerSignup";
import VolunteerTestimonials from "./volunteerTestimonials";

export default function VolunteerPage() {
 
  const roles = [
    {
      title: "Animal Intake Support (Arrival)",
      icon: "🏠",
      angle: 0,
      description: "Welcome new animals to the shelter, help with check-in, paperwork, and calming nervous pets."
    },
    {
      title: "Medical Assistance",
      icon: "⚕️",
      angle: 45,
      description: "Support veterinary staff during checkups, keep animals still, clean exam areas, and prepare supplies."
    },
    {
      title: "Foster Care",
      icon: "♾️",
      angle: 90,
      description: "Provide temporary homes for pets who need recovery, training, or socialization. Share feedback on behavior and progress."
    },
    {
      title: "Transportation",
      icon: "🚐",
      angle: 135,
      description: "Drive animals to vet appointments, foster homes, or adoption events. Ensure safe and comfortable travel."
    },
    {
      title: "Adoption Assistance",
      icon: "🐶",
      angle: 180,
      description: "Talk to potential adopters and explain pet personalities. Keep the adoption center tidy and welcoming."
    },
    {
      title: "Volunteer Mentoring",
      icon: "🤝",
      angle: 225,
      description: "Guide new volunteers, train them on tasks, and answer questions. Build a friendly and supportive volunteer team."
    },
    {
      title: "Animal Enrichment",
      icon: "🐕",
      angle: 270,
      description: "Play with animals, walk dogs, and run playgroups. Help reduce stress and improve behavior."
    },
    {
      title: "Post-Adoption Follow-Up",
      icon: "🏡",
      angle: 315,
      description: "Check in with families after adoption. Offer guidance and support to ensure the pet’s successful transition."
    }
  ];

  

  return (
    <div className="bg-white text-gray-800">
      {/* Hero Banner */}
      <section className="relative h-80 bg-cover bg-center bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5xyXpGit6rFcTRsSZeYw052tK3wMR_Z16bQ&s')] flex items-center justify-center">
        <div className="bg-black bg-opacity-50 p-8 rounded text-center text-white">
          <h1 className="text-4xl font-bold mb-2">Join Our Volunteer Team</h1>
          <p className="text-lg">Make a difference in the lives of animals in need.</p>
        </div>
      </section>

      {/* Ways You Can Help */}
      <section className="py-12 px-6 bg-yellow-50">
        <h2 className="text-4xl text-orange-600 font-bold text-center my-12">A volunteer Can Help</h2>
        <div className="relative w-[500px] h-[500px] mx-auto">
      {/* Center Image */}
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9wLIKrXit0mI5Y6gDc8tftCUDUOLhJOwSJQ&s"
        alt="Volunteer"
        className="w-[200px] h-[200px] rounded-full object-cover absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-4 border-white shadow-md z-10"
      />

      {/* Role Segments */}
     {/* Role Segments */}
{roles.map((role, index) => {
  const radius = 220;
  const angleRad = (role.angle * Math.PI) / 180;
  const x = radius * Math.cos(angleRad);
  const y = radius * Math.sin(angleRad);
  return (
    <div
      key={index}
      className="absolute w-[120px] text-center transform -translate-x-1/2 -translate-y-1/2"
      style={{
        top: `calc(50% + ${y}px)`,
        left: `calc(50% + ${x}px)`,
      }}
    >
      <div className="bg-teal-100 hover:bg-teal-200 text-teal-800 p-4 rounded-xl shadow transition duration-300">
        <div className="text-2xl mb-2">{role.icon}</div>
        <div className="text-sm font-semibold">{role.title}</div>
      </div>
    </div>
  );
})}

    </div>
      </section>

    

      {/* Volunteer Testimonials */}
<VolunteerTestimonials/>
<VolunteerGallery/>
<VolunteerSignup/>

    </div>
  );
}
