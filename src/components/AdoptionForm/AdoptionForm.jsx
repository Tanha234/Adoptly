import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";


export default function AdoptionForm() {
  const { id } = useParams();
  const [pet, setPet] = useState(null);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    occupation: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    reason: "",
    otherPets: "",
    homeEnv: "",
    agreement: false,
  });

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        const selectedPet = data.find((p) => p.id.toString() === id);
        setPet(selectedPet);
      });
  }, [id]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if any field is empty
    const allFieldsFilled = Object.entries(formData).every(
      ([key, value]) =>
        key === "agreement" ? value === true : value.trim() !== ""
    );

    if (!allFieldsFilled) {
      Swal.fire("Incomplete", "Please fill in all the fields!", "warning");
      return;
    }

    // Show success alert
    Swal.fire(
      "Request Accepted",
      "Your adoption request is accepted. We will update you soon!",
      "success"
    )
    .then(() => {
        navigate("/pets"); // Navigate to Pets page
    });
    // Optionally clear the form
    setFormData({
      name: "",
      email: "",
      phone: "",
      occupation: "",
      address: "",
      city: "",
      state: "",
      zip: "",
      reason: "",
      otherPets: "",
      homeEnv: "",
      agreement: false,
    });
  };

  if (!pet) return <div className="text-center py-20 text-xl">Loading...</div>;

  return (
    <div className="min-h-screen bg-accent py-16 px-6 md:px-24">
      <h2 className="text-3xl font-bold text-center mb-10">Adoption Form</h2>
      <div className="bg-white rounded-xl shadow-md p-8 max-w-3xl mx-auto">
        <div className="flex items-center gap-6 mb-8">
          <img src={pet.image} alt={pet.name} className="w-28 h-28 rounded-md object-cover" />
          <div>
            <h3 className="text-2xl font-semibold">{pet.name}</h3>
            <p className="text-sm text-gray-600">Adoption Fee: ${pet.adoption_fee || 50}</p>
          </div>
        </div>

        {/* Pet Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <input value={pet.name} disabled className="w-full p-3 border bg-gray-100 rounded" />
           <input value={pet.color || "Unknown"} disabled className="w-full p-3 border bg-gray-100 rounded" />
         
        </div>

        {/* Adoption Form */}
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input name="name" value={formData.name} onChange={handleChange} placeholder="Full Name" className="w-full p-3 border rounded" required />
          <input name="email" value={formData.email} onChange={handleChange} type="email" placeholder="Email Address" className="w-full p-3 border rounded" required />
          <input name="phone" value={formData.phone} onChange={handleChange} type="tel" placeholder="Phone Number" className="w-full p-3 border rounded" required />
          <input name="occupation" value={formData.occupation} onChange={handleChange} placeholder="Occupation" className="w-full p-3 border rounded" required />
          <input name="address" value={formData.address} onChange={handleChange} placeholder="Street Address" className="w-full p-3 border rounded col-span-2" required />
          <input name="city" value={formData.city} onChange={handleChange} placeholder="City" className="w-full p-3 border rounded" required />
          <input name="state" value={formData.state} onChange={handleChange} placeholder="State" className="w-full p-3 border rounded" required />
          <input name="zip" value={formData.zip} onChange={handleChange} placeholder="Zip Code" className="w-full p-3 border rounded" required />
          <textarea name="reason" value={formData.reason} onChange={handleChange} placeholder="Why do you want to adopt this pet?" className="w-full p-3 border rounded col-span-2" rows="4" required />
          <textarea name="otherPets" value={formData.otherPets} onChange={handleChange} placeholder="Do you have any other pets?" className="w-full p-3 border rounded col-span-2" rows="3" required />
          <textarea name="homeEnv" value={formData.homeEnv} onChange={handleChange} placeholder="Describe your home environment" className="w-full p-3 border rounded col-span-2" rows="3" required />
          <label className="flex items-center col-span-2">
            <input type="checkbox" name="agreement" checked={formData.agreement} onChange={handleChange} className="mr-2" />
            I agree to a home visit and understand the adoption responsibilities.
          </label>
          <button type="submit" className="w-full md:col-span-2 bg-red-500 text-white py-3 rounded hover:bg-red-600 transition">
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
}
