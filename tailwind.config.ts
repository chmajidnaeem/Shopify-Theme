/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./src/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    
     
  ],
  theme: {

      extend: {},

    colors: {
      
      'white': '#ffffff',
     'green':'#C1E502',
     'black':'#1D1D1D',
     'gray':'#EEEEEE',
    'text-gray': "#616161"
    
      
    },

  },
  plugins: [
    [require("@tailwindcss/aspect-ratio")]
  ],
}
