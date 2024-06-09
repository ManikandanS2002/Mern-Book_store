const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content()
  ],
  theme: {
    extend: {
      boxShadow:{
        'neon-blue':'0 0 10px #00ffff, 0 0 20px #00ffff, 0 0 30px #00ffff'
      }
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
}
