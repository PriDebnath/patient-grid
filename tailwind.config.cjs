/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

const extraColors = {
  brand: {
    "light": {
      gray: "rgba(217,217,217,1)",
      blue: "rgba(221,233,255,1)"
    },
    "gray": "rgba(170,166,166,1)",
    "black-70p": "rgba(0,0,0,0.7)",
    "skyblue": "rgba(35,151,243,1)",
    "gray-text": "rgba(142,135,135,1)",
    "linear-color-1": "rgba(135,206,250,1)",
    "linear-color-2": "rgba(42,8,150,1)",
  }
}






module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"
  ],
  theme: {
    colors: {
      ...colors,
      ...extraColors
    },
    extend: {
      animation: {
        'linear-bg': 'linear-bg 3s linear infinite',
      },
      keyframes: {
        "linear-bg": {
          '100%': {
            background: "linear-gradient(to right ,rgba(42,8,150,1),rgba(135,206,250,1))"
          },
        }
      }
    },
  },
  plugins: [],
}
