import React from "react";
import HeartwarmingStories from "./HeartwarmingStories";
import InteractiveFeatures from "./InteractiveFeatures";
import PetCareGuides from "./PetCareGuides";
import VolunteerSpotlights from "./VolunteerSpotlights";

const helpfulArticles = [
  {
    title: "How to Prepare Your Home for a New Pet",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGYvdWCudlzPVtRzeQla9FTd1bqfP-okYJcA&s",
    description:
      "Make your home safe, comfy, and welcoming before your new furry friend arrives!",
    url: "https://your-blog.com/how-to-prepare-home-for-new-pet",  // Add the actual blog URL
  },
  {
    title: "The Adoption Process Explained Step-by-Step",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsNNZEB83ZQyOewllHJ2TXzjB-VOENaZhl7g&s",
    description:
      "A clear, easy-to-follow guide from meeting your pet to bringing them home.",
    url: "https://your-blog.com/adoption-process-step-by-step", // Add the actual blog URL
  },
  {
    title: "Benefits of Adopting vs. Buying",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfgPIegZ0_VT0CKrW5Ua-7K2im7a0IyT89hA&s",
    description:
      "Learn why adopting saves lives and makes a difference for animals in need.",
    url: "https://your-blog.com/adopting-vs-buying", // Add the actual blog URL
  },
  {
    title: "Tips for First-Time Pet Owners",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRakGlsR3aImcBOj6IR-uPSZCFbQE0yyXkv_Q&s",
    description:
      "Essential tips to help new pet parents adjust and provide the best care.",
    url: "https://your-blog.com/tips-for-first-time-pet-owners", // Add the actual blog URL
  },
  {
    title: "What to Expect in the First Week of Adoption",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP5ZxyXKJMsGQu-sKYHe8_M07K4yaZhxiHvA&s",
    description:
      "Navigate the first week with confidence—here’s what to expect and how to prepare.",
    url: "https://your-blog.com/first-week-of-adoption", // Add the actual blog URL
  },
];

function HelpfulArticles() {
  return (
    <section className="py-16 px-6 md:px-44 bg-accent">
      <h2 className="text-4xl font-bold text-center mb-12">Helpful Articles</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {helpfulArticles.map((article, index) => (
          <a
            key={index}
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
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
          </a>
        ))}
      </div>

      <PetCareGuides />
      <HeartwarmingStories />
      <VolunteerSpotlights />
      <InteractiveFeatures />
    </section>
  );
}

export default HelpfulArticles;
