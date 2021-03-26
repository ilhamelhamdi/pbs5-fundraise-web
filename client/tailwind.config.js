module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'sm': '640px',
      'md': '832px',
      'lg': '1030px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        mypurple: {
          darkest: '#4F2671',
          dark: '#7D44AA',
          standard: '#A971D6',
          light: '#DAABF7',
          lighter: '#E5BDFF',
          transparent: '#FCF6FF'
        },
      },
      width: {
        '0/20': '0',
        '1/20': '5%',
        '2/20': '10%',
        '3/20': '15%',
        '4/20': '20%',
        '5/20': '25%',
        '6/20': '30%',
        '7/20': '35%',
        '8/20': '40%',
        '9/20': '45%',
        '10/20': '50%',
        '11/20': '55%',
        '12/20': '60%',
        '13/20': '65%',
        '14/20': '70%',
        '15/20': '75%',
        '16/20': '80%',
        '17/20': '85%',
        '18/20': '90%',
        '19/20': '95%',
        '20/20': '100%',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
