/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        "ibmmono" : ['IBM Plex Mono', "monospace"],
        "ibmsans" : ['IBM Plex Sans', "sans-serif"],
        'nostromo' : ['Nostromo', "monospace"],

      }
    },
  },
  plugins: [],
}