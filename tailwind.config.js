/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        '690px': { max: '690px' },
        '586px': { max: '586px' },
        '820px': { max: '820px'}, 
        '410px': {max: '410px'},
        '1352px': {max: '1352px'},
        '1480px': {max: '1480px'},
        '1312px': {max: '1312px'},
        '1000px': {max: '1000px'},
        '905px': {max: '905px'},
        '520px': {max: '520px'},
        '388px': {max: '388px'},
        '900px': {max: '900px'},
        '474px': {max: '474px'},
        '568px': {max: '568px'},
        '767px': {max: '767px'},
        '974px': {max: '974px'},
        '1202px': {max: '1202px'},
        '1406px': {max: '1406px'},
        '1352px': {max: '1352px'},
        '868px': {max: '868px'},
        '428px': {max: '428px'},
        '510px': {max: '510px'},
        '430px': {max: '430px'},
        '355px': {max: '355px'},
        '996px':{max:'996px'},
        '950px':{max:'950px'},
        '952px':{max:'952px'},
        '738px':{max:'738px'},
      },
    },
  },
  plugins: [],
}

