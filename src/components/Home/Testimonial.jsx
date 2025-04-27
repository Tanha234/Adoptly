import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    name: "John Sadana",
    title: "Adopted a Dog",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    feedback: "Adopting from here was the best decision! My new dog has brought so much joy into my life. Thank you for making the process easy and caring.",
  },
  {
    name: "Jane Janeth",
    title: "Foster Volunteer",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    feedback: "Fostering an animal through this organization was such a rewarding experience. The team was super supportive and always there to help!",
  },
  {
    name: "Mike Anderson",
    title: "Adopted a Cat",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    feedback: "The staff helped me find the perfect cat for my home. She's healthy, happy, and already part of the family. Highly recommend them!",
  },
  {
    name: "Emily Carter",
    title: "Pet Owner",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    feedback: "Such a smooth adoption experience. They truly care about the animals and their future homes. Thank you for all you do!",
  },
  {
    name: "David Johnson",
    title: "Adopted Two Puppies",
    image: "https://randomuser.me/api/portraits/men/28.jpg",
    feedback: "Incredible support throughout the adoption process. Both our puppies are healthy, playful, and have adjusted so well!",
  },
  {
    name: "Sarah Williams",
    title: "Foster Parent",
    image: "https://randomuser.me/api/portraits/women/52.jpg",
    feedback: "I love being part of their foster program! It's amazing to watch these animals find loving forever homes.",
  },
];

function Testimonials() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="py-16 bg-accent md:px-44 sm:px-0">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-gray-700">What Our Adopters Say</h2>
      </div>

      {/* Slider */}
      <div className="px-8 max-w-7xl mx-auto">
        <Slider {...settings}>
          {testimonials.map((testimony, index) => (
            <div key={index} className="p-6">
              <div className="bg-yellow-50 p-6 rounded-2xl shadow-lg relative">
                <div className="text-5xl text-red-400 absolute -top-4 left-4">“</div>
                <p className="text-gray-600 mt-8">{testimony.feedback}</p>
              </div>
              <div className="flex items-center mt-6">
                <img
                  src={testimony.image}
                  alt={testimony.name}
                  className="w-14 h-14 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-gray-800">{testimony.name}</h4>
                  <p className="text-gray-500 text-sm">{testimony.title}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Testimonials;
