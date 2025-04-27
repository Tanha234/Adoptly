import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const services = [
  {
    title: "Adoption",
    description: "Find your perfect furry companion today.",
    icon: "https://cdn-icons-png.flaticon.com/512/616/616408.png",
    bg: "bg-green-100",
  },
  {
    title: "Foster Care",
    description: "Provide a temporary home for animals in need.",
    icon: "https://cdn-icons-png.flaticon.com/512/616/616409.png",
    bg: "bg-yellow-100",
  },
  {
    title: "Veterinary Support",
    description: "Health checkups and care for adopted pets.",
    icon: "https://cdn-icons-png.flaticon.com/512/616/616430.png",
    bg: "bg-blue-100",
  },
  {
    title: "Volunteer",
    description: "Join us in caring for rescued animals.",
    icon: "https://cdn-icons-png.flaticon.com/512/616/616440.png",
    bg: "bg-purple-100",
  },
];

function Services() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="py-16 bg-accent md:px-44 sm:px-0">
      
      {/* Headline */}
      <div className="text-center mb-10">
        <h4 className="text-orange-500 text-lg font-semibold mb-2 uppercase tracking-widest">
          Our Mission
        </h4>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Help Animals Find Loving Homes
        </h2>
      </div>

      {/* Slider */}
      <div className="max-w-7xl mx-auto px-8">
        <Slider {...settings}>
          {services.map((service, index) => (
            <div key={index} className="p-4">
              <div className={`p-8 rounded-3xl shadow-lg ${service.bg} h-full flex flex-col justify-between`}>
                <img src={service.icon} alt={service.title} className="w-16 h-16 mb-6 mx-auto" />
                <h3 className="text-2xl font-bold text-center mb-4">{service.title}</h3>
                <p className="text-gray-700 text-center mb-6">{service.description}</p>
                <a href="#" className="text-orange-600 font-semibold text-center block">
                  Learn More →
                </a>
              </div>
            </div>
          ))}
        </Slider>
      </div>

    </div>
  );
}

export default Services;
