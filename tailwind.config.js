/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        sky: {
          start: "#3FCBFF",
          end: "#7FE3FF",
        },
        grape: {
          start: "#7B2FF7",
          end: "#A65BFA",
        },
        gold: "#FFD93D",
        ink: "#0E1A2B",
      },
      fontFamily: {
        display: ["Poppins", "system-ui", "sans-serif"],
        body: ["Inter", "system-ui", "sans-serif"],
      },
      borderRadius: {
        pill: "999px",
        card: "28px",
      },
      boxShadow: {
        soft: "0 12px 30px -10px rgba(20, 30, 60, 0.25)",
        chip: "0 4px 10px -2px rgba(0,0,0,0.15)",
      },
    },
  },
  plugins: [],
};
