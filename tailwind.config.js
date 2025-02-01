/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        animation: {
          'custom-ping': 'customPing 1.5s cubic-bezier(0, 0, 0.2, 1) infinite',
        },
        keyframes: {
          customPing: {
            '0%': { transform: 'scale(1)', opacity: '1' },
            '75%': { transform: 'scale(1.5)', opacity: '0' },
            '100%': { transform: 'scale(2)', opacity: '0' },
          },
        },
        
      },
    },
    plugins: [],
  }