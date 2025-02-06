/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        vidaloka: ["vidaloka", "sans-serif"], // Tambahkan font custom
        sancreek: ["sancreek", "sans-serif"], // Tambahkan font custom
        lancelot: ["lancelot", "sans-serif"], // Tambahkan font custom
        mysteryQuest: ["mystery-quest", "sans-serif"], // Tambahkan font custom
        emilysCandy: ["emilys-candy", "sans-serif"], // Tambahkan font custom
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
