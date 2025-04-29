import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const images = [
 "https://i.pinimg.com/474x/33/81/64/33816484466466a43d62ab2983fc30ba.jpg", // walking dogs
  "https://i.pinimg.com/474x/86/0a/4b/860a4b103eb0f5b5764f8ee5311bdc61.jpg", // feeding cats
  "https://i.pinimg.com/474x/33/57/3a/33573a08b266b18256d19bf8aaa9ae8c.jpg", // vet check
  "https://i.pinimg.com/474x/0d/f2/63/0df2631ce524e03f06e3d464aa75cbfb.jpg", // adoption support
  "https://i.pinimg.com/474x/c1/1d/5a/c11d5a907de7c07bffb096d50909f8a9.jpg", // playtime with dogs
  "https://i.pinimg.com/474x/bd/df/e7/bddfe7da628ef34cdf789d2e6c1b8dff.jpg", // kennel cleaning
  "https://i.pinimg.com/474x/f7/65/55/f76555034a7692e3b61923caec22c905.jpg", // outdoor dog walk
  "https://i.pinimg.com/474x/c1/1d/5a/c11d5a907de7c07bffb096d50909f8a9.jpg", // reading to cats
  "https://i.pinimg.com/474x/54/b0/c8/54b0c866b12965ee77a29d3e305c3a9d.jpg", // giving water
  "https://i.pinimg.com/474x/ff/f1/b7/fff1b782953d5f14ed8485dd0e7819d7.jpg", // grooming a dog
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
