/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        'darkBlack': '#1A1A1A',
        'lighterBlack': '#2A2A2A',
        'lightestBlack': '#3A3A3A',
        'darkSilver': '#A2A2A2',
        'lighterSilver': '#B4B4B4',
        'lightestSilver': '#D9D9D9',
        'deepPurple': '#9C59F0',
        'softPurple': '#C9B6FF',
        'softBlue': '#88F1FF',
        'softGreen': '#88FFCD',
        'mainBgColor': '#ECF1FD'
      },
      fontFamily: {
        primaryFont: "'Roboto', sans-serif",
        secondaryFont: "'Nunito', sans-serif",
      },
      minHeight:{
        workMoreBtnMinHeight: '3rem'
        
      },
      height: {
        sectionHeight: '900px',
        FeauturedWorkCard: '40.625rem'
      },
      width: {
        pfpImgWidth: '35vw',
        mobileNavWidth: '77%',
        offerCardWidth: '28.125rem'
      },
      maxWidth: {
        maxBtnWidth: '160px',
        maxUnderlineWidth: '90%',
        maxPfpWidth: '700px',
        maxWorkCardWidth: '31.25rem'
      },
      padding: {
        '10%': '10%'
      },
      blur: {
        xs: '2px'
      },
      animation: {
        fadeIn: '.8s ease-in-out forwards',
        homeHeroTextTransformLG: '4s ease-in-out forwards',
        homeHeroTextTransform: '4s ease-in-out forwards',
        heroPfpShaddow: '8s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': {opacity:'0'},
          '100%': {opacity:'1'},
        },
        homeHeroTextTransformLG: {
          '0%': {transform: 'translateY(0px)'},
          '25%': {transform: 'translateY(-70px)'},
          '75%': {transform: 'translateY(-70px)'},
          '100%': {transform: 'translateY(-140px)'},
        },
        homeHeroTextTransform: {
          '0%': {transform: 'translateY(0px)'},
          '25%': {transform: 'translateY(-50px)'},
          '75%': {transform: 'translateY(-50px)'},
          '100%': {transform: 'translateY(-100px)'},
        },
        heroPfpShaddow: {
          '0%': {filter:'drop-shadow(0px 0px 100px #AE9FE2)'},
          '50%': {filter:'drop-shadow(0px 0px 130px #7c69c0)'},
          '100%': {filter:'drop-shadow(0px 0px 100px #AE9FE2)'},
        },
      },
    },
  },
  plugins: [],
}
