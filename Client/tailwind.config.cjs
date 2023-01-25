/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    './index.html'
  ],
  theme: {
    extend: {
      colors : {
        darkBlue : '#1D3557',
        blueLight : '#457B9D',
        blueSuperLight: '#A8DADC',
        whiteSolid  : '#F1FAEE',
        redSolid : '#E63946'
      },
      backgroundColor :{
        darkBlue : '#1D3557',
        blueLight : '#457B9D',
        blueSuperLight: '#A8DADC',
        whiteSolid  : '#F1FAEE',
        redSolid : '#E63946'
      },
      backgroundImage : {
        'ioga' : "url('./src/assets/ioga.jpg')"
      }
    },
  },
  plugins: [],
}
