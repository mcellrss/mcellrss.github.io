module.exports = {
  content: [ './public/index.html',
              './src/**/*.{html,js}',
            ],
              theme: {
                extend: {
      extend: {
        gridTemplateRows: {
          '[auto,auto,1fr]': 'auto auto 1fr',
        },
      },
    },
              },
              plugins: [  require('@tailwindcss/aspect-ratio'),],
            }
     
