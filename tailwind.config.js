module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, 
  theme: {
    extend: {
      colors: {
        'custom-light-green': '#E0EBCB',
        'custom-white': '#FFFFFF',
        'custom-black':'0F1035',
        'custom-olive-green':'#9DCD4F',
        'custom-purple':'#6049BC',
        'custom-blacky':'#252F40',
        'custom-deep-purple':'#664FCD',
        'custom-blackish':'#123800',
        'custom-blackyy':'#121416'
      },
      spacing: {
        '30': '30px',
        '234': '234px',
        '270': '270px', 
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
