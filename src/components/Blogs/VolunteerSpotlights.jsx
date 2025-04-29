import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const volunteerTestimonials = [
  {
    name: "John Sadana",
    title: "Animal Intake Support",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    feedback: "Volunteering with animal intake was such a fulfilling experience! I got to help calm anxious pets and make them feel safe in their new home.",
  },
  {
    name: "Jane Janeth",
    title: "Foster Volunteer",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    feedback: "Fostering animals was incredibly rewarding. Watching the pets grow and find their forever homes was a highlight of my experience!",
  },
  {
    name: "Mike Anderson",
    title: "Medical Assistance Volunteer",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    feedback: "Being a part of the medical team was amazing. I assisted in checkups and helped care for sick animals, knowing I made a difference in their recovery.",
  },
  {
    name: "Emily Carter",
    title: "Adoption Assistance Volunteer",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    feedback: "Helping families find their perfect pets was so rewarding. I loved matching pets with the right people and seeing the joy it brought both the pet and family!",
  },
  {
    name: "David Johnson",
    title: "Animal Enrichment Volunteer",
    image: "https://randomuser.me/api/portraits/men/28.jpg",
    feedback: "I loved spending time with the animals, playing and walking them. It was great to see their personalities shine and help them feel loved and less stressed.",
  },
  {
    name: "Sarah Williams",
    title: "Volunteer Mentor",
    image: "https://randomuser.me/api/portraits/women/52.jpg",
    feedback: "Being a volunteer mentor was so rewarding. It felt amazing to guide new volunteers and help them get involved in making a real difference!",
  },
];

function VolunteerTestimonials() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show 3 testimonials per column
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 }, // Show 2 per column for medium screens
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 }, // Show 1 per column for small screens
      },
    ],
  };

  return (
    <div className="py-16 bg-accent sm:px-0">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-gray-700">What Our Volunteers Say</h2>
      </div>

      {/* Slider */}
      <div className="max-w-9xl mx-auto">
        <Slider {...settings}>
          {volunteerTestimonials.map((testimonial, index) => (
            <div key={index} className="p-6">
              <div className="bg-yellow-50 p-6 rounded-2xl shadow-lg relative">
                <div className="text-5xl text-red-400 absolute -top-4 left-4">“</div>
                <p className="text-gray-600 mt-8">{testimonial.feedback}</p>
              </div>
              <div className="flex items-center mt-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                  <p className="text-gray-500 text-sm">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default VolunteerTestimonials;