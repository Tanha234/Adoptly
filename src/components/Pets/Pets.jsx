import { useState } from "react";

const tabs = ["Cat", "Dog", "Rabbit", "Bird"];

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
  
    // Breed (more breeds added)
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
  
    // Color (more colors added)
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
  

const pets = [
  { id: 1, type: "Cat", name: "Whiskers", age: "Young", gender: "Male", size: "Small", image: "https://placekitten.com/200/200", breed: "Persian", color: "White", good_with: ["Kids"], special_needs: "No", house_trained: "Yes" },
  { id: 2, type: "Dog", name: "Buddy", age: "Adult", gender: "Male", size: "Large", image: "https://place-puppy.com/200x200", breed: "Labrador", color: "Brown", good_with: ["Kids", "Cats"], special_needs: "No", house_trained: "Yes" },
  { id: 3, type: "Rabbit", name: "Fluffy", age: "Baby", gender: "Female", size: "Small", image: "https://placekitten.com/201/200", breed: "Flemish Giant", color: "Gray", good_with: ["Kids", "Cats"], special_needs: "No", house_trained: "Yes" },
  { id: 4, type: "Bird", name: "Tweety", age: "Senior", gender: "Female", size: "Small", image: "https://placekitten.com/202/200", breed: "Canary", color: "Yellow", good_with: [], special_needs: "No", house_trained: "No" }
];

export default function App() {
  const [activeTab, setActiveTab] = useState("Cat");
  const [selectedFilters, setSelectedFilters] = useState({});
  const [expandedCategories, setExpandedCategories] = useState(
    () => Object.fromEntries([...new Set(filters.map(f => f.category))].map(cat => [cat, false]))
  );

  const handleFilterChange = (name) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [name]: !prev[name]
    }));
  };

  const handleToggleCategory = (category) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  const filteredPets = pets.filter((pet) => {
    if (pet.type !== activeTab) return false;

    if (
      (selectedFilters.Baby && pet.age !== "Baby") ||
      (selectedFilters.Young && pet.age !== "Young") ||
      (selectedFilters.Adult && pet.age !== "Adult") ||
      (selectedFilters.Senior && pet.age !== "Senior") ||
      (selectedFilters.Small && pet.size !== "Small") ||
      (selectedFilters.Medium && pet.size !== "Medium") ||
      (selectedFilters.Large && pet.size !== "Large") ||
      (selectedFilters.Male && pet.gender !== "Male") ||
      (selectedFilters.Female && pet.gender !== "Female") ||
      (selectedFilters["Flemish Giant"] && pet.breed !== "Flemish Giant") ||
      (selectedFilters.Gray && pet.color !== "Gray") ||
      (selectedFilters.Kids && !pet.good_with.includes("Kids")) ||
      (selectedFilters.Cats && !pet.good_with.includes("Cats")) ||
      (selectedFilters.Dogs && !pet.good_with.includes("Dogs")) ||
      (selectedFilters["Special Needs Yes"] && pet.special_needs !== "Yes") ||
      (selectedFilters["Special Needs No"] && pet.special_needs !== "No") ||
      (selectedFilters["House Trained Yes"] && pet.house_trained !== "Yes") ||
      (selectedFilters["House Trained No"] && pet.house_trained !== "No")
    ) {
      return false;
    }

    return true;
  });

  const groupedFilters = filters.reduce((acc, filter) => {
    acc[filter.category] = acc[filter.category] || [];
    acc[filter.category].push(filter);
    return acc;
  }, {});

  return (
    <div className="min-h-screen bg-yellow-100">
      {/* Banner */}
      <div
  className="bg-center bg-cover text-white text-center py-36 text-4xl font-bold shadow-md"
  style={{ backgroundImage: "url('https://i.pinimg.com/736x/6f/6c/33/6f6c33903939975c320e9e81bc55c258.jpg')" }}
>
 <div className="text-black"> Adopt Your New Best Friend</div>
</div>



      {/* Tabs */}
<div className="bg-white border-b">
  <div className="flex justify-center space-x-8 p-4 border border-red">
    {tabs.map((tab) => (
      <button
        key={tab}
        onClick={() => {
          setActiveTab(tab);
          setSelectedFilters({}); // Reset filters when switching tabs
        }}
        className={`text-sm font-medium px-6 py-2 transition ${
          activeTab === tab
            ? "text-black bg-white border border-orange-300  rounded"
            : "text-gray-600 hover:text-black"
        }`}
      >
        {tab}
      </button>
    ))}
  </div>
</div>


      {/* Content */}
      <div className="flex mt-10 max-w-7xl mx-auto px-4 gap-8 ">
        {/* Filters */}
        <div className="w-1/4 bg-white p-6 rounded-2xl shadow-md">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Filters</h2>
            <button
              className="text-blue-600 font-semibold text-sm"
              onClick={() => setSelectedFilters({})}
            >
              Clear Filters
            </button>
          </div>

          <div className="space-y-6">
            {Object.keys(groupedFilters).map((category) => (
              <div key={category}>
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => handleToggleCategory(category)}
                >
                  <h3 className="font-bold text-lg">{category}</h3>
                  <span className="text-blue-600 transition-transform">
                    {expandedCategories[category] ? "▴" : "▾"}
                  </span>
                </div>
                <div
                  className={`transition-all overflow-hidden ${
                    expandedCategories[category] ? "max-h-96" : "max-h-0"
                  }`}
                >
                  {expandedCategories[category] && (
                    <div className="mt-2 space-y-2 ml-2">
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
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pets Grid */}
        <div className="w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPets.length > 0 ? (
            filteredPets.map((pet) => (
              <div key={pet.id} className="bg-white rounded-2xl shadow-md hover:shadow-lg transition overflow-hidden">
                <img src={pet.image} alt={pet.name} className="w-full h-56 object-cover" />
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{pet.name}</h3>
                  <p className="text-gray-600">{pet.age} • {pet.gender} • {pet.size}</p>
                  <button className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg font-semibold">
                    View Details
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center text-gray-500 text-lg">No pets match your filters.</div>
          )}
        </div>
      </div>
    </div>
  );
}
