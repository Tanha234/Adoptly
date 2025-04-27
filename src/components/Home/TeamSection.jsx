import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function TeamSection() {
  const teamMembers = [
    {
      name: "Scarlett Emily",
      role: "Kennel Assistant",
      image: "https://i.pinimg.com/474x/1f/8e/0d/1f8e0d5f2a3a2a3b661c6eb2c470d0f4.jpg",
    },
    {
      name: "Jackson Mateo",
      role: "Veterinary Assistant",
      image: "https://i.pinimg.com/474x/28/6b/03/286b03b2ad1c09bf52cbcc99a4dabba4.jpg",
    },
    {
      name: "Madison Ellie",
      role: "Groomer Manager",
      image: "https://i.pinimg.com/474x/0c/d7/71/0cd771e96f6acde6621e4a83dc00c7dc.jpg",
    },
    {
      name: "Kash Preston",
      role: "Co-Founder",
      image: "https://i.pinimg.com/474x/12/4c/5f/124c5f5cb3ee63ce9116de0fd6062209.jpg",
    },
  ];

  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="py-16 bg-orange-200 text-center md:px-44 sm:px-0">
      <h4 className="text-orange-500 text-lg font-semibold mb-2 uppercase tracking-widest">
        Our Team
      </h4>
      <h2 className="text-4xl md:text-3xl font-bold text-gray-800 mb-10">
        See Our Scooby Team Members
      </h2>

      <div className="max-w-4xl mx-auto px-4">
        <Slider {...settings}>
          {teamMembers.map((member, index) => (
            <div key={index} className="px-4">
              <div className="flex flex-col items-center">
                <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-orange-200 mb-4 mx-auto">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-orange-500 text-sm mb-1">{member.role}</p>
                <h3 className="text-lg font-bold">{member.name}</h3>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default TeamSection;
