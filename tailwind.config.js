/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  plugins: [
    // require('@tailwindcss/forms'),
  ],
  theme: {
    extend: {
      dropShadow: {
        "lg-up": "0 35px 35px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [],
};
