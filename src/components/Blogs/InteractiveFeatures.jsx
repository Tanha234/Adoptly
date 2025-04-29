import React, { useState } from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const faqs1 = [
  {
    question: "How can I adopt a pet?",
    answer:
      "To adopt a pet, you need to fill out an adoption application, meet the pet, and attend an adoption interview to ensure a good match.",
  },
  {
    question: "What’s the cost of adoption?",
    answer:
      "Adoption fees vary depending on the pet. However, the fee covers vaccinations, spaying/neutering, and other medical expenses.",
  },
  {
    question: "How do I volunteer?",
    answer:
      "You can volunteer by filling out the volunteer signup form on our website. We have several roles available depending on your interests.",
  },
];

const faqs2 = [
  {
    question: "What should I do if I find a lost pet?",
    answer:
      "If you find a lost pet, you can bring it to our shelter, or if it has a microchip, contact the owner through the chip registry.",
  },
  {
    question: "How do I foster a pet?",
    answer:
      "To foster, you need to fill out a foster application form. We’ll provide you with everything you need to care for the pet during their transition.",
  },
  {
    question: "What’s the adoption process for special needs pets?",
    answer:
      "The process for special needs pets is similar, but we provide more detailed information to ensure that you’re fully prepared for the extra care required.",
  },
];

const InteractiveFeatures = () => {
  const [activeIndex1, setActiveIndex1] = useState(null);
  const [activeIndex2, setActiveIndex2] = useState(null);

  const toggleAccordion = (index, accordion) => {
    if (accordion === 1) {
      setActiveIndex1(activeIndex1 === index ? null : index);
    } else if (accordion === 2) {
      setActiveIndex2(activeIndex2 === index ? null : index);
    }
  };

  return (
    <section className="py-16 px-6 bg-gray-50">
      {/* FAQs Section with two columns */}
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-3xl font-bold text-gray-700 mb-8">Frequently Asked Questions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Accordion 1 */}
          <div>
            {faqs1.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg mb-4">
                <div
                  className="cursor-pointer p-6 flex justify-between items-center"
                  onClick={() => toggleAccordion(index, 1)}
                >
                  <h3 className="text-xl font-semibold text-gray-800">{faq.question}</h3>
                  <span className="text-gray-500">
                    {activeIndex1 === index ? "-" : "+"}
                  </span>
                </div>
                {activeIndex1 === index && (
                  <div className="p-6 text-gray-600">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Accordion 2 */}
          <div>
            {faqs2.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg mb-4">
                <div
                  className="cursor-pointer p-6 flex justify-between items-center"
                  onClick={() => toggleAccordion(index, 2)}
                >
                  <h3 className="text-xl font-semibold text-gray-800">{faq.question}</h3>
                  <span className="text-gray-500">
                    {activeIndex2 === index ? "-" : "+"}
                  </span>
                </div>
                {activeIndex2 === index && (
                  <div className="p-6 text-gray-600">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Interactive Features Section */}
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Comment Section */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">Leave a Comment</h3>
          <textarea
            className="w-full p-3 border rounded-lg"
            placeholder="Share your thoughts..."
            rows="4"
          ></textarea>
          <button className="mt-4 bg-blue-600 text-white py-2 px-6 rounded-full hover:bg-blue-700">
            Post Comment
          </button>
        </div>

        {/* Social Media Share Buttons */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">Share This Post</h3>
          <div className="flex space-x-6">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-blue-600 text-3xl hover:text-blue-700" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-blue-400 text-3xl hover:text-blue-500" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-pink-600 text-3xl hover:text-pink-700" />
            </a>
          </div>
        </div>

        {/* Newsletter Signup Box */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">Subscribe to Our Newsletter</h3>
          <form className="flex">
            <input
              type="email"
              className="w-full p-3 border rounded-l-lg"
              placeholder="Enter your email"
              required
            />
            <button
              type="submit"
              className="bg-orange-600 text-white py-3 px-6 rounded-r-lg hover:bg-orange-700"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default InteractiveFeatures;
