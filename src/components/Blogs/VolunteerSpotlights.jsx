import React from 'react';
import Slider from 'react-slick';
import { FaUserFriends } from 'react-icons/fa'; // Icon for volunteers
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const volunteerStories = [
  {
    name: "Sarah Johnson",
    role: "Volunteer Mentor",
    story: "Volunteering here has been one of the most rewarding experiences of my life. Helping new volunteers and seeing the difference we make in animals' lives is incredibly fulfilling.",
    image: "https://randomuser.me/api/portraits/women/52.jpg",
  },
  {
    name: "David Smith",
    role: "Animal Intake Support",
    story: "I started as an intake volunteer, and it has been amazing to see how every pet receives love and care. It’s heartwarming to be part of the adoption process.",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    name: "Emily Carter",
    role: "Adoption Assistance",
    story: "Being involved in the adoption process has allowed me to meet so many wonderful animals and people. It’s amazing to see the connection between adopters and their new pets.",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "John Doe",
    role: "Medical Assistance",
    story: "Volunteering in medical assistance has been eye-opening. I’m able to help care for sick or injured pets, and it’s an incredible feeling to see them recover and find their forever homes.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
];

function VolunteerSpotlights() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
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
    <section className="py-16 px-6 bg-gray-50">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-gray-700">Volunteer Spotlights</h2>
        <p className="text-lg text-gray-500">Hear from our volunteers about their rewarding experiences.</p>
      </div>

      <div className="max-w-7xl mx-auto px-8">
        <Slider {...settings}>
          {volunteerStories.map((story, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex flex-col items-center">
                <img
                  src={story.image}
                  alt={story.name}
                  className="w-24 h-24 rounded-full object-cover mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">{story.name}</h3>
                <p className="text-sm text-gray-600 mb-4">{story.role}</p>
                <p className="text-gray-600">{story.story}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default VolunteerSpotlights;
