
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    
  ],
  darkMode: ['selector', '[data-theme="dark"]'],
  theme: { 
    extend: {
      screens: {
        'other':  {'min': '340px', 'max': '1200px'},
      },
      colors: {darkbg: '#1E293B'},
    },
  },
  plugins: [],
}

