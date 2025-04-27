import React from 'react'

function PetsWeTakeCare() {
  const pets = [
    { name: 'Dog', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVM9JDORHZVBlcKCQCNPC-QU1r8xx_FmRzDg&s' },
    { name: 'Cat', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW2MuVa2gUwyfwaqQVOw_uoIP6175B8y1glA&s' },
    { name: 'Bird', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTGAUweXhl-O2JDudb0okQdqV1HDdUvnAmcg&s' },
    { name: 'Rabbit', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmkUbK8kns3uo7evDuHQNTnFRiGoJiHRATlA&s' },
   
  ]

  return (
    <section className="py-12 bg-accent">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-indigo-900">Pets Available for Adoption</h2>
        <p className="text-gray-600 mb-12">
          Give a forever home to a furry, feathered, or fluffy friend 🐾
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap- md:px-44 sm:px-0">
          {pets.map((pet, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden shadow-md border-2 border-indigo-200 flex items-center justify-center hover:scale-105 transition">
                <img src={pet.image} alt={pet.name} className="w-full h-full object-cover" />
              </div>
              <h4 className="mt-4 text-lg font-semibold text-gray-700">{pet.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PetsWeTakeCare
