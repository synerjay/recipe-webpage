module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#FF6363',
        secondary: {
          100: '#E2E2D5',
          200: '#888883',
        },
      },
      fontFamily: {
        body: ['Nunito'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

// Every time you change the theme in the config file, you need to run the script in the package.json

// script: npm run build-css

// to start the server type: live-server public

// to add a custom font, import the font in the source CSS and then add the font in the extnesion in the tailwind config
// you can name it anything... in this case you can use in html class "font-body"
