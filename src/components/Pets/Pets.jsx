import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const tabs = ["All", "Cat", "Dog", "Rabbit", "Bird"];

const filters = [
  // Age Group
  { label: "Baby", name: "Baby", category: "Age Group" },
  { label: "Young", name: "Young", category: "Age Group" },
  { label: "Adult", name: "Adult", category: "Age Group" },
  { label: "Senior", name: "Senior", category: "Age Group" },

  // Size
  { label: "Small", name: "Small", category: "Size" },
  { label: "Medium", name: "Medium", category: "Size" },
  { label: "Large", name: "Large", category: "Size" },

  // Breed
  { label: "Flemish Giant", name: "Flemish Giant", category: "Breed" },
  { label: "Persian", name: "Persian", category: "Breed" },
  { label: "Labrador", name: "Labrador", category: "Breed" },
  { label: "Canary", name: "Canary", category: "Breed" },
  { label: "Siamese", name: "Siamese", category: "Breed" },
  { label: "Golden Retriever", name: "Golden Retriever", category: "Breed" },
  { label: "Parakeet", name: "Parakeet", category: "Breed" },

  // Gender
  { label: "Male", name: "Male", category: "Gender" },
  { label: "Female", name: "Female", category: "Gender" },
  { label: "Unknown", name: "Unknown Gender", category: "Gender" },

  // Color
  { label: "Gray", name: "Gray", category: "Color" },
  { label: "White", name: "White", category: "Color" },
  { label: "Black", name: "Black", category: "Color" },
  { label: "Brown", name: "Brown", category: "Color" },
  { label: "Yellow", name: "Yellow", category: "Color" },
  { label: "Orange", name: "Orange", category: "Color" },

  // Special Needs
  { label: "Yes", name: "Special Needs Yes", category: "Special Needs" },
  { label: "No", name: "Special Needs No", category: "Special Needs" },

  // House Trained
  { label: "Yes", name: "House Trained Yes", category: "House Trained" },
  { label: "No", name: "House Trained No", category: "House Trained" },
];

export default function App() {
  const [activeTab, setActiveTab] = useState("All");
  const [selectedFilters, setSelectedFilters] = useState({});
  const [expandedCategories, setExpandedCategories] = useState(() =>
    Object.fromEntries([...new Set(filters.map((f) => f.category))].map((cat) => [cat, false]))
  );
  const [pets, setPets] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => setPets(data))
      .catch((error) => console.error("Error fetching pets:", error));
  }, []);

  const handleFilterChange = (name) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  const handleToggleCategory = (category) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  const filteredPets = pets.filter((pet) => {
    // First, filter by type (tab)
    if (activeTab !== "All") {
      if (!pet.type || pet.type.toLowerCase() !== activeTab.toLowerCase()) {
        return false;
      }
    }
  
    // Prepare selected filters by category
    const selected = {
      age_group: [],
      size: [],
      breed: [],
      gender: [],
      color: [],
      special_needs: [],
      house_trained: [],
    };
  
    Object.keys(selectedFilters).forEach((filterName) => {
      if (selectedFilters[filterName]) {
        const found = filters.find((f) => f.name === filterName);
        if (found) {
          if (found.category === "Age Group") selected.age_group.push(found.label);
          if (found.category === "Size") selected.size.push(found.label);
          if (found.category === "Breed") selected.breed.push(found.label);
          if (found.category === "Gender") selected.gender.push(found.label);
          if (found.category === "Color") selected.color.push(found.label);
          if (found.category === "Special Needs") selected.special_needs.push(found.label);
          if (found.category === "House Trained") selected.house_trained.push(found.label);
        }
      }
    });
  
    // Check category by category
    if (selected.age_group.length > 0 && !selected.age_group.includes(pet.age_group)) return false;
    if (selected.size.length > 0 && !selected.size.includes(pet.size)) return false;
    if (selected.breed.length > 0 && !selected.breed.includes(pet.breed)) return false;
    if (selected.gender.length > 0 && !selected.gender.includes(pet.gender)) return false;
    if (selected.color.length > 0 && !selected.color.includes(pet.color)) return false;
    if (selected.special_needs.length > 0 && !selected.special_needs.includes(pet.special_needs)) return false;
    if (selected.house_trained.length > 0 && !selected.house_trained.includes(pet.house_trained)) return false;
  
    return true;
  });
  
  

  const groupedFilters = filters.reduce((acc, filter) => {
    acc[filter.category] = acc[filter.category] || [];
    acc[filter.category].push(filter);
    return acc;
  }, {});

  return (
    <div className="min-h-screen bg-yellow-100 ">
      {/* --- Banner --- */}
      <div
        className="bg-center bg-cover text-white text-center py-36 text-4xl font-bold shadow-md"
        style={{ backgroundImage: "url('https://i.pinimg.com/736x/6f/6c/33/6f6c33903939975c320e9e81bc55c258.jpg')" }}
      >
        <div className="text-indigo-800">Adopt Your New Best Friend</div>
      </div>

      {/* --- Tabs --- */}
      <div className="bg-white border-b ">
        <div className="flex justify-center space-x-8 p-4">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab);
                setSelectedFilters({}); // Clear filters on tab change
              }}
              className={`text-sm font-medium px-6 py-2 transition ${
                activeTab === tab
                  ? "text-black bg-white border border-orange-300 rounded"
                  : "text-gray-600 hover:text-black"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* --- Content --- */}
      <div className="flex mt-10 max-w-7xl mx-auto px-4 gap-2 ">
        {/* --- Filters --- */}
        <div className="space-y-6 max-w-4xl  ">
  {Object.keys(groupedFilters).map((category) => (
    <div key={category} className="mb-6">
      <h3 className="font-bold text-md mb-2 w-full">{category}</h3>
      <div className="space-y-2 ml-2">
        {groupedFilters[category].map((filter) => (
          <label key={filter.name} className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={!!selectedFilters[filter.name]}
              onChange={() => handleFilterChange(filter.name)}
              className="h-4 w-4 text-blue-600"
            />
            <span className="text-gray-700 text-sm">{filter.label}</span>
          </label>
        ))}
      </div>
    </div>
  ))}
</div>


      {/* --- Pets Grid --- */}
{/* --- Pets Grid --- */}
<div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10 p-8 h-auto">
  {filteredPets.length > 0 ? (
    filteredPets.map((pet) => (
      <div
        key={pet.id}
        className=" flex flex-col items-center text-center rounded-3xl overflow-hidden relative p-6 "
      >
        <div className="relative">
          <div className="w-48 h-48 rounded-full overflow-hidden">
            <img
              src={pet.image}
              alt={pet.name}
              className="w-full h-full object-cover"
            />
          </div>
        
        </div>

        {/* <div className="mt-4 flex items-center justify-center gap-2 text-gray-500 text-sm">
          <span>🎂</span> <span>Birth: {pet.birthYear || "Unknown"}</span>
        </div> */}

        <h3 className="text-xl font-bold mt-2">{pet.name}</h3>
      

        <p className="text-gray-500 text-sm mt-2 px-4">
          {pet.description || "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut elit tellus."}
        </p>

        <div className="mt-4">
                  <Link 
                    to={`/pet/${pet.id}`} 
                    className="text-indigo-600 font-bold hover:underline"
                  >
                    Read More🐾
                  </Link>
                </div>
      </div>
    ))
  ) : (
    <div className="col-span-full text-center text-gray-500 text-lg">
      No pets match your filters.
    </div>
  )}
</div>



      </div>
    </div>
  );
}
