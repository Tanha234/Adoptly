import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Sample data for the heartwarming stories
const heartwarmingStories = [
  {
    title: "Successful Adoption Stories",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKj6t8zAdIvy4LDfbsohZOxmB_1fY-jxL0Tw&s",
    description:
      "Read the heartwarming stories of how pets found their forever homes and made their owners' lives complete.",
  },
  {
    title: "Before & After Pet Transformations",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2EXGmqUlI2zwbDbJdIMDE4RkianOtbm_nRw&s",
    description:
      "Incredible transformations of rescued pets that have found love and care in their new homes.",
  },
  {
    title: "Interviews with Adopters or Volunteers",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzdvTxmU4PkkrFuCeXJQFurTZUQutdPrROYA&s",
    description:
      "Listen to firsthand accounts from adopters and volunteers about their rewarding experiences with the shelter.",
  },
  {
    title: "Interviews with Adopters or Volunteers",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8pEVQUttABnVrJdR6hMhbLmggvoDcoGs6WQ&s",
    description:
      "Listen to firsthand accounts from adopters and volunteers about their rewarding experiences with the shelter.",
  },
  
];

function HeartwarmingStories() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    centerMode: true, // Enable center mode for a more dynamic look
    centerPadding: '5px', // Adjust the gap between the cards
  };

  return (
    <section className="py-16 bg-accent mt-16">
      <h2 className="text-4xl font-bold text-center mb-12">Heartwarming Stories</h2>
      <div className="max-w-6xl mx-auto">
        <Slider {...settings}>
          {heartwarmingStories.map((story, index) => (
            <div key={index} className="bg-white w-full max-w-xs mx-4 rounded-lg shadow-lg overflow-hidden">
              <img
                src={story.image}
                alt={story.title}
                className="h-56 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-4">{story.title}</h3>
                <p className="text-sm text-gray-600">{story.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default HeartwarmingStories;
