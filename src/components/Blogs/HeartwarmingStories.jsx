import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Sample data for the heartwarming stories
const heartwarmingStories = [
  {
    title: "Successful Adoption Stories",
    image: "https://source.unsplash.com/featured/?happy-dog",
    description:
      "Read the heartwarming stories of how pets found their forever homes and made their owners' lives complete.",
  },
  {
    title: "Before & After Pet Transformations",
    image: "https://source.unsplash.com/featured/?pet-transformation",
    description:
      "Incredible transformations of rescued pets that have found love and care in their new homes.",
  },
  {
    title: "Interviews with Adopters or Volunteers",
    image: "https://source.unsplash.com/featured/?volunteer,pet",
    description:
      "Listen to firsthand accounts from adopters and volunteers about their rewarding experiences with the shelter.",
  },
  {
    title: "Interviews with Adopters or Volunteers",
    image: "https://source.unsplash.com/featured/?volunteer,pet",
    description:
      "Listen to firsthand accounts from adopters and volunteers about their rewarding experiences with the shelter.",
  },
];

function HeartwarmingStories() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <section className="py-16 px-6 bg-gray-50">
      <h2 className="text-4xl font-bold text-center mb-12">Heartwarming Stories</h2>
      <div className="max-w-7xl mx-auto">
        <Slider {...settings}>
          {heartwarmingStories.map((story, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
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
