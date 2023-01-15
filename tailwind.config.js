/** @type {import('tailwindcss').Config} */
const twinConfig = {
  theme: {
    extend: {
      colors: {
        electric: '#db00ff',
        ribbon: '#0047ff',
      },
    },
  },
  content: ['node_modules/daisyui/dist/**/*.js'],
  plugins: [require('daisyui')],
}

module.exports = twinConfig
