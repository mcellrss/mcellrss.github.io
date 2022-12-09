const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    extend: {
    
    },
  },
  // ...
}

module.exports = {
  content: [ './public/index.html',
              './src/**/*.{html,js}',
            ],
              theme: {
      extend: {
        gridTemplateRows: {
          '[auto,auto,1fr]': 'auto auto 1fr',
        },
  fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      },
    },
              },
              plugins: [  require('@tailwindcss/aspect-ratio'),],
            }
     
