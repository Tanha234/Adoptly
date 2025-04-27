/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4f46e5',  // Indigo
        secondary: '#f59e0b', // Amber
        accent: '#edcebb',    // Emerald
        background: '#f9fafb', // Light gray background
        text: '#111827',      // Dark text
      },
      
    },
  },
  plugins: [],
}