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
  // https://github.com/daisyui/react-daisyui
  content: ['node_modules/daisyui/dist/**/*.js'],
  // refer:  https://daisyui.com/docs/install/
  plugins: [require('daisyui')],
}

module.exports = twinConfig
