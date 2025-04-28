import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules'; // import Autoplay
import 'swiper/css';
import 'swiper/css/pagination';
import { PawPrint, Home, HeartHandshake, GraduationCap } from 'lucide-react';

function ServicesSlider() {
  const services = [
    {
      icon: <PawPrint className="w-8 h-8 text-white" />,
      title: "Fun Activities",
      description: "Daily exercise and mental stimulation to keep your pet happy.",
    },
    {
      icon: <Home className="w-8 h-8 text-white" />,
      title: "Pet Hotel",
      description: "Temporary loving homes for pets awaiting adoption.",
    },
    {
      icon: <HeartHandshake className="w-8 h-8 text-white" />,
      title: "Adoption Support",
      description: "Helping you choose and care for your new best friend.",
    },
    {
      icon: <GraduationCap className="w-8 h-8 text-white" />,
      title: "Training Programs",
      description: "Training for obedience, socialization and good manners.",
    },
  ];

  return (
    <section className="bg-orange-200 py-16 px-6 md:px-44">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12 text-indigo-800">Our Services⚡</h2>

        <Swiper
          modules={[Pagination, Autoplay]} 
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000, 
            disableOnInteraction: false, 
          }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-44 custom-swiper"
        >
          {services.map((service, index) => (
            <SwiperSlide key={index}>
              <ServiceCard {...service} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

function ServiceCard({ icon, title, description }) {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition p-4 flex flex-col items-center text-center h-full">
      <div className="bg-yellow-400 p-4 rounded-full flex items-center justify-center mb-6">
        {icon}
      </div>
      <h4 className="text-lg font-bold mb-3 text-gray-800">{title}</h4>
      <p className="text-gray-500 text-sm mb-6">{description}</p>
   
    </div>
  );
}

export default ServicesSlider;
