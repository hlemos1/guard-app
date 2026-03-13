/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        charcoal: "#1a1a1a",
        gunmetal: "#2d2d2d",
        steel: "#3a3a3a",
        gold: {
          DEFAULT: "#b8960c",
          muted: "#8a7a3a",
          light: "#d4b94e",
        },
      },
      fontFamily: {
        heading: ["'Inter'", "system-ui", "sans-serif"],
        body: ["'Inter'", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
