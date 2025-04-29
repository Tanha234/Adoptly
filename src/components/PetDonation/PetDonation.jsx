import React, { useState } from "react";
import pet from '../../images/iStock-1334652447sm-1-removebg-preview.png'
import Swal from 'sweetalert2';

import {
    PieChart,
    Pie,
    Tooltip,
    Cell,
    Legend,
    ResponsiveContainer,
  } from "recharts";
import DonationProofSlider from "./DonationProofSlider";
  

export default function PetDonationForm() {
  const [frequency, setFrequency] = useState("One Time");
  const [amount, setAmount] = useState(null);
  const [customAmount, setCustomAmount] = useState("");
  const [message, setMessage] = useState("");
  const [honorGift, setHonorGift] = useState(false);
  const [petName, setPetName] = useState("");
  

  const presetAmounts = [25, 55, 100, 200, 550];

  const handlePresetClick = (val) => {
    setAmount(val);
    setCustomAmount("");
  };
  const resetForm = () => {
    setFrequency("One Time");
    setAmount(null);
    setCustomAmount("");
    setMessage("");
    setHonorGift(false);
    setPetName("");
  };
  
  

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner */}
      <div className="relative w-full h-96 flex items-center">
        <img
          src="https://img.freepik.com/free-photo/cute-sad-yorkshire-terrier-dog-is-posing-cute-playful-brown-black-doggy-pet-playing-blue-studio-background-concept-motion-action-movement-pets-love-looks-delighted-funny_155003-34740.jpg"
          alt="Kittens"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative bg-blue-100 bg-opacity-95 h-64 mt-16 max-w-3xl p-6 m-6 rounded shadow-lg">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Donate</h1>
          <h2 className="text-lg font-semibold text-gray-700 mb-2">
            Your Donation Brings Pets and People Together
          </h2>
          <p className="text-sm text-gray-600">
            <strong>Yes, it’s through your generosity</strong> that the animals in our care are healthy, loved and ready to find a forever family and home. Each adoption is possible because of you! Your gift also promotes our goal to educate and build a more <strong>humane</strong> community where animals are shown kindness and respect. From a full belly to a safe spot to rest, <strong>your dollars help pets in need</strong> and provide hope for their happy future.
          </p>
        </div>
      </div>
{/* Donation Distribution Pie Chart */}
<div className="py-10 bg-yellow-50 flex flex-col items-center">
  <h2 className="text-2xl font-bold text-gray-800 mb-4">How Your Donation Helps</h2>
  <ResponsiveContainer width="100%" height={300}>
    <PieChart>
    <Pie
  data={[
    { name: "Food & Shelter", value: 45 },
    { name: "Medical Treatments", value: 30 },
    { name: "Rescue & Transportation", value: 15 },
    { name: "Toys & Enrichment", value: 10 },
  ]}
  cx="50%"
  cy="50%"
  outerRadius={100}
  fill="#8884d8"
  label
  dataKey="value"
>
  <Cell fill="#f87171" /> {/* Red - Food & Shelter */}
  <Cell fill="#34d399" /> {/* Green - Medical */}
  <Cell fill="#60a5fa" /> {/* Blue - Rescue */}
  <Cell fill="#fbbf24" /> {/* Yellow - Toys */}
</Pie>

      <Tooltip />
      <Legend />
    </PieChart>
  </ResponsiveContainer>
</div>
      {/* Donation Section */}
      <div className="flex flex-col md:flex-row items-stretch md:px-44 sm:px-0 bg-accent ">
        {/* Left Panel - Donation Form */}
        <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Give today to help provide a voice for homeless animals!
          </h2>

          <div className="grid grid-cols-3 gap-3 mb-4">
            {presetAmounts.map((val) => (
              <button
                key={val}
                onClick={() => handlePresetClick(val)}
                className={`border rounded-lg p-3 text-sm font-semibold transition ${
                  amount === val ? "bg-red-500 text-white border-red-500" : "border-gray-900 text-gray-700"
                }`}
              >
                ${val}<br /><span className="text-xs">Provide food, shelter + more</span>
              </button>
            ))}
            <input
              type="number"
              placeholder="Other"
              value={customAmount}
              onChange={(e) => {
                setAmount(null);
                setCustomAmount(e.target.value);
              }}
              className="col-span-3 border border-gray-300 rounded-lg p-3 text-sm"
            />
          </div>

          <div className="mb-3">
            <label className="block mb-1 text-sm font-medium text-gray-700">Select Donation Frequency</label>
            <select
              value={frequency}
              onChange={(e) => setFrequency(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-2"
            >
              <option>One Time</option>
              <option>Monthly</option>
            </select>
          </div>

          <div className="mb-3">
            <label className="block mb-1 text-sm font-medium text-gray-700">Apply this donation to</label>
            <select className="w-full border border-gray-300 rounded-lg p-2">
              <option>Where it’s needed most</option>
              <option>Spay/Neuter program</option>
              <option>Medical fund</option>
            </select>
          </div>

          <div className="mb-3">
            <label className="block mb-1 text-sm font-medium text-gray-700">Your Note for the Donor Scroll</label>
            <textarea
              className="w-full border border-gray-300 rounded-lg p-2"
              maxLength={100}
              rows={2}
              placeholder="Write a short note"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <p className="text-xs text-gray-500 text-right">{message.length}/100</p>
          </div>

          <div className="flex items-center mb-3 space-x-2">
            <input
              type="checkbox"
              checked={honorGift}
              onChange={(e) => setHonorGift(e.target.checked)}
              className="h-4 w-4"
            />
            <label className="text-sm text-gray-700">Honor or remember someone with a gift?</label>
          </div>

          {honorGift && (
            <div className="mb-3">
              <input
                type="text"
                placeholder="Name of honoree"
                value={petName}
                onChange={(e) => setPetName(e.target.value)}
                className="w-full border border-gray-300 rounded-lg p-2 text-sm"
              />
            </div>
          )}

<button
  onClick={() => {
    Swal.fire({
      icon: 'success',
      title: 'Thank you!',
      text: 'Your donation was successful and is making a difference!',
    }).then(() => {
      resetForm();
    });
  }}
  className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-lg font-bold"
>
  Donate {amount || customAmount ? `$${amount || customAmount}` : "Once"}
</button>




        </div>

        {/* Right Panel - Pet Image */}
        <div className="w-full md:w-1/2  overflow-hidden">
          <img
            src={pet}
            alt="Dog and cat"
            className="w-full h-full "
          />
        </div>
      </div>
{/* Trust Badges */}
 <div className="bg-orange-300 border-t border-gray-200 py-12">
  <h3 className="text-center text-lg font-semibold text-gray-800 mb-6">
    Trusted & Secure Giving
  </h3>
  <div className="flex flex-wrap justify-center items-center gap-10 px-4">
    {[
      {
        icon: "https://img.icons8.com/ios/100/lock--v1.png",
        label: "Secure Payment"
      },
      {
        icon: "https://img.icons8.com/ios/100/charity.png",
        label: "Nonprofit Certified"
      },
      {
        icon: "https://img.icons8.com/ios/100/handshake--v1.png",
        label: "Trusted Partners"
      },
      {
        icon: "https://img.icons8.com/ios/100/privacy.png",
        label: "Privacy Protected"
      }
    ].map((item, index) => (
      <div
        key={index}
        className="flex flex-col items-center transition transform hover:scale-105"
      >
        <img src={item.icon} alt={item.label} className="h-12 mb-2" />
        <span className="text-xs text-gray-600">{item.label}</span>
      </div>
    ))}
  </div>
</div> 


{/* <DonationProofSlider/> */}
    </div>
    
    
  );
}
