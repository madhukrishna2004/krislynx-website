// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1A73E8',    // Replace with your KrisLynx primary blue
        secondary: '#0F9D58',  // Replace with your secondary green or accent
        accent: '#FFC107',     // Accent color (optional)
        background: '#F9FAFB', // Light background color
        textPrimary: '#202124',// Main text color
      },
      fontFamily: {
        sans: ['Inter', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'], // Example modern font
      },
    },
  },
  plugins: [],
}
