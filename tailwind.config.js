/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        md: "1000px"
      },
      backgroundImage: {
        "lego-pattern": "url('/bg.png')"
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
