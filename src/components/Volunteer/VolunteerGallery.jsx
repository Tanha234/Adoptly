import React from "react";

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

function VolunteerGallery() {
  return (
    <div className="bg-orange-100 py-16 px-6 sm:px-12 lg:px-24">
      <h2 className="text-4xl font-bold text-center text-gray-700 mb-12">Volunteer Moments</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {images.map((url, index) => (
          <div key={index} className="overflow-hidden rounded-xl shadow-md hover:scale-105 transition-transform duration-300">
            <img src={`${url}?auto=format&fit=crop&w=600&q=80`} alt={`Volunteer work ${index + 1}`} className="w-full h-48 object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default VolunteerGallery;
