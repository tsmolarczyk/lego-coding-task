/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "lego-pattern": "url('./src/assets/bg.png')"
      },
      backgroundSize: {
        auto: "auto",
        cover: "cover",
        contain: "contain"
      }
    }
  },
  plugins: []
};
