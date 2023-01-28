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
        test : '#e6ebe0',
        redSolid : '#E63946'
      },
      backgroundImage : {
        'ioga' : "url('./src/assets/ioga.jpg')"
      },
      borderRadius : {
        fancy : '60% 40% 24% 76% / 36% 33% 67% 64% '
      },
      fontFamily : {
        main : 'Halvetica'
      },
      boxShadow : {
        forms : 'box-shadow: 21px 21px 35px -25px rgba(0,0,0,0.75)'
      }
      
    },
  },
  plugins: [],
}
