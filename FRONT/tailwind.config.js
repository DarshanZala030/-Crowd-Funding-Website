/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: ["forest", "garden"],
  },
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}

