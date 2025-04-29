import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const donationTestimonials = [
  {
    quote: "I donated $55 last month, and seeing the updates about rescued pets makes it so worth it!",
    name: "Emily R.",
    location: "San Diego, CA",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    quote: "Giving monthly $34 helps me feel connected to the mission. I know my donation feeds and saves lives.",
    name: "James L.",
    location: "Austin, TX",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    quote: "I gave $65 in honor of my dog Max. Helping other pets find homes feels amazing.",
    name: "Sophia M.",
    location: "New York, NY",
    avatar: "https://randomuser.me/api/portraits/women/55.jpg"
  },
  {
    quote: "I gave $6 in helping other pets find homes feels amazing and makes me joy to help pets.",
    name: "Ephia M.",
    location: "New York, NY",
    avatar: "https://randomuser.me/api/portraits/women/55.jpg"
  }
];

const settings = {
  centerMode: true,
  centerPadding: "60px",
  slidesToShow: 3,
  autoplay: true,
  autoplaySpeed: 4000,
  arrows: false,
  dots: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        centerPadding: "20px"
      }
    }
  ]
};

export default function DonationProofSlider() {
  return (
    <div className="bg-gray-50 py-12 px-4">
      <h2 className="text-center text-2xl font-bold mb-8 text-gray-800">
        Why Donors Support Us ❤️
      </h2>
      <Slider {...settings}>
        {donationTestimonials.map((t, index) => (
          <div key={index} className="px-2">
            <div className={`rounded-lg p-6 shadow-md text-center transition-all duration-300
              ${index === 3 ? "bg-red-100 text-red-900" : "bg-blue-100 text-gray-700"}`}>
              <p className="italic text-sm mb-4">“{t.quote}”</p>
              <img
                src={t.avatar}
                alt={t.name}
                className="w-12 h-12 mx-auto rounded-full mb-2"
              />
              <h4 className="font-semibold text-sm">{t.name}</h4>
              <p className="text-xs text-gray-500">{t.location}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
