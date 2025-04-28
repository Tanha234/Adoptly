import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const images = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKh3qKrgR_CU8jj5Qg5RJ0l9gBfWuSCuiHPw&s", 
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOl01S1f0XVMkjr__BTNITuWApnpOPAHYV1g&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfJDgUBtC93TY9oa2qakX3peW7Lju-DRCrSw&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLaEz1umQ0lccKNYw_aIHzHmyMUa55zHuXug&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLaEz1umQ0lccKNYw_aIHzHmyMUa55zHuXug&s", 
  "https://images.unsplash.com/photo-1583337130417-3346a1be7dee",
  "https://images.unsplash.com/photo-1574158622682-e40e69881006",
  "https://images.unsplash.com/photo-1558788353-f76d92427f16"
];

function LatestPhotos() {
  return (
      
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-10">Our Latest Photos</h2>

        <Swiper
          modules={[Autoplay, Pagination]}
          slidesPerView={1}
          spaceBetween={20}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          pagination={false}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          className="overflow-visible"
        >
          {images.map((imgUrl, index) => (
            <SwiperSlide key={index}>
              <div className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
                <img
                  src={imgUrl}
                  alt={`Pet ${index + 1}`}
                  className="w-full h-72 object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default LatestPhotos;
