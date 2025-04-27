import React from 'react'
import CountUp from 'react-countup'

const stats = [
  { title: 'HAPPY CLIENTS', value: 1500, icon: 'https://cdn-icons-png.flaticon.com/512/1946/1946429.png' },
  { title: 'PROFESSIONALS', value: 14, icon: 'https://cdn-icons-png.flaticon.com/512/616/616554.png' },
  { title: 'ADOPTED PETS', value: 900, icon: 'https://cdn-icons-png.flaticon.com/512/616/616408.png' },
  { title: 'PRIZES', value: 12, icon: 'https://cdn-icons-png.flaticon.com/512/992/992700.png' },
];

function StatsSection() {
  return (
    <div className="bg-[#FFF8E7] py-16 md:px-44 sm:px-0">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center px-4">
        {stats.map((stat, index) => (
          <div key={index} className="bg-[#6B4F4F] text-white rounded-2xl py-10 relative shadow-lg hover:scale-105 transition-transform duration-300">
            {/* Hanging effect */}
            <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-gray-200 rounded-full border-2 border-gray-300"></div>
            
            <img src={stat.icon} alt={stat.title} className="w-12 h-12 mx-auto mb-4 object-contain" />
            <h2 className="text-3xl font-bold mb-2">
              <CountUp start={0} end={stat.value} duration={2.5} />
            </h2>
            <p className="text-md tracking-wider font-semibold">{stat.title}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default StatsSection;
