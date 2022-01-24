module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        'custom-black':'#3e4853',
        'custom-grey':'#a6abad',
        'custom-grey-shade':'#7f7e7e',
        'custom-bluegrey':'#f1f4f6',
        'custom-green':'#06bd7b',
        'custom-pink':'#ec2268',
        'custom-blue':'#2196f3',
      }
    },
    screens: {
      '2xl': {'max': '1536px'},
      '2XL':{'min':'1536px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1280px'},
      'XL':{'min':'1280px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1024px'},
      'LG':{'min':'1024px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '768px'},
      'MD':{'min':'768px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '640px'},
      'SM':{'min':'640px'},
      // => @media (max-width: 639px) { ... }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
