import React from "react";
import HeartwarmingStories from "./HeartwarmingStories";
import InteractiveFeatures from "./InteractiveFeatures";
import PetCareGuides from "./PetCareGuides";
import VolunteerSpotlights from "./VolunteerSpotlights";

const helpfulArticles = [
  {
    title: "How to Prepare Your Home for a New Pet",
    image: "https://source.unsplash.com/featured/?pet,home",
    description:
      "Make your home safe, comfy, and welcoming before your new furry friend arrives!",
  },
  {
    title: "The Adoption Process Explained Step-by-Step",
    image: "https://source.unsplash.com/featured/?pet,adoption",
    description:
      "A clear, easy-to-follow guide from meeting your pet to bringing them home.",
  },
  {
    title: "Benefits of Adopting vs. Buying",
    image: "https://source.unsplash.com/featured/?dog,cat,adoption",
    description:
      "Learn why adopting saves lives and makes a difference for animals in need.",
  },
  {
    title: "Tips for First-Time Pet Owners",
    image: "https://source.unsplash.com/featured/?puppy,kitten",
    description:
      "Essential tips to help new pet parents adjust and provide the best care.",
  },
  {
    title: "What to Expect in the First Week of Adoption",
    image: "https://source.unsplash.com/featured/?dog,home",
    description:
      "Navigate the first week with confidence—here’s what to expect and how to prepare.",
  },
];

function HelpfulArticles() {
  return (
    <section className="py-16 px-6 md:px-24 bg-gray-50">
      <h2 className="text-4xl font-bold text-center mb-12">Helpful Articles</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {helpfulArticles.map((article, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow hover:shadow-md transition overflow-hidden"
          >
            <img
              src={article.image}
              alt={article.title}
              className="h-56 w-full object-cover"
            />
            <div className="p-5">
              <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
              <p className="text-sm text-gray-600">{article.description}</p>
            </div>
          </div>
        ))}
      </div>
      <HeartwarmingStories/>
      <PetCareGuides/>
      <VolunteerSpotlights/>
      <InteractiveFeatures/>
    </section>
    
  );
}

export default HelpfulArticles;
