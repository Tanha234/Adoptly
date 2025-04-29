import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function PetDetails() {
  const { id } = useParams();
  const [pet, setPet] = useState(null);
  const [relatedPets, setRelatedPets] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        const selectedPet = data.find((p) => p.id.toString() === id);
        setPet(selectedPet);
        setRelatedPets(data.filter((p) => p.id !== selectedPet.id).slice(0, 4));
      });
  }, [id]);  
  

  if (!pet) return <div className="text-center py-20 text-xl">Loading...</div>;

  return (
    <div className="bg-accent">
      {/* Hero */}
      <div className="relative h-64 bg-cover bg-center" style={{ backgroundImage: `url('/your-hero-banner.jpg')` }}>
        <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center">
          <div className="text-center">
            <div className="text-4xl mb-2">🐾</div>
            <h1 className="text-white text-3xl font-bold">Adopt a Pet</h1>
            <div className="text-white text-sm mt-2">
              <Link to="/" className="hover:underline">Home</Link> / {pet.name}
            </div>
          </div>
        </div>
      </div>

      {/* Pet Details Card */}
      <div className="max-w-5xl mx-auto mt-10 p-4">
        <div className="bg-[#f9f5e7] rounded-tl-[40px] rounded-tr-[40px] p-8 flex flex-col md:flex-row shadow-md">
          {/* Left: Carousel */}
          <div className="md:w-1/2 flex flex-col items-center mb-6 md:mb-0">
            <img src={pet.image} alt={pet.name} className="rounded-md h-60 w-60 object-cover mb-4" />
          
            {/* <div className="flex justify-center space-x-2">
              <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
              <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
              <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
            </div> */}
          </div>

          {/* Right: Info */}
          <div className="md:w-1/2 flex flex-col justify-center text-gray-700 space-y-2">
            <h2 className="text-2xl font-bold mb-2">Pet Name: {pet.name}</h2>
            <p><strong>Gender:</strong> {pet.gender}</p>
            <p><strong>Age:</strong> {pet.age_group}</p>
            <p><strong>Vaccinated:</strong> {pet.vaccinated ? 'Yes' : 'No'}</p>
            <p><strong>Neutered:</strong> {pet.neutered ? 'Yes' : 'No'}</p>
            <p><strong>Breed:</strong> {pet.breed}</p>
            <p><strong>Size:</strong> {pet.size}</p>
            <p className="text-sm italic mt-2">{pet.short_description || "Ready for a new home!"}</p>
            <Link
  to={`/adopt/${pet.id}`}
  className="mt-4 w-32 bg-red-500 text-white py-2 rounded text-center hover:bg-red-600"
>
  Adopt Now!
</Link>

          </div>
        </div>

        {/* About Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">About {pet.name}</h2>

        {/* Badges */}
<div className="flex flex-wrap gap-3 mb-6">
  {[
    ...(pet.good_with || []).map((item) => (
      <span key={item} className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm">
        {`Friendly with ${item}`}
      </span>
    )),
    pet.special_needs === "Yes" && (
      <span key="special_needs" className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm">
        Special Needs
      </span>
    ),
    pet.house_trained === "Yes" && (
      <span key="house_trained" className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm">
        House Trained
      </span>
    ),
    pet.vaccinated === "Yes" && (
      <span key="vaccinated" className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm">
        Vaccinated
      </span>
    )
  ].filter(Boolean)}
</div>

          {/* Description */}
          <p className="text-gray-600 mb-4">
            {pet.description || "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere."}
          </p>
          <p className="text-gray-600">
            {pet.description2 || "More about the pet. House-trained, active, and affectionate."}
          </p>
        </div>

        {/* Adoption Rules */}
        <div className="bg-[#5d4037] text-white p-6 mt-12 rounded-lg">
          <h3 className="text-xl font-bold mb-2">Adoption Rules</h3>
          <p className="text-sm">
            Home check may be required. Fees apply. Please ensure a safe, loving environment for adoption success.
          </p>
        </div>

        {/* Related Pets */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-6">Other Pets</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {relatedPets.map((p) => (
              <div key={p.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img src={p.image} alt={p.name} className="w-full h-[190px] object-cover "  />
                <div className="p-4">
                  <h3 className="text-lg font-bold">{p.name}</h3>
                  <p className="text-gray-600 text-sm">Gender: {p.gender}</p>
                  <p className="text-gray-600 text-sm">Neutered: {p.color ? 'Yes' : 'No'}</p>
                  <Link
  to={`/pet/${p.id}`}
  onClick={() => window.location.href = `/pet/${p.id}`}
  className="text-indigo-500 hover:underline text-sm mt-2 block"
>
  View Details
</Link>



                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
