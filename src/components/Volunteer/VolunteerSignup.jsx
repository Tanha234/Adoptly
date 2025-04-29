import React, { useState } from "react";
import man from '../../images/emergency_WeberCountyShelterZeus-removebg-preview.png'
import Swal from "sweetalert2";


const helpSections = [
  { title: "Animal Intake Support (Arrival)", icon: "🏠" },
  { title: "Medical Assistance", icon: "⚕️" },
  { title: "Foster Care", icon: "♾️" },
  { title: "Transportation", icon: "🚐" },
  { title: "Adoption Assistance", icon: "🐶" },
  { title: "Volunteer Mentoring", icon: "🤝" },
  { title: "Animal Enrichment", icon: "🐕" },
  { title: "Post-Adoption Follow-Up", icon: "🏡" },
];

function VolunteerSignup() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    section: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (form.name && form.email && form.section && form.message) {
      console.log("Volunteer Form Submitted:", form);
  
      Swal.fire({
        title: "Thank you for signing up!",
        text: "We’ll get in touch with you soon.",
        icon: "success",
        confirmButtonColor: "#f97316", // Tailwind orange-500
      });
  
      // Optionally reset the form:
      setForm({
        name: "",
        email: "",
        section: "",
        message: "",
      });
    }
  };
  

  return (
    <section className="py-16 px-6 bg-accent">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left-side image */}
        <div className="w-full h-full">
          <img
            src={man}
            alt="Volunteering"
            className=" w-full object-cover h-full max-h-[500px]"
          />
        </div>

        {/* Right-side form */}
        <div>
          <h2 className="text-3xl font-bold text-center mb-6">Volunteer Signup</h2>
          <form
            onSubmit={handleSubmit}
            className="bg-orange-50 p-8 rounded-lg shadow"
          >
            <div className="mb-4">
              <label className="block mb-1 font-medium">Name</label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full border p-2 rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1 font-medium">Email</label>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full border p-2 rounded"
              />
            </div>

            {/* Help section dropdown */}
            <div className="mb-4">
              <label className="block mb-1 font-medium">Which section would you like to help with?</label>
              <select
                name="section"
                value={form.section}
                onChange={handleChange}
                required
                className="w-full border p-2 rounded"
              >
                <option value="">Select a section</option>
                {helpSections.map((sec, index) => (
                  <option key={index} value={sec.title}>
                    {sec.icon} {sec.title}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-4">
              <label className="block mb-1 font-medium">Why do you want to volunteer?</label>
              <textarea
                name="message"
                rows="4"
                value={form.message}
                onChange={handleChange}
                className="w-full border p-2 rounded"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-orange-600 text-white py-2 rounded hover:bg-blue-700"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default VolunteerSignup;
